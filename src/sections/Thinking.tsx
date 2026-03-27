import React from "react";

interface ThinkingProps {
  ideas: string[];
}

export const Thinking: React.FC<ThinkingProps> = ({ ideas }) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Thinking</h2>
      <div className="space-y-3">
        {ideas.map((idea, i) => (
          <div key={i} className="p-3 border rounded bg-gray-50">
            {idea}
          </div>
        ))}
      </div>
    </section>
  );
};
