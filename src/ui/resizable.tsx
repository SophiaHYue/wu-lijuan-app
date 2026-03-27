import React, { useState } from "react";

interface ResizableProps {
  children: React.ReactNode;
  minWidth?: number;
  minHeight?: number;
  className?: string;
}

export const Resizable: React.FC<ResizableProps> = ({
  children,
  minWidth = 100,
  minHeight = 100,
  className,
}) => {
  const [size, setSize] = useState({ width: 200, height: 200 });

  const handleResize = (e: React.MouseEvent<HTMLDivElement>) => {
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newHeight = e.clientY - e.currentTarget.getBoundingClientRect().top;
    setSize({
      width: Math.max(newWidth, minWidth),
      height: Math.max(newHeight, minHeight),
    });
  };

  return (
    <div
      className={`relative border rounded ${className || ""}`}
      style={{ width: size.width, height: size.height }}
    >
      {children}
      <div
        onMouseDown={(e) => {
          e.preventDefault();
          document.onmousemove = (ev) => handleResize(ev as unknown as React.MouseEvent<HTMLDivElement>);
          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }}
        className="absolute bottom-0 right-0 w-4 h-4 bg-gray-300 cursor-se-resize"
      />
    </div>
  );
};
