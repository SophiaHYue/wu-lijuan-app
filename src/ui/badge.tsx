import React from "react";

interface BadgeProps {
  text: string;
  color?: "gray" | "red" | "green" | "blue" | "yellow" | "purple" | "orange";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  color = "gray",
  className,
}) => {
  const colors: Record<string, string> = {
    gray: "bg-gray-200 text-gray-800",
    red: "bg-red-200 text-red-800",
    green: "bg-green-200 text-green-800",
    blue: "bg-blue-200 text-blue-800",
    yellow: "bg-yellow-200 text-yellow-800",
    purple: "bg-purple-200 text-purple-800",
    orange: "bg-orange-200 text-orange-800",
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded ${colors[color]} ${className || ""}`}
    >
      {text}
    </span>
  );
};
