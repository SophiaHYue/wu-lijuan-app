import React from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  className?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={`border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 
                  disabled:opacity-50 disabled:cursor-not-allowed ${className || ""}`}
    />
  );
};
