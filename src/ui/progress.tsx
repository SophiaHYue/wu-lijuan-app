import React from "react";

interface ProgressProps {
  value: number; // 進度百分比 (0 ~ 100)
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 ${className || ""}`}>
      <div
        className="bg-orange-500 h-4 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
