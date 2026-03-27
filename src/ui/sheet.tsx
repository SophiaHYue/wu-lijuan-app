import React from "react";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}

export const Sheet: React.FC<SheetProps> = ({
  open,
  onClose,
  children,
  side = "right",
  className,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      />
      <div
        className={`relative bg-white shadow-lg h-full w-80 ${
          side === "right" ? "ml-auto" : "mr-auto"
        } ${className || ""}`}
      >
        {children}
      </div>
    </div>
  );
};
