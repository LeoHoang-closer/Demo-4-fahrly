"use client";

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface DataTableProps {
  columns: string[];
  rows: string[][];
}

const numericPattern = /^-?[€$£¥]?\s*[\d,.']+\s*[€$£¥%]?(\s*(km|days?|h))?$/i;
function isNumeric(val: string) { return numericPattern.test(val.trim()); }

const statusValues = new Set(["active", "aktiv", "churned", "inaktiv", "service due", "service fällig", "in depot"]);
function isStatus(val: string) { return statusValues.has(val.toLowerCase()); }

const statusVariant = (val: string): "success" | "warning" | "destructive" | "default" => {
  const v = val.toLowerCase();
  if (v === "active" || v === "aktiv") return "success";
  if (v === "churned" || v === "inaktiv") return "destructive";
  if (v.includes("due") || v.includes("fällig") || v.includes("depot")) return "warning";
  return "default";
};

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-x-auto">
      <Table className="w-auto">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {columns.map((col, i) => (
              <TableHead key={i} className="whitespace-nowrap">{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, ri) => (
            <TableRow key={ri}>
              {row.map((cell, ci) => (
                <TableCell key={ci} className={`whitespace-nowrap ${isNumeric(cell) ? "text-right" : "text-left"}`}>
                  {isStatus(cell) ? (
                    <Badge variant={statusVariant(cell)}>{cell}</Badge>
                  ) : isNumeric(cell) ? (
                    <span className="font-numeric">{cell}</span>
                  ) : cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
