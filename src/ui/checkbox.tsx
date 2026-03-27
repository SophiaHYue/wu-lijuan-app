import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  className,
  disabled = false,
}) => {
  return (
    <label
      className={`flex items-center space-x-2 cursor-pointer ${className || ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="form-checkbox h-4 w-4 text-orange-500 rounded focus:ring-orange-400"
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
};
