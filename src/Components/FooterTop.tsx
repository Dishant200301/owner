import React from 'react';

// --- Reusable SVG Icon Components ---

const LogoIcon = () => (
  <svg className="h-9 w-auto text-gray-900" viewBox="0 0 133 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.7479 17.426C43.7479 10.6454 47.772 6.18066 53.8624 6.18066C59.9529 6.18066 63.8379 10.4804 63.8379 17.1766C63.8379 23.8728 59.9789 28.2832 53.9164 28.2832C47.8545 28.2832 43.7461 24.1484 43.7461 17.4241L43.7479 17.426ZM58.9888 17.3435C58.9888 12.9069 57.142 10.3435 53.8904 10.3435C52.0998 10.3435 50.7214 11.0599 49.8118 12.3837C49.0134 13.5688 48.599 15.2227 48.599 17.3454C48.599 21.5626 50.5827 24.1259 53.8624 24.1259C55.5985 24.1259 56.8944 23.464 57.776 22.2245C58.5745 21.0938 58.9888 19.4418 58.9888 17.3472V17.3435Z" fill="currentColor"></path>
    <path d="M79.0405 27.8987L76.2562 17.1784L73.6385 27.8987H68.8433L64.3789 12.0518H69.0365L71.5716 22.772L74.3824 12.0518H78.268L81.2719 22.9108L83.7245 12.0518H87.9963L83.614 27.8987H79.0385H79.0405Z" fill="currentColor"></path>
    <path d="M89.2188 12.0517H93.7117V14.8907H93.7943C94.979 12.7418 96.9368 11.7217 99.0317 11.7217C102.311 11.7217 104.351 13.7881 104.351 18.2266V27.9005H99.7757V19.4942C99.7757 16.6271 99.0052 15.3595 97.0474 15.3595C95.0901 15.3595 93.7963 16.8483 93.7963 19.603V27.8987H89.2208V12.0517H89.2188Z" fill="currentColor"></path>
    <path d="M105.903 20.126C105.903 15.1643 109.265 11.6934 113.922 11.6934C116.898 11.6934 119.132 12.961 120.343 15.3312C121.141 16.9026 121.474 18.7758 121.417 21.0092H110.476C110.669 23.2968 112.047 24.6469 114.196 24.6469C115.961 24.6469 117.146 23.8481 117.723 22.2767L121.609 23.4075C120.451 26.5502 117.723 28.2848 114.057 28.2848C108.987 28.2848 105.898 25.142 105.898 20.126H105.903ZM113.922 15.2487C112.076 15.2487 110.862 16.3231 110.532 18.2245H116.87C116.816 17.6189 116.677 17.1501 116.484 16.7094C116.071 15.7718 115.106 15.2487 113.921 15.2487H113.922Z" fill="currentColor"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M132.105 11.7197C130.093 11.7197 128.605 12.7679 127.669 14.6694H127.586V12.0516H123.039V27.8986H127.615V19.4379C127.615 16.3795 128.496 15.6801 130.095 15.6801C131.695 15.6801 132.861 16.0588 132.861 16.0588V11.7216H132.107L132.105 11.7197Z" fill="currentColor"></path>
    <path d="M19.8311 17.9478C19.8311 20.0337 18.1402 21.7247 16.0542 21.7247C13.9683 21.7247 12.2773 20.0337 12.2773 17.9478C12.2773 15.8619 13.9683 14.1709 16.0542 14.1709C18.1402 14.1709 19.8311 15.8619 19.8311 17.9478Z" fill="currentColor"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.0517 33.9999C24.9168 33.9999 32.1034 26.8133 32.1034 17.9482C32.1034 9.08309 24.9168 1.89648 16.0517 1.89648C7.18661 1.89648 0 9.08309 0 17.9482C0 26.8133 7.18661 33.9999 16.0517 33.9999ZM16.0517 28.0199C16.0517 28.0199 24.0776 23.8338 24.0776 17.9482C24.0776 13.5156 20.4844 9.92235 16.0517 9.92235C11.6192 9.92235 8.02586 13.5156 8.02586 17.9482C8.02586 23.8338 16.0517 28.0199 16.0517 28.0199Z" fill="currentColor"></path>
  </svg>
);

const WhatsNewIcon = () => (
  <svg className="mr-2 inline-block h-4 w-4 text-gray-400" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M67.6373 74.0001C62.7179 74.0001 58.0409 72.9524 53.8182 71.0692C49.5965 72.9524 44.9194 74.0001 40.0001 74.0001C21.2349 74.0001 6 58.7652 6 40.0001C6 21.2349 21.2349 6 40.0001 6C58.7652 6 74.0001 21.2349 74.0001 40.0001C74.0001 47.3959 71.6331 54.2434 67.6166 59.8267C68.5824 62.755 69.9939 65.4807 71.772 67.9244C72.6075 69.0558 72.7489 70.557 72.1384 71.8254C71.5288 73.0904 70.2707 73.9156 68.8755 73.9699C68.4642 73.9924 68.0521 74.0001 67.6373 74.0001ZM35.3178 22.3834H43.9407V35.3177H56.8749V43.9406H43.9407V56.8749H35.3178V43.9406H22.3834V35.3177H35.3178V22.3834Z" fill="currentColor" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-3 w-3 text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
  </svg>
);

