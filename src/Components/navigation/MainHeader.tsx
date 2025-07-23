import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions for Navigation Data ---
interface NavLink {
    name: string;
    href: string;
    external?: boolean;
}

interface ProductLink {
    name: string;
    href: string;
    description: string;
    icon: React.ReactNode;
}

interface FeaturedImageItem {
    type: 'image';
    image: string;
    title: string;
    href: string;
    external?: boolean;
}

interface FeaturedBannerItem {
    type: 'banner';
    title: string;
    subtitle: string;
    href: string;
    dark?: boolean;
}

type FeaturedItem = FeaturedImageItem | FeaturedBannerItem;

interface StandardDropdown {
    type: 'standard';
    title: string;
    links: NavLink[];
    featured: FeaturedItem[];
}

interface ProductDropdown {
    type: 'product';
    title: string;
    linkColumns: ProductLink[][];
    featured: FeaturedImageItem;
}

type DropdownData = StandardDropdown | ProductDropdown;

interface TopLevelLink {
    name:string;
    href?: string;
    dropdown?: DropdownData;
}


// --- SVG Icon Components ---
const Logo = () => (
    <svg width="114" height="24" viewBox="0 0 114 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black"></path>
        <g><path fillRule="evenodd" clipRule="evenodd" d="M12 18.6667C12 18.6667 17.1 16.0889 17.1 12.3333C17.1 9.42593 14.8519 7.16667 12 7.16667C9.14815 7.16667 6.9 9.42593 6.9 12.3333C6.9 16.0889 12 18.6667 12 18.6667Z" fill="white"></path><circle cx="12" cy="12.3333" r="2.66667" fill="black"></circle></g>
        <g clipPath="url(#clip0_1905_4826)"><text x="28" y="17" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#090A0B">Owner</text></g>
        <defs><clipPath id="clip0_1905_4826"><rect width="90" height="22.7586" fill="white" transform="translate(0 0.898987)"></rect></clipPath></defs>
    </svg>
);
const ExternalLinkIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 8.5L21 3M21 3H16M21 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const HamburgerIcon = ({ open }: { open: boolean }) => (
    <div className="w-6 h-6 relative"><motion.div className="w-full h-0.5 bg-black absolute" style={{ top: '25%' }} animate={{ rotate: open ? 45 : 0, y: open ? 4.5 : 0 }} transition={{ duration: 0.3 }}/><motion.div className="w-full h-0.5 bg-black absolute" style={{ top: '50%', marginTop: '-1px' }} animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.1 }}/><motion.div className="w-full h-0.5 bg-black absolute" style={{ bottom: '25%' }} animate={{ rotate: open ? -45 : 0, y: open ? -4.5 : 0 }} transition={{ duration: 0.3 }}/></div>
);
const CloseIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const ProductIcons = {
    Website: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H6c-1.6569 0-3-1.3431-3-3V8c0-1.65685 1.34315-3 3-3h12c1.6569 0 3 1.34315 3 3v6c0 1.6569-1.3431 3-3 3h-3M9 17v3h6v-3M9 17h6" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    Delivery: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16c-3.3137 0-6-2.6863-6-6s2.68629-6 6-6c2.4597 0 4.5737 1.48012 5.5 3.59829M21 14c0 3.3137-2.6863 6-6 6-2.6159 0-4.8409-1.6741-5.6619-4.0094C9.11911 15.3677 9 14.6978 9 14c0-3.2002 2.5055-5.8153 5.6619-5.99063C14.7738 8.00315 14.8865 8 15 8c3.3137 0 6 2.6863 6 6z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/></svg>,
    Ordering: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0021 8C15.0021 9.65685 13.6589 11 12.0021 11C10.3452 11 9.00208 9.65685 9.00208 8M4.82627 6.81287l-.625 10c-.10794 1.7271 1.2637 3.1871 2.99416 3.1871h9.6133c1.7305 0 3.1021-1.46 2.9942-3.1871l-.625-10C19.0791 5.23176 17.7679 4 16.1837 4H7.82043c-1.5842 0-2.89535 1.23176-2.99416 2.81287z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    Marketing: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75879 10.1637l.86824 4.924c.28771 1.6317 1.84369 2.7212 3.47537 2.4335l2.9948-.5281m-7.57941-9.0294l-.17365-0.98485c-.28771-1.63169.8018-3.18766 2.43348-3.47537l6.89368-1.21554c1.63168-.28771 3.1876 0.8018 3.4753 2.43348.0959.5439-.2672 1.06255-0.8111 1.15846l-11.8284 2.08392zM16.0017 12V14l1.6667 1.6667M22.0017 14c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6 2.6863-6 6-6 6 2.6863 6 6z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/></svg>,
    App: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19h4M9 22h6c1.6569 0 3-1.3431 3-3V5c0-1.65685-1.3431-3-3-3H9C7.34315 2 6 3.34315 6 5v14c0 1.6569 1.34315 3 3 3z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    Loyalty: () => <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.001 2.4375s.1777 1.04.001 2c-.1915 1.0339-1 2-1 2m2.5 2.5l1-1m1.8-3.75l.45-1.25M20.001 8.4375l1-.5m-2.999.0001c0 0 .7561.032 1.5.2699.6705.2146 1.5.7296 1.5.7296m-15.22 11.2514l9.3825-3.696c1.3402-.5279 1.7-2.2565-.6815-3.275l-5.6861-5.6861c-1.0185-1.0184-2.7471-.6589-3.275.6811l-3.6964 9.382c-.6409 1.6268.9671 3.2348 2.5945 2.5945z" stroke="#787A7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
};

