import React from 'react';
import { IconArrowRight } from './SvgIcons';

interface DropdownBannerCardProps {
  href: string;
  title: string;
  subtitle: string;
  external?: boolean;
  dark?: boolean;
}

export const DropdownBannerCard: React.FC<DropdownBannerCardProps> = ({ href, title, subtitle, external = false, dark = false }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex items-center p-4 rounded-lg space-x-4 ${dark ? 'bg-gray-800' : 'bg-gray-100'} group`}
    >
      <div className="p-2 rounded-full bg-black/20 group-hover:bg-black/30 transition-colors">
        <IconArrowRight className="w-5 h-5" fill={dark ? '#ffffff' : '#6C6F75'} wrapperClassName="" /> {/* Adjusted size */}
      </div>
      <div>
        <div className="mb-0.5">
          <p className={`text-base font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</p>
        </div>
        <div>
          <p className={`text-base ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
        </div>
      </div>
    </a>
  );
};