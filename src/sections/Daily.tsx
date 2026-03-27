import React from "react";

interface DailyProps {
  tasks: string[];
}

export const Daily: React.FC<DailyProps> = ({ tasks }) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Daily Tasks</h2>
      <ul className="list-disc pl-6 space-y-2">
        {tasks.map((task, i) => (
          <li key={i} className="text-gray-700">{task}</li>
        ))}
      </ul>
    </section>
  );
};
