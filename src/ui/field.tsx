import React from "react";

interface FieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const Field: React.FC<FieldProps> = ({ label, children, className }) => {
  return (
    <div className={`flex flex-col space-y-1 ${className || ""}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
};
