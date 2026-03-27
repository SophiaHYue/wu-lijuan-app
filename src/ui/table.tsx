import React from "react";

interface Column<T> {
  header: string;
  accessor: keyof T;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function Table<T extends object>({ data, columns, className }: TableProps<T>) {
  return (
    <table className={`min-w-full border border-gray-300 rounded-md ${className || ""}`}>
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.accessor)}
              className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td
                key={String(col.accessor)}
                className="px-4 py-2 text-sm text-gray-600 border-b"
              >
                {String(row[col.accessor])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
