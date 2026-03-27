import React from "react";

interface SocialLink {
  label: string;
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex space-x-4">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-orange-600"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