// --- Data for Navigation ---
const navData: { links: TopLevelLink[] } = {
    links: [
        { name: "Product", dropdown: { type: 'product', title: "Product", linkColumns: [ [{ name: "Website Builder", href: "/restaurant-website-ai", description: "Convert more visitors into customers.", icon: <ProductIcons.Website /> }, { name: "Zero-Commission Delivery", href: "/delivery", description: "Profitable delivery by top-rated drivers.", icon: <ProductIcons.Delivery /> }, { name: "Online Ordering", href: "/online-ordering", description: "Get more orders, familiar and easy.", icon: <ProductIcons.Ordering /> },], [{ name: "Automated Marketing", href: "/automatic-marketing", description: "Drive sales with automated campaigns.", icon: <ProductIcons.Marketing /> }, { name: "Custom Mobile App", href: "/branded-apps", description: "Grow repeat orders with a 5-star app.", icon: <ProductIcons.App /> }, { name: "Loyalty Program", href: "/loyalty-rewards", description: "Rewards inspired by the big brands.", icon: <ProductIcons.Loyalty /> },] ], featured: { type: 'image', image: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1).jpg", title: "How Talkin Tacos increased direct online sales to $120,000/m", href: "/case-studies/talkin-tacos", } } },
        { name: "Pricing", href: "/pricing" }, { name: "How it works", href: "/how-owner-works" },
        { name: "Company", dropdown: { type: 'standard', title: "Company", links: [ { name: "Our Story", href: "/our-story" }, { name: "Careers", href: "/careers" }, { name: "Leadership", href: "/leadership" }, { name: "Press", href: "/press" }, { name: "Reviews", href: "/reviews" }, { name: "Product Releases", href: "/releases" }, { name: "Partner with Owner", href: "/partner-request" }, ], featured: [ { type: 'image', image: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups.jpg", title: "Owner named to Forbes Next Billion-Dollar Startups 2024", href: "https://www.forbes.com/sites/amyfeldman/2024/08/13/next-billion-dollar-startups-2024/", external: true }, { type: 'banner', title: "We're Hiring", subtitle: "View our openings", href: "/careers", dark: true } ] } },
        { name: "Resources", dropdown: { type: 'standard', title: "Learn", links: [ { name: "Blog", href: "/blog" }, { name: "Help Center", href: "https://help.owner.com/", external: true }, { name: "Case Studies", href: "/case-studies" }, { name: "Support Center", href: "/support" }, { name: "Compare Owner", href: "/comparison" } ], featured: [ { type: 'image', image: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1).jpg", title: "How Sushi Me Rollin’ increased direct online sales by $91,000", href: "/case-studies/sushi-me-rollin" }, { type: 'banner', title: "Case Studies", subtitle: "View all", href: "/case-studies" } ] } },
    ]
};

// --- Reusable Dropdown Component ---
const NavDropdown = ({ dropdown }: { dropdown: DropdownData }) => {
    if (dropdown.type === 'product') return <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2"><div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden w-[800px]"><div className="flex p-6"><div className="flex-1 pr-6"><p className="text-xs text-gray-500 font-medium mb-4">{dropdown.title}</p><div className="flex gap-6">{dropdown.linkColumns.map((column, colIndex) => <ul key={colIndex} className="space-y-1 flex-1">{column.map(link => <li key={link.name}><a href={link.href} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg"><div className="w-6 h-6 text-gray-500 flex-shrink-0 mt-0.5">{link.icon}</div><div><p className="text-sm text-gray-800 font-medium">{link.name}</p><p className="text-xs text-gray-500">{link.description}</p></div></a></li>)}</ul>)}</div></div><div className="w-[280px]"><a href={dropdown.featured.href} className="block rounded-lg overflow-hidden relative group h-full"><img src={dropdown.featured.image} alt={dropdown.featured.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div><p className="absolute bottom-0 left-0 p-3 text-white text-sm font-semibold">{dropdown.featured.title}</p><div className="absolute top-2 right-2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLinkIcon className="w-4 h-4" /></div></a></div></div></div></motion.div>
    return <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2"><div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden w-[550px]"><div className="flex p-6"><div className="flex-1 pr-6"><p className="text-xs text-gray-500 font-medium mb-4">{dropdown.title}</p><ul className="space-y-3">{dropdown.links.map(link => <li key={link.name}><a href={link.href} target={link.external ? '_blank' : '_self'} rel="noopener noreferrer" className="text-sm text-gray-800 hover:text-black transition-colors duration-200 flex items-center group">{link.name}{link.external && <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5 text-gray-400 group-hover:text-gray-600 transition-colors" />}</a></li>)}</ul></div><div className="w-[250px] space-y-4">{dropdown.featured.map((item, index) => item.type === 'image' ? <a key={index} href={item.href} target={item.external ? '_blank' : '_self'} rel="noopener noreferrer" className="block rounded-lg overflow-hidden relative group"><img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div><p className="absolute bottom-0 left-0 p-3 text-white text-sm font-semibold">{item.title}</p><div className="absolute top-2 right-2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLinkIcon className="w-4 h-4" /></div></a> : <a key={index} href={item.href} className={`block rounded-lg p-4 transition-all duration-300 ${item.dark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}><div className="flex justify-between items-start"><div><p className={`text-sm font-semibold ${item.dark ? 'text-white' : 'text-gray-900'}`}>{item.title}</p><p className={`text-sm ${item.dark ? 'text-gray-300' : 'text-gray-500'}`}>{item.subtitle}</p></div><div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${item.dark ? 'bg-white/20 text-white' : 'bg-gray-300/60 text-gray-600'}`}><ExternalLinkIcon className="w-3.5 h-3.5" /></div></div></a>)}</div></div></div></motion.div>
};

// --- Main Header Component ---
export const MainHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        const handleClickOutside = (event: MouseEvent) => { if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenDropdown(null) };
        window.addEventListener('scroll', handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => { window.removeEventListener('scroll', handleScroll); document.removeEventListener("mousedown", handleClickOutside) };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = '' };
    }, [isMobileMenuOpen]);
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${scrolled ? 'py-2' : 'py-4'}`}>
             <div className={`absolute inset-0 bg-white/80 backdrop-blur-lg transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
             <div className="container mx-auto px-4 relative">
                <div className="flex items-center justify-between">
                    <a href="/" aria-label="home"><Logo /></a>
                    <nav ref={navRef} className="hidden lg:flex items-center gap-1 bg-white/80 border border-gray-200/80 rounded-full px-3 py-1.5 shadow-sm">
                        {navData.links.map(link => (
                            <div key={link.name} className="relative" onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)} onMouseLeave={() => link.dropdown && setOpenDropdown(null)}>
                                <a href={link.href} className="px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100">{link.name}</a>
                                <AnimatePresence>{openDropdown === link.name && link.dropdown && <NavDropdown dropdown={link.dropdown} />}</AnimatePresence>
                            </div>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center gap-2">
                        <a href="http://dashboard.owner.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black">Login</a>
                        <a href="/demo" className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors">Get a free demo</a>
                    </div>
                    <div className="lg:hidden"><button onClick={() => setIsMobileMenuOpen(true)} className="p-2" aria-label="Open menu"><HamburgerIcon open={isMobileMenuOpen} /></button></div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
            {isMobileMenuOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setIsMobileMenuOpen(false)} />
                    <motion.div initial={{ x: "100%" }} animate={{ x: "0%" }} exit={{ x: "100%" }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                            <a href="/" onClick={() => setIsMobileMenuOpen(false)}><Logo /></a>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-600 hover:text-black" aria-label="Close menu"><CloseIcon className="w-6 h-6" /></button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            <nav className="flex flex-col p-4">
                                {navData.links.map(link => (
                                    <div key={link.name} className='border-b border-gray-100 last:border-b-0'>
                                        {link.dropdown ? (
                                            <details className="group">
                                                <summary className="font-semibold text-lg list-none cursor-pointer flex justify-between items-center py-3">{link.name}<svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></summary>
                                                <div className="pl-4 pt-1 pb-3 space-y-3">
                                                    {(link.dropdown.type === 'product' ? link.dropdown.linkColumns.flat() : link.dropdown.links).map(subLink => <a key={subLink.name} href={subLink.href} className="block text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>{subLink.name}</a>)}
                                                </div>
                                            </details>
                                        ) : ( <a href={link.href} className="font-semibold text-lg block py-3" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a> )}
                                    </div>
                                ))}
                                <div className="pt-8 mt-4 border-t border-gray-200 flex flex-col space-y-3">
                                    <a href="http://dashboard.owner.com/" target="_blank" rel="noopener noreferrer" className="w-full text-center px-4 py-3 text-sm font-semibold text-black bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">Login</a>
                                    <a href="/demo" className="w-full text-center px-4 py-3 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors">Get a free demo</a>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                </>
            )}
            </AnimatePresence>
        </header>
    );
};