import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="py-3 px-4 text-base font-medium text-gray-700 hover:text-gray-900 block">
      <div>{children}</div>
    </a>
  );
};