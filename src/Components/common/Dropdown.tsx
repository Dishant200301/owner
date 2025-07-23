import React, { useState } from 'react';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group" // w-dropdown translated to relative and group for hover
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="py-3 px-4 text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer flex items-center">
        <div>{title}</div>
        {/* Simple arrow icon for dropdown */}
        <svg
          className={`ml-1 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <nav
        className={`absolute left-0 top-full mt-0.5 z-50 bg-white shadow-lg rounded-xl min-w-[500px] transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible' // Using invisible for animation, hidden for instant
        }`}
        style={isOpen ? {} : { pointerEvents: 'none' }} // Disable pointer events when invisible
      >
        {children}
      </nav>
    </div>
  );
};