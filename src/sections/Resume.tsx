import React from "react";

interface ResumeProps {
  experiences: { company: string; role: string; period: string; description: string }[];
}

export const Resume: React.FC<ResumeProps> = ({ experiences }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">Resume</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="border-b pb-4">
          <h3 className="font-semibold">{exp.role} @ {exp.company}</h3>
          <p className="text-sm text-gray-500">{exp.period}</p>
          <p className="mt-2 text-gray-700">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};
