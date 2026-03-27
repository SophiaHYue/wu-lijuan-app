import React from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  className,
}) => {
  const colors: Record<string, string> = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div
      className={`border rounded-md px-4 py-2 ${colors[type]} ${className || ""}`}
    >
      {message}
    </div>
  );
};
