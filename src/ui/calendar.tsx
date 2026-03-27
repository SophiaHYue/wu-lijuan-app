import React from "react";

interface CalendarProps {
  currentMonth: Date;
  onSelectDate: (date: Date) => void;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  currentMonth,
  onSelectDate,
  className,
}) => {
  const start = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const end = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const days = Array.from({ length: end.getDate() }, (_, i) => i + 1);

  return (
    <div className={`grid grid-cols-7 gap-2 ${className || ""}`}>
      {days.map((day) => (
        <button
          key={day}
          onClick={() =>
            onSelectDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
          }
          className="px-2 py-1 rounded hover:bg-orange-100"
        >
          {day}
        </button>
      ))}
    </div>
  );
};
