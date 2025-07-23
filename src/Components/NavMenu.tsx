import React from 'react';
import { Dropdown } from '../Components/common/Dropdown';
import { NavLink } from '../Components/common/NavLink';
import { ProductDropdown } from '../Components/common/ProductDropdown';
import { CompanyDropdown } from '../Components/common/CompanyDropdown';
import { ResourcesDropdown } from '../Components/common/ResourcesDropdown';

export const NavMenu: React.FC = () => {
  return (
    <nav role="navigation" className="bg-white shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center space-x-4">
          <ProductDropdown />
          
          <Dropdown title="More">
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/careers">Careers</NavLink>
          </Dropdown>
          
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/how-owner-works">How it works</NavLink>
          <CompanyDropdown />
          <ResourcesDropdown />
        </div>
      </div>
    </nav>
  );
};
