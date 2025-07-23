import { DropdownMenuData, NavLinkItem } from './types';

// Helper SVG for external link icon
const externalLinkIconSvg = `
<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_3508_30122)">
        <path d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z" fill="white" fill-opacity="0.92"/>
    </g>
    <defs>
        <filter id="filter0_b_3508_30122" x="-4" y="-4" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3508_30122"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3508_30122" result="shape"/>
        </filter>
    </defs>
</svg>
`;

const defaultSvgStroke = "#787A7D";
const defaultSvgStrokeWidth = "1.6";
const defaultSvgStrokeLinecap = "round";
const defaultSvgStrokeLinejoin = "round";


export const productMenuData: DropdownMenuData = {
  title: 'Product',
  sections: [
    {
      heading: 'Product',
      links: [
        {
          text: 'Website Builder',
          href: '/restaurant-website-ai',
          description: 'Convert more visitors into customers with an AI-powered website.',
          icon: `
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_714_25822)">
                <path d="M9 17H6C4.34315 17 3 15.6569 3 14V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V14C21 15.6569 19.6569 17 18 17H15M9 17V20H15V17M9 17H15" stroke="${defaultSvgStroke}" stroke-width="${defaultSvgStrokeWidth}" stroke-linecap="${defaultSvgStrokeLinecap}" stroke-linejoin="${defaultSvgStrokeLinejoin}"/>
              </g>
              <defs>
                <clipPath id="clip0_714_25822">
                  <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
        {
          text: 'Zero-Commission Delivery',
          href: '/delivery',
          description: 'Profitable delivery by top-rated drivers at a fair price.',
          icon: `
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_714_25842)">
                <path d="M9 16C5.68629 16 3 13.3137 3 10C3 6.68629 5.68629 4 9 4C11.4597 4 13.5737 5.48012 14.5 7.59829M21 14C21 17.3137 18.3137 20 15 20C12.3841 20 10.1591 18.3259 9.33811 15.9906C9.11911 15.3677 9 14.6978 9 14C9 10.7998 11.5055 8.1847 14.6619 8.00937C14.7738 8.00315 14.8865 8 15 8C18.3137 8 21 10.6863 21 14Z" stroke="${defaultSvgStroke}" stroke-width="${defaultSvgStrokeWidth}" stroke-linecap="square" stroke-linejoin="${defaultSvgStrokeLinejoin}"/>
              </g>
              <defs>
                <clipPath id="clip0_714_25842">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
        {
          text: 'Online Ordering',
          href: '/online-ordering',
          description: 'Get more orders with online ordering that feels familiar and easy.',
          icon: `
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0021 8C15.0021 9.65685 13.6589 11 12.0021 11C10.3452 11 9.00208 9.65685 9.00208 8M4.82627 6.81287L4.20127 16.8129C4.09333 18.54 5.46497 20 7.19543 20H16.8087C18.5392 20 19.9108 18.54 19.8029 16.8129L19.1779 6.81287C19.0791 5.23176 17.7679 4 16.1837 4H7.82043C6.23624 4 4.92509 5.23176 4.82627 6.81287Z" stroke="${defaultSvgStroke}" stroke-width="${defaultSvgStrokeWidth}" stroke-linecap="${defaultSvgStrokeLinecap}"/>
            </svg>
          `,
        },
      ],
    },
    {
      heading: '', // No explicit heading for the second column in the original HTML, but structure for consistency
      links: [
        {
          text: 'Automated Marketing',
          href: '/automatic-marketing',
          description: 'Drive sales from customers with proven, automated campaigns.',
          icon: `
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_714_25848)">
                <path d="M2.75879 10.1637L3.62703 15.0877C3.91474 16.7194 5.47072 17.8089 7.1024 17.5212L10.0972 16.9931M2.75879 10.1637L2.58514 9.17885C2.29743 7.54716 3.38694 5.99119 5.01862 5.70348L11.9123 4.48794C13.544 4.20023 15.0999 5.28974 15.3876 6.92142C15.4835 7.46532 15.1204 7.98397 14.5765 8.07988L2.75879 10.1637ZM16.0017 12V14L17.6684 15.6667M22.0017 14C22.0017 17.3137 19.3154 20 16.0017 20C12.688 20 10.0017 17.3137 10.0017 14C10.0017 10.6863 12.688 8 16.0017 8C19.3154 8 22.0017 10.6863 22.0017 14Z" stroke="${defaultSvgStroke}" stroke-width="${defaultSvgStrokeWidth}" stroke-linecap="square" stroke-linejoin="${defaultSvgStrokeLinejoin}"/>
              </g>
              <defs>
                <clipPath id="clip0_714_25848">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
        {
          text: 'Custom Mobile App',
          href: '/branded-apps',
          description: 'Grow repeat orders with a 5-star mobile app.',
          icon: `
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_714_25834)">
                <path d="M10 19H14M9 22H15C16.6569 22 18 20.6569 18 19L18 5C18 3.34315 16.6569 2 15 2L9 2C7.34315 2 6 3.34315 6 5L6 19C6 20.6569 7.34315 22 9 22Z" stroke="${defaultSvgStroke}" stroke-width="${defaultSvgStrokeWidth}" stroke-linecap="${defaultSvgStrokeLinecap}" stroke-linejoin="${defaultSvgStrokeLinejoin}"/>
              </g>
              <defs>
                <clipPath id="clip0_714_25834">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
        {
          text: 'Loyalty Program',
          href: '/loyalty-rewards',
          description: 'Build loyalty with a rewards program inspired by the big brands.',
          icon: `
            <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2017_22534)">
                <path d="M14.001 2.4375C14.001 2.4375 14.1787 3.47751 14.001 4.4375C13.8095 5.47144 13.001 6.4375 13.001 6.4375M15.501 8.9375L16.501 7.9375M18.301 5.1875L18.751 3.9375M20.001 8.4375L21.001 7.9375M18.001 11.4375C18.001 11.4375 18.7571 11.4695 19.501 11.7075C20.1715 11.9221 21.001 12.4375 21.001 12.4375M5.78101 21.2515L15.1635 17.5555C16.5037 17.0276 16.8632 15.299 15.8447 14.2805L10.1586 8.59438C9.14017 7.57593 7.41158 7.93542 6.88362 9.27547L3.18721 18.6575C2.54631 20.2843 4.15426 21.8923 5.78101 21.2515Z" stroke="${defaultSvgStroke}" stroke-width="2" stroke-linecap="${defaultSvgStrokeLinecap}" stroke-linejoin="${defaultSvgStrokeLinejoin}"/>
              </g>
              <defs>
                <clipPath id="clip0_2017_22534">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.4375)"/>
                </clipPath>
              </defs>
            </svg>
          `,
        },
      ],
    },
  ],
  featuredContent: [
    {
      type: 'article',
      href: '/case-studies/talkin-tacos',
      imageSrc: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1).jpg',
      imageSrcset: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1).jpg 934w',
      imageSizes: '100vw',
      imageAlt: '',
      title: 'How Talkin Tacos increased direct online sales to $120,000/m by using Owner.com',
      iconSvg: externalLinkIconSvg,
    },
  ],
};

