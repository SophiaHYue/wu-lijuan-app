import React, { useState } from "react";

interface ContextMenuProps {
  items: { label: string; onClick: () => void }[];
  children: React.ReactNode;
  className?: string;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ items, children, className }) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
    setVisible(true);
  };

  return (
    <div className={`relative ${className || ""}`} onContextMenu={handleContextMenu}>
      {children}
      {visible && (
        <div
          className="absolute bg-white border rounded shadow"
          style={{ top: pos.y, left: pos.x }}
          onMouseLeave={() => setVisible(false)}
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.onClick();
                setVisible(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
