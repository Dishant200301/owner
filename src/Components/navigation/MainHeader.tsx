import React from 'react';
import { Logo } from './Logo';
import { AuthButtons } from './AuthButtons';
import { ProductDropdown } from '../common/ProductDropdown';
import { CompanyDropdown } from '../common/CompanyDropdown';
import { ResourcesDropdown } from '../common/ResourcesDropdown';
import { NavLink } from '../common/NavLink'; // Reusing simple NavLink

export const MainHeader: React.FC = () => {
  return (
    <header className="bg-neutral-50 py-4 shadow-sm"> {/* Adjust background color as per image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Section: Logo */}
        <Logo />

        {/* Middle Section: Navigation Links (Desktop) */}
        {/* This section will be hidden on mobile/tablet for a hamburger menu, but for this conversion, we focus on desktop layout */}
        <nav role="navigation" className="hidden lg:flex items-center space-x-1"> {/* nav_menu w-nav-menu - flex for inline items */}
          <ProductDropdown />
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/how-owner-works">How it works</NavLink>
          <CompanyDropdown />
          <ResourcesDropdown />
        </nav>

        {/* Right Section: Auth Buttons */}
        <AuthButtons />

        {/* For a full responsive solution, you'd add a mobile menu toggle here */}
        {/* <div className="lg:hidden">
            <button className="p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div> */}
      </div>
    </header>
  );
};