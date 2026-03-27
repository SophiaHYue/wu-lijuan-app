import React from "react";

interface AboutProps {
  title: string;
  description: string;
}

export const About: React.FC<AboutProps> = ({ title, description }) => {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </section>
  );
};
