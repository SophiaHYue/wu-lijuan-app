import React from "react";

interface EmptyProps {
  message: string;
  className?: string;
}

export const Empty: React.FC<EmptyProps> = ({ message, className }) => {
  return (
    <div className={`flex items-center justify-center p-6 text-gray-500 ${className || ""}`}>
      {message}
    </div>
  );
};
