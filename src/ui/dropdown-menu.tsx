import React, { useState } from "react";

interface DropdownMenuProps {
  label: string;
  items: { label: string; onClick: () => void }[];
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className || ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        {label}
      </button>
      {open && (
        <div className="absolute mt-2 w-40 bg-white border rounded shadow">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
