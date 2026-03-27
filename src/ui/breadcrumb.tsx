import React from "react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className || ""}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          {item.href ? (
            <a href={item.href} className="text-gray-700 hover:text-orange-600">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
        </span>
      ))}
    </nav>
  );
};
