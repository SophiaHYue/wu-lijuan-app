import React, { useState } from "react";

interface HoverCardProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export const HoverCard: React.FC<HoverCardProps> = ({ trigger, content, className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative inline-block ${className || ""}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {trigger}
      {visible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded shadow p-2">
          {content}
        </div>
      )}
    </div>
  );
};
