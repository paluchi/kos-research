interface Column<T> {
  key: keyof T;
  label: string;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted ${col.className ?? ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-0 hover:bg-surface-hover transition-colors"
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`px-4 py-3 text-text ${col.className ?? ""}`}
                >
                  {String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
