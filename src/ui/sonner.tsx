import React from "react";

interface SonnerProps {
  message: string;
  type?: "success" | "error" | "info";
  className?: string;
}

export const Sonner: React.FC<SonnerProps> = ({
  message,
  type = "info",
  className,
}) => {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded text-white shadow-lg 
                  ${colors[type]} ${className || ""}`}
    >
      {message}
    </div>
  );
};
