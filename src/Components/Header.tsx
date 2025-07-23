import React, { useState, useEffect } from 'react';
// Import your SVG icons as React components
// import { OwnerLogo } from '../assets/icons/OwnerLogo'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav_wrap is-sticky ${isScrolled ? 'fixed' : ''}`}>
      <div className="nav w-nav">
        <div className="nav_container">
          <a href="/" aria-current="page" className="nav_brand w-nav-brand w--current">
            {/* <OwnerLogo /> */}
            <p className="font-bold text-2xl">Owner.com</p> {/* Placeholder */}
          </a>
          <nav role="navigation" className={`nav_menu ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            {/* Navigation links and dropdowns would be converted into components here */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                 <a href="/pricing" className="nav_menu-link">Pricing</a>
                 <a href="/how-owner-works" className="nav_menu-link">How it works</a>
                 {/* ... other nav items */}
            </div>
          </nav>
          <div className="nav_respo-actions">
            <a href="http://dashboard.owner.com/" target="_blank" className="button is-link hidden md:inline-block">Login</a>
            <a href="/demo" className="button is-nav">Get a free demo</a>
            <div className="nav_menu-btn md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="nav_ham-box">
                <div className="nav_ham-line _1"></div>
                <div className="nav_ham-line _2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;