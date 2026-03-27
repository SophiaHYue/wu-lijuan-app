import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`w-full ${className || ""}`}>
      {/* 標籤列 */}
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
              activeIndex === index
                ? "border-orange-500 text-orange-600 font-medium"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 內容區域 */}
      <div className="p-4">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
