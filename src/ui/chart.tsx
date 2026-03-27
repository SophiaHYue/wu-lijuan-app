import React from "react";

interface ChartProps {
  data: { label: string; value: number }[];
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({ data, className }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className={`flex items-end space-x-2 h-40 ${className || ""}`}>
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="bg-orange-500 w-6 rounded"
            style={{ height: `${(d.value / maxValue) * 100}%` }}
          />
          <span className="text-xs mt-1">{d.label}</span>
        </div>
      ))}
    </div>
  );
};
