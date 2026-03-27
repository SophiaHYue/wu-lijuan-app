import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundUrl }) => {
  return (
    <section
      className="relative flex items-center justify-center h-64 text-center text-white"
      style={{
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-40 p-6 rounded">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
};