// --- Data for Link Columns ---
interface Link { href: string; text: string; new?: boolean; }
const productLinks: Link[] = [
  { href: "/restaurant-website-ai", text: "Restaurant Website" },
  { href: "/online-ordering", text: "Online Ordering" },
  { href: "/branded-apps", text: "Custom Mobile App" },
  { href: "/delivery", text: "Zero-Commission Delivery" },
  { href: "/loyalty-rewards", text: "Loyalty Program" },
  { href: "/automatic-marketing", text: "Automated Marketing" },
  { href: "/releases", text: "See What's New", new: true },
];
const resourceLinks: Link[] = [
  { href: "/case-studies", text: "Case Studies" },
  { href: "/comparison", text: "Compare Owner" },
  { href: "/blog/restaurant-marketing", text: "Restaurant Marketing Guide" },
  { href: "https://www.owner.com/blog/seo-for-restaurants", text: "SEO for Restaurants" },
  { href: "/blog/email-marketing-for-restaurants", text: "Restaurant Email Marketing" },
  { href: "/blog/mobile-app-for-restaurants", text: "Restaurant Mobile App" },
  { href: "/blog/online-ordering-system-for-restaurants", text: "Online Ordering Systems" },
  { href: "/blog/website-builders-for-restaurants", text: "Restaurant Website Builders" },
  { href: "/blog/best-restaurant-websites", text: "Best Restaurant Websites" },
];
const compareLinks: { left: Link[], right: Link[] } = {
  left: [
    { href: "/comparison/bentobox-vs-owner", text: "BentoBox" },
    { href: "/comparison/chownow-vs-owner", text: "ChowNow" },
    { href: "/comparison/clover-vs-owner", text: "Clover" },
    { href: "/comparison/grubhub-vs-owner", text: "Grubhub" },
  ],
  right: [
    { href: "/comparison/menufy-vs-owner", text: "Menufy" },
    { href: "/comparison/spothopper-vs-owner", text: "SpotHopper" },
    { href: "/comparison/toast-vs-owner", text: "Toast" },
  ],
};
const companyLinks: Link[] = [
  { href: "/our-story", text: "About" },
  { href: "/careers", text: "Careers" },
  { href: "/leadership", text: "Leadership" },
  { href: "/press", text: "Press" },
];
const supportLinks: Link[] = [
  { href: "tel:(510)630-2397", text: "(510) 630-2397" },
  { href: "mailto:support@owner.com", text: "support@owner.com" },
];

// --- Reusable Components ---
const FooterColumnHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">{children}</p>
);

const FooterLink: React.FC<{ link: Link, isLarge?: boolean }> = ({ link, isLarge }) => (
  <li>
    <a href={link.href} className={`group inline-flex items-center text-gray-900 transition hover:text-blue-600 ${isLarge ? 'text-lg font-medium' : 'text-base'}`}>
      {link.new && <WhatsNewIcon />}
      <span>{link.text}</span>
    </a>
  </li>
);

// --- Main Footer Component ---
const FooterTop = () => {
  return (
    <footer className="bg-[#f2f0ed] text-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Top section with Logo and CTA cards */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <a href="/" aria-label="Home">
            <LogoIcon />
          </a>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a href="/demo" className="group relative flex h-32 w-full flex-col justify-end overflow-hidden rounded-2xl bg-black p-6 text-white shadow-sm transition hover:shadow-lg sm:w-56">
              <span className="text-lg font-medium">Get a free demo</span>
              <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowIcon />
              </div>
            </a>
            <a href="/how-owner-works" className="group relative flex h-32 w-full flex-col justify-end overflow-hidden rounded-2xl bg-[#C7BFB8] p-6 text-gray-900 shadow-sm transition hover:shadow-lg sm:w-56">
              <span className="text-lg font-medium">See how it works</span>
              <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/10 flex items-center justify-center">
                <ArrowIcon />
              </div>
            </a>
          </div>
        </div>

        {/* Main link grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-300 pt-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <FooterColumnHeader>Products</FooterColumnHeader>
            <ul className="space-y-4">
              {productLinks.map((link) => <FooterLink key={link.href} link={link} isLarge />)}
            </ul>
          </div>
          <div>
            <FooterColumnHeader>Resources</FooterColumnHeader>
            <ul className="space-y-3">
              {resourceLinks.map((link) => <FooterLink key={link.href} link={link} />)}
            </ul>
          </div>
          <div>
            <FooterColumnHeader>Compare</FooterColumnHeader>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-3">
                {compareLinks.left.map((link) => <FooterLink key={link.href} link={link} />)}
              </ul>
              <ul className="space-y-3">
                {compareLinks.right.map((link) => <FooterLink key={link.href} link={link} />)}
              </ul>
            </div>
          </div>
          <div>
            <FooterColumnHeader>Company</FooterColumnHeader>
            <ul className="space-y-3">
              {companyLinks.map((link) => <FooterLink key={link.href} link={link} />)}
            </ul>
          </div>
          <div>
            <FooterColumnHeader>Support</FooterColumnHeader>
            <ul className="space-y-3">
              {supportLinks.map((link) => <FooterLink key={link.href} link={link} />)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTop;