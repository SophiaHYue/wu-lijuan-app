import React, { useState } from "react";

interface CalendarProps {
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({ className }) => {
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // 預設今天
  });

  return (
    <div className={`border rounded-md p-4 bg-white shadow-sm ${className || ""}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        選擇日期
      </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <p className="mt-3 text-sm text-gray-600">目前選擇：{date}</p>
    </div>
  );
};
