// src/components/ArrowIcon.tsx
import React from 'react';
import { NavArrowLeftIcon, NavArrowRightIcon } from './SVGIcons';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  className?: string;
  hideOnTablet?: boolean; // Corresponds to .hide-tablet
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick, className, hideOnTablet = false }) => {
  const Icon = direction === 'left' ? NavArrowLeftIcon : NavArrowRightIcon;
  const hideClass = hideOnTablet ? 'hidden md:flex' : ''; // Use flex to center icon

  return (
    <button
      onClick={onClick}
      className={`arrow-directions flex items-center justify-center p-2 transition-colors duration-200 ${hideClass} ${className || ''}`}
    >
      <div className="arrow-directions_icon w-8 h-8 flex items-center justify-center"> {/* icon_32 */}
        <Icon className="w-full h-full text-gray-500 hover:text-gray-700" />
      </div>
    </button>
  );
};

export default Arrow;