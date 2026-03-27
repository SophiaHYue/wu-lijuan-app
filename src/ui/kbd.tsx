import React from "react";

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export const Kbd: React.FC<KbdProps> = ({ children, className }) => {
  return (
    <kbd
      className={`px-2 py-1 border rounded bg-gray-100 text-xs font-mono ${className || ""}`}
    >
      {children}
    </kbd>
  );
};
