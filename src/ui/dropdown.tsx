import React, { useState } from "react";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "請選擇...",
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className={`relative inline-block ${className || ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="border px-4 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 w-40 text-left"
      >
        {selected || placeholder}
      </button>

      {open && (
        <ul className="absolute mt-1 w-full border rounded-md bg-white shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
