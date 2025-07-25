import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPE DEFINITIONS ---
interface DropdownItem {
  title: string;
  href: string;
  description?: string;
}

interface NavigationLink {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

// --- NAVIGATION DATA ---
const navigationLinks: NavigationLink[] = [
  {
    label: 'Product',
    dropdown: [
      {
        title: 'Website Builder',
        description: 'Convert more visitors into customers with an AI-powered website.',
        href: '/restaurant-website-ai',
      },
      {
        title: 'Zero-Commission Delivery',
        description: 'Profitable delivery by top-rated drivers at a fair price.',
        href: '/delivery',
      },
      {
        title: 'Online Ordering',
        description: 'Get more orders with online ordering that feels familiar and easy.',
        href: '/online-ordering',
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How it works', href: '/how-owner-works' },
  {
    label: 'Company',
    dropdown: [
      { title: 'Our Story', href: '/our-story' },
      { title: 'Careers', href: '/careers' },
      { title: 'Leadership', href: '/leadership' },
    ],
  },
  {
    label: 'Resources',
    dropdown: [
      { title: 'Blog', href: '/blog' },
      { title: 'Help Center', href: 'https://help.owner.com/' },
      { title: 'Case Studies', href: '/case-studies' },
    ],
  },
];

// --- COMPONENT ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  const handleMobileDropdownToggle = (label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M102 204C158.333 204 204 158.333 204 102C204 45.667 158.333 0 102 0C45.667 0 0 45.667 0 102C0 158.333 45.667 204 102 204Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M102 166C102 166 153 139.4 153 102C153 73.8335 130.167 51 102 51C73.8335 51 51 73.8335 51 102C51 139.4 102 166 102 166Z" fill="white"></path>
                <circle cx="102" cy="102" r="24" fill="black"></circle>
              </svg>
              <span className="text-xl font-bold text-gray-900">Owner</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.dropdown && handleDropdownLeave()}
                >
                  <a
                    href={link.href || '#'}
                    onClick={(e) => link.dropdown && e.preventDefault()}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                      openDropdown === link.label
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.dropdown && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    )}
                  </a>

                  <AnimatePresence>
                    {openDropdown === link.label && link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute mt-2 w-72 bg-white rounded-lg shadow-xl"
                      >
                        <div className="p-2">
                          {link.dropdown.map((item) => (
                            <a key={item.title} href={item.href} className="block p-3 text-gray-800 hover:bg-gray-50 rounded-md transition-colors duration-200">
                              <p className="font-semibold text-gray-900">{item.title}</p>
                              {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="http://dashboard.owner.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">
              Login
            </a>
            <a href="/demo" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-sm">
              Get a free demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={!isMenuOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isMenuOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href || '#'}
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                        handleMobileDropdownToggle(link.label);
                      }
                    }}
                    className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg className={`w-5 h-5 transform transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    )}
                  </a>
                  {openDropdown === link.label && link.dropdown && (
                    <div className="mt-1 pl-7 space-y-1">
                      {link.dropdown.map((item) => (
                        <a key={item.title} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 px-3">
                <a href="/demo" className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-sm">
                  Get a free demo
                </a>
                <a href="http://dashboard.owner.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-base font-medium text-gray-600 hover:text-gray-900">
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;