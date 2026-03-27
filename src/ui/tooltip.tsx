import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;   // 觸發元素
  text: string;                // 提示文字
  position?: "top" | "right" | "bottom" | "left"; // 提示位置
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = "top",
  className,
}) => {
  const [visible, setVisible] = useState(false);

  const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg ${positionClasses[position]} ${className || ""}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};
