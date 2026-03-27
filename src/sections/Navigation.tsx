import React from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="flex space-x-4 bg-gray-100 px-4 py-2 rounded">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="text-gray-700 hover:text-orange-600 font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
