import React, { useState } from "react";

interface ToggleProps {
  onLabel?: string;
  offLabel?: string;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ onLabel = "On", offLabel = "Off", className }) => {
  const [on, setOn] = useState(false);

  return (
    <button
      onClick={() => setOn(!on)}
      className={`px-4 py-2 rounded border ${
        on ? "bg-orange-500 text-white" : "bg-white text-gray-700"
      } ${className || ""}`}
    >
      {on ? onLabel : offLabel}
    </button>
  );
};
