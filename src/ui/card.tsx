import React from "react";

interface CardProps {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, footer, className }) => {
  return (
    <div
      className={`border rounded-lg shadow-sm bg-white p-4 hover:shadow-md transition ${className || ""}`}
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
      {footer && <div className="mt-4 border-t pt-2 text-sm text-gray-500">{footer}</div>}
    </div>
  );
};
