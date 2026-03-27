import React from "react";

interface MissionProps {
  statement: string;
}

export const Mission: React.FC<MissionProps> = ({ statement }) => {
  return (
    <section className="p-4 bg-gray-50 rounded-md">
      <h2 className="text-xl font-bold mb-2">Mission</h2>
      <p className="text-gray-700">{statement}</p>
    </section>
  );
};
