import React from "react";

interface AspectRatioProps {
  ratio: number; // width / height
  children: React.ReactNode;
  className?: string;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, className }) => {
  return (
    <div
      className={`relative w-full ${className || ""}`}
      style={{ paddingTop: `${100 / ratio}%` }}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};
