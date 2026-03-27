import React, { useState } from "react";

interface RadioGroupProps {
  options: string[];
  onChange: (value: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ options, onChange, className }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className={`flex flex-col space-y-2 ${className || ""}`}>
      {options.map((opt) => (
        <label key={opt} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            checked={selected === opt}
            onChange={() => handleSelect(opt)}
            className="form-radio text-orange-500"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
};
