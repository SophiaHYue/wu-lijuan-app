import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioProps {
  options: RadioOption[];
  selected: string;
  onChange: (value: string) => void;
  name: string;
  className?: string;
  disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  options,
  selected,
  onChange,
  name,
  className,
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className || ""}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center space-x-2 cursor-pointer ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className="form-radio h-4 w-4 text-orange-500 focus:ring-orange-400"
          />
          <span className="text-sm text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
