import React from "react";

interface NextStepsProps {
  steps: string[];
}

export const NextSteps: React.FC<NextStepsProps> = ({ steps }) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Next Steps</h2>
      <ul className="list-disc pl-6 space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="text-gray-700">{step}</li>
        ))}
      </ul>
    </section>
  );
};
