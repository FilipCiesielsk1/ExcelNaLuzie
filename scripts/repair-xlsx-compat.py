#!/usr/bin/env python3
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import os
import tempfile
import xml.etree.ElementTree as ET

CT = "http://schemas.openxmlformats.org/package/2006/content-types"
REL = "http://schemas.openxmlformats.org/package/2006/relationships"
SS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"

ET.register_namespace("", CT)

def q(ns, tag):
    return f"{{{ns}}}{tag}"

def xml_bytes(root):
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)

def repair_xlsx(path: Path) -> bool:
    with ZipFile(path, "r") as zin:
        parts = {name: zin.read(name) for name in zin.namelist()}

    changed = False

    # Excel desktop is stricter than some parsers about literal string cells.
    for name in list(parts):
        if not (name.startswith("xl/worksheets/") and name.endswith(".xml")):
            continue

        root = ET.fromstring(parts[name])
        part_changed = False

        for cell in root.iter(q(SS, "c")):
            if cell.get("t") != "str":
                continue
            if cell.find(q(SS, "f")) is not None:
                continue

            value = cell.find(q(SS, "v"))
            text = "" if value is None or value.text is None else value.text

            if value is not None:
                cell.remove(value)

            cell.set("t", "inlineStr")
            inline = ET.Element(q(SS, "is"))
            text_node = ET.SubElement(inline, q(SS, "t"))
            if text[:1].isspace() or text[-1:].isspace():
                text_node.set("{http://www.w3.org/XML/1998/namespace}space", "preserve")
            text_node.text = text
            cell.append(inline)
            part_changed = True

        if part_changed:
            ET.register_namespace("", SS)
            parts[name] = xml_bytes(root)
            changed = True

    # Empty sharedStrings are unnecessary when all strings are inline.
    remove_shared = False
    if "xl/sharedStrings.xml" in parts:
        shared = ET.fromstring(parts["xl/sharedStrings.xml"])
        if not list(shared.iter(q(SS, "si"))):
            parts.pop("xl/sharedStrings.xml", None)
            remove_shared = True
            changed = True

    # Correct OOXML content types. The workbook must be an Override;
    # .xml itself must remain application/xml.
    ct_root = ET.fromstring(parts["[Content_Types].xml"])

    for node in list(ct_root):
        if node.tag == q(CT, "Default") and node.get("Extension") == "xml":
            ct_root.remove(node)
            changed = True
        if remove_shared and node.tag == q(CT, "Override") and node.get("PartName") == "/xl/sharedStrings.xml":
            ct_root.remove(node)
            changed = True

    if not any(n.tag == q(CT, "Default") and n.get("Extension") == "rels" for n in ct_root):
        ET.SubElement(
            ct_root,
            q(CT, "Default"),
            Extension="rels",
            ContentType="application/vnd.openxmlformats-package.relationships+xml",
        )
        changed = True

    ET.SubElement(ct_root, q(CT, "Default"), Extension="xml", ContentType="application/xml")

    if not any(
        n.tag == q(CT, "Override") and n.get("PartName") == "/xl/workbook.xml"
        for n in ct_root
    ):
        ET.SubElement(
            ct_root,
            q(CT, "Override"),
            PartName="/xl/workbook.xml",
            ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
        )
        changed = True

    ET.register_namespace("", CT)
    parts["[Content_Types].xml"] = xml_bytes(ct_root)

    # Normalize root relationship.
    root_rels = ET.fromstring(parts["_rels/.rels"])
    for rel in root_rels.iter(q(REL, "Relationship")):
        if rel.get("Target") == "/xl/workbook.xml":
            rel.set("Target", "xl/workbook.xml")
            changed = True
    ET.register_namespace("", REL)
    parts["_rels/.rels"] = xml_bytes(root_rels)

    # Normalize workbook relationships and remove empty sharedStrings relation.
    wb_rels_name = "xl/_rels/workbook.xml.rels"
    wb_rels = ET.fromstring(parts[wb_rels_name])
    for rel in list(wb_rels):
        if remove_shared and rel.get("Type", "").endswith("/sharedStrings"):
            wb_rels.remove(rel)
            changed = True
            continue
        target = rel.get("Target", "")
        if target.startswith("/xl/"):
            rel.set("Target", target[len("/xl/"):])
            changed = True
    parts[wb_rels_name] = xml_bytes(wb_rels)

    # Normalize worksheet relationships (e.g. table parts).
    for name in list(parts):
        if not (name.startswith("xl/worksheets/_rels/") and name.endswith(".rels")):
            continue
        rel_root = ET.fromstring(parts[name])
        part_changed = False
        for rel in rel_root.iter(q(REL, "Relationship")):
            target = rel.get("Target", "")
            if target.startswith("/xl/"):
                rel.set("Target", "../" + target[len("/xl/"):])
                part_changed = True
        if part_changed:
            parts[name] = xml_bytes(rel_root)
            changed = True

    # Force a clean recalculation in Excel after opening.
    workbook = ET.fromstring(parts["xl/workbook.xml"])
    calc = workbook.find(q(SS, "calcPr"))
    if calc is None:
        calc = ET.SubElement(workbook, q(SS, "calcPr"))
        changed = True
    for key, value in {
        "calcMode": "auto",
        "fullCalcOnLoad": "1",
        "forceFullCalc": "1",
    }.items():
        if calc.get(key) != value:
            calc.set(key, value)
            changed = True

    ET.register_namespace("", SS)
    parts["xl/workbook.xml"] = xml_bytes(workbook)

    if not changed:
        return False

    fd, temp_name = tempfile.mkstemp(suffix=".xlsx", dir=path.parent)
    os.close(fd)
    temp = Path(temp_name)

    try:
        with ZipFile(temp, "w", ZIP_DEFLATED) as zout:
            for name, data in parts.items():
                zout.writestr(name, data)
        os.replace(temp, path)
    finally:
        if temp.exists():
            temp.unlink()

    return True

def validate_xlsx(path: Path):
    with ZipFile(path, "r") as z:
        names = set(z.namelist())

        if "[Content_Types].xml" not in names or "xl/workbook.xml" not in names:
            raise RuntimeError(f"{path}: missing required OOXML parts")

        for name in names:
            if name.endswith(".xml") or name.endswith(".rels"):
                ET.fromstring(z.read(name))

        ct = ET.fromstring(z.read("[Content_Types].xml"))
        xml_defaults = [
            n for n in ct
            if n.tag == q(CT, "Default") and n.get("Extension") == "xml"
        ]
        if len(xml_defaults) != 1 or xml_defaults[0].get("ContentType") != "application/xml":
            raise RuntimeError(f"{path}: invalid default XML content type")

        workbook_override = any(
            n.tag == q(CT, "Override")
            and n.get("PartName") == "/xl/workbook.xml"
            and n.get("ContentType") == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"
            for n in ct
        )
        if not workbook_override:
            raise RuntimeError(f"{path}: missing workbook content-type override")

def main():
    root = Path("public/downloads/szablony")
    files = sorted(root.glob("*.xlsx"))

    if not files:
        print("No XLSX templates found.")
        return

    changed = []
    for path in files:
        if repair_xlsx(path):
            changed.append(path.as_posix())
        validate_xlsx(path)
        print(f"OK: {path}")

    if changed:
        print("Repaired:")
        for item in changed:
            print(f" - {item}")
    else:
        print("All XLSX templates were already normalized.")

if __name__ == "__main__":
    main()