export const companyMenuData: DropdownMenuData = {
  title: 'Company',
  sections: [
    {
      heading: 'Company',
      links: [
        { text: 'Our Story', href: '/our-story' },
        { text: 'Careers', href: '/careers' },
        { text: 'Leadership', href: '/leadership' },
        { text: 'Press', href: '/press' },
        { text: 'Reviews', href: '/reviews' },
        { text: 'Product Releases', href: '/releases' },
      ],
    },
  ],
  featuredContent: [
    {
      type: 'article',
      href: 'https://www.forbes.com/sites/amyfeldman/2024/08/13/next-billion-dollar-startups-2024/',
      target: '_blank',
      imageSrc: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups.jpg',
      imageSrcset: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups.jpg 934w',
      imageSizes: '100vw',
      imageAlt: '',
      title: 'Owner named to Forbes Next Billion‑Dollar Startups 2024',
      iconSvg: externalLinkIconSvg,
    },
    {
      type: 'banner',
      href: '/careers',
      bannerClasses: 'bg-gray-800', // Adjusted to a Tailwind color, original was 'cc-dark'
      title: 'We’re Hiring',
      description: 'View our openings',
      iconSvg: `
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_3508_30122)">
                <path d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z" fill="#ffffff" fill-opacity="0.76"/>
            </g>
            ${/* The filter defs need to be present somewhere accessible, perhaps in the main SVGIcon component or a global SVG defs */''}
            <defs>
                <filter id="filter0_b_3508_30122" x="-4" y="-4" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3508_30122"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3508_30122" result="shape"/>
                </filter>
            </defs>
        </svg>
      `,
    },
  ],
};

export const resourcesMenuData: DropdownMenuData = {
  title: 'Resources',
  sections: [
    {
      heading: 'Learn',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Help Center', href: 'https://help.owner.com/', target: '_blank' },
        { text: 'Case Studies', href: '/case-studies' },
        { text: 'Support Center', href: '/support' },
        { text: 'Compare Owner', href: '/comparison' },
      ],
    },
  ],
  featuredContent: [
    {
      type: 'article',
      href: '/case-studies/sushi-me-rollin',
      imageSrc: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1).jpg',
      imageSrcset: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1).jpg 934w',
      imageSizes: '100vw',
      imageAlt: '',
      title: 'How Sushi Me Rollin’ increased direct online sales by $91,000 using Owner.com',
      iconSvg: externalLinkIconSvg,
    },
    {
      type: 'banner',
      href: '/case-studies',
      title: 'Case Studies',
      description: 'View all',
      iconSvg: `
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_3508_30122)">
                <path d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z" fill="#6C6F75" fill-opacity="0.92"/>
            </g>
             ${/* The filter defs need to be present somewhere accessible, perhaps in the main SVGIcon component or a global SVG defs */''}
            <defs>
                <filter id="filter0_b_3508_30122" x="-4" y="-4" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3508_30122"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3508_30122" result="shape"/>
                </filter>
            </defs>
        </svg>
      `,
    },
  ],
};

export const mainNavLinks: NavLinkItem[] = [
  { text: 'Pricing', href: '/pricing' },
  { text: 'How it works', href: '/how-owner-works' },
];