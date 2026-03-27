import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
  disabled = false,
}) => {
  const variants: Record<string, string> = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 
                  disabled:opacity-50 disabled:cursor-not-allowed 
                  ${variants[variant]} ${className || ""}`}
    >
      {children}
    </button>
  );
};
