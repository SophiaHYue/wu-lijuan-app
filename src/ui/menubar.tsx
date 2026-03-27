import React from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface MenubarProps {
  items: MenuItem[];
  className?: string;
}

export const Menubar: React.FC<MenubarProps> = ({ items, className }) => {
  return (
    <nav className={`bg-gray-900 text-white px-6 py-3 ${className || ""}`}>
      <ul className="flex space-x-6">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="hover:text-orange-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
