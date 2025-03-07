import { cn } from "@/lib/utils";
import type React from "react";

type ResponsiveValue<T> = {
  sm?: T;
  md?: T;
  lg?: T;
};

type GridProps = {
  children: React.ReactNode;
  rows: ResponsiveValue<number>;
  columns: ResponsiveValue<number>;
  className?: string;
};

type CellProps = {
  children: React.ReactNode;
  row?: ResponsiveValue<string>;
  column?: ResponsiveValue<string>;
  rowSpan?: number;
  columnSpan?: number;
  solid?: boolean;
  className?: string;
};

type CrossProps = {
  row: number;
  column: number;
  className?: string;
};

export function Grid({ children, rows, columns, className }: GridProps) {
  const gridTemplateRows = {
    sm: `repeat(${rows.sm}, minmax(0, 1fr))`,
    md: `repeat(${rows.md}, minmax(0, 1fr))`,
    lg: `repeat(${rows.lg}, minmax(0, 1fr))`,
  };

  const gridTemplateColumns = {
    sm: `repeat(${columns.sm}, minmax(0, 1fr))`,
    md: `repeat(${columns.md}, minmax(0, 1fr))`,
    lg: `repeat(${columns.lg}, minmax(0, 1fr))`,
  };

  return (
    <div
      className={cn(
        "grid h-full w-full",
        `grid-rows-[${gridTemplateRows.sm}]`,
        `md:grid-rows-[${gridTemplateRows.md}]`,
        `lg:grid-rows-[${gridTemplateRows.lg}]`,
        `grid-cols-[${gridTemplateColumns.sm}]`,
        `md:grid-cols-[${gridTemplateColumns.md}]`,
        `lg:grid-cols-[${gridTemplateColumns.lg}]`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Cell({
  children,
  row,
  column,
  rowSpan,
  columnSpan,
  solid = false,
  className,
}: CellProps) {
  return (
    <div
      className={cn(
        "relative",
        row?.sm && `row-[${row.sm}]`,
        row?.md && `md:row-[${row.md}]`,
        row?.lg && `lg:row-[${row.lg}]`,
        column?.sm && `col-[${column.sm}]`,
        column?.md && `md:col-[${column.md}]`,
        column?.lg && `lg:col-[${column.lg}]`,
        rowSpan && `row-span-${rowSpan}`,
        columnSpan && `col-span-${columnSpan}`,
        solid ? "bg-background" : "bg-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Cross({ row, column, className }: CrossProps) {
  return (
    <div
      className={cn(
        "absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background",
        className,
      )}
      style={{
        gridRow: row,
        gridColumn: column,
      }}
    />
  );
}
