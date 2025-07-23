import React from 'react';

interface DropdownLinkProps {
  href: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const DropdownLink: React.FC<DropdownLinkProps> = ({ href, icon, title, description }) => {
  return (
    <li>
      <a href={href} className="flex items-start p-3 rounded-lg hover:bg-gray-50 group">
        {icon && <div className="hidden lg:block mr-3 text-gray-500 group-hover:text-gray-700 transition-colors">{icon}</div>}
        <div>
          <div className="mb-0.5">
            <p className="text-base font-medium text-gray-900">{title}</p>
          </div>
          <div>
            <div className="text-gray-600">
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};