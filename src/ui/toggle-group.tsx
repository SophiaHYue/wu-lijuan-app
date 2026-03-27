import React, { useState } from "react";

interface ToggleGroupProps {
  options: string[];
  onChange: (value: string) => void;
  className?: string;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ options, onChange, className }) => {
  const [active, setActive] = useState(options[0]);

  const handleClick = (value: string) => {
    setActive(value);
    onChange(value);
  };

  return (
    <div className={`flex space-x-2 ${className || ""}`}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleClick(opt)}
          className={`px-3 py-1 rounded border ${
            active === opt ? "bg-orange-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};
