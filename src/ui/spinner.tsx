import React from "react";

interface SpinnerProps {
  size?: number;       // 大小 (px)
  color?: string;      // 顏色 (Tailwind class)
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color = "border-orange-500",
  className,
}) => {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color} ${className || ""}`}
      style={{ width: size, height: size }}
    />
  );
};
