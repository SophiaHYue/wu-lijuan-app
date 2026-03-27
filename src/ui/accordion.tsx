import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`border rounded-md divide-y ${className || ""}`}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium"
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 bg-white">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
