import React, { useState } from "react";

interface SidebarItem {
  label: string;
  href: string;
}

interface SidebarProps {
  items: SidebarItem[];
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`bg-gray-800 text-white h-screen p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } ${className || ""}`}
    >
      {/* 切換按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 text-sm bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
      >
        {isOpen ? "收起" : "展開"}
      </button>

      {/* 選單項目 */}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block px-2 py-1 rounded hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? item.label : item.label.charAt(0)}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
