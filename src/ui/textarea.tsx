import React from "react";

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  disabled?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  className,
  disabled = false,
}) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 
                  disabled:opacity-50 disabled:cursor-not-allowed ${className || ""}`}
    />
  );
};
