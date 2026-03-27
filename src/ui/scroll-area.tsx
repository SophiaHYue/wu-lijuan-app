import React from "react";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  height?: string; // 可自訂高度，例如 "300px"
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className,
  height = "300px",
}) => {
  return (
    <div
      className={`overflow-y-auto border rounded-md p-4 ${className || ""}`}
      style={{ maxHeight: height }}
    >
      {children}
    </div>
  );
};
