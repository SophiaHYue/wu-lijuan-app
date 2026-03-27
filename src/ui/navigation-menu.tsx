import React from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavItem[];
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, className }) => {
  return (
    <nav className={`flex space-x-4 ${className || ""}`}>
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
