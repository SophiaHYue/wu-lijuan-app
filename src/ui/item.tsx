import React from "react";

interface ItemProps {
  title: string;
  description?: string;
  className?: string;
}

export const Item: React.FC<ItemProps> = ({ title, description, className }) => {
  return (
    <div
      className={`border rounded-md p-4 shadow-sm bg-white hover:shadow-md transition ${className || ""}`}
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
};
