import React, { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ title, children, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-md ${className || ""}`}>
      <button
        className="w-full text-left px-4 py-2 font-medium bg-gray-100 hover:bg-gray-200"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && <div className="px-4 py-2 text-gray-700">{children}</div>}
    </div>
  );
};
