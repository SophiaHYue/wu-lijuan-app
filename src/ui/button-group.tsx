import React from "react";

interface ButtonGroupProps {
  buttons: { label: string; onClick: () => void }[];
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, className }) => {
  return (
    <div className={`flex space-x-2 ${className || ""}`}>
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={btn.onClick}
          className="px-3 py-1 rounded border bg-white hover:bg-gray-100"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};
