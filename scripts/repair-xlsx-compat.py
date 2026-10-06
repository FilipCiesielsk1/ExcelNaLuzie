#!/usr/bin/env python3
from pathlib import Path, PurePosixPath
from zipfile import ZipFile, BadZipFile
import posixpath
import xml.etree.ElementTree as ET

CT = "http://schemas.openxmlformats.org/package/2006/content-types"
REL = "http://schemas.openxmlformats.org/package/2006/relationships"
SS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"

def q(ns, tag):
    return f"{{{ns}}}{tag}"

def resolve_target(rels_name: str, target: str) -> str:
    if target.startswith("/"):
        return target.lstrip("/")

    if rels_name == "_rels/.rels":
        base = ""
    else:
        rel_path = PurePosixPath(rels_name)
        source_dir = rel_path.parent.parent
        base = source_dir.as_posix()

    return posixpath.normpath(posixpath.join(base, target))

def validate_relationships(z: ZipFile, names: set[str], rels_name: str):
    root = ET.fromstring(z.read(rels_name))
    for rel in root.findall(q(REL, "Relationship")):
        if rel.get("TargetMode") == "External":
            continue

        target = rel.get("Target", "")
        if target.startswith("/"):
            raise RuntimeError(f"{rels_name}: absolute relationship target is not allowed: {target}")

        resolved = resolve_target(rels_name, target)
        if resolved not in names:
            raise RuntimeError(f"{rels_name}: missing relationship target {target} -> {resolved}")

def validate_xlsx(path: Path):
    try:
        with ZipFile(path, "r") as z:
            names = set(z.namelist())

            bad_member = z.testzip()
            if bad_member:
                raise RuntimeError(f"CRC error in ZIP member: {bad_member}")

            required = {
                "[Content_Types].xml",
                "_rels/.rels",
                "xl/workbook.xml",
                "xl/_rels/workbook.xml.rels",
            }
            missing = required - names
            if missing:
                raise RuntimeError(f"missing required OOXML parts: {sorted(missing)}")

            for name in names:
                if name.endswith(".xml") or name.endswith(".rels"):
                    ET.fromstring(z.read(name))

            ct = ET.fromstring(z.read("[Content_Types].xml"))

            xml_defaults = [
                n for n in ct
                if n.tag == q(CT, "Default") and n.get("Extension") == "xml"
            ]
            if len(xml_defaults) != 1 or xml_defaults[0].get("ContentType") != "application/xml":
                raise RuntimeError("invalid default content type for .xml")

            workbook_override = any(
                n.tag == q(CT, "Override")
                and n.get("PartName") == "/xl/workbook.xml"
                and n.get("ContentType") == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"
                for n in ct
            )
            if not workbook_override:
                raise RuntimeError("missing workbook content-type override")

            for node in ct.findall(q(CT, "Override")):
                part = node.get("PartName", "").lstrip("/")
                if part and part not in names:
                    raise RuntimeError(f"content type points to missing part: {part}")

            for rels_name in sorted(n for n in names if n.endswith(".rels")):
                validate_relationships(z, names, rels_name)

            for sheet_name in sorted(
                n for n in names
                if n.startswith("xl/worksheets/") and n.endswith(".xml")
            ):
                sheet = ET.fromstring(z.read(sheet_name))
                for cell in sheet.iter(q(SS, "c")):
                    if cell.get("t") == "str" and cell.find(q(SS, "f")) is None:
                        ref = cell.get("r", "?")
                        raise RuntimeError(
                            f"{sheet_name}!{ref}: literal text stored as t='str'; use inlineStr/sharedStrings"
                        )

    except BadZipFile as exc:
        raise RuntimeError(f"invalid ZIP container: {exc}") from exc

def main():
    root = Path("public/downloads/szablony")
    files = sorted(root.glob("*.xlsx"))

    if not files:
        raise SystemExit("No XLSX templates found.")

    failed = False
    for path in files:
        try:
            validate_xlsx(path)
            print(f"OK: {path}")
        except Exception as exc:
            failed = True
            print(f"ERROR: {path}: {exc}")

    if failed:
        raise SystemExit(1)

    print(f"Validated {len(files)} XLSX template(s).")

if __name__ == "__main__":
    main()
