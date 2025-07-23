import React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  wrapperClassName?: string; // For the outer div if present
}

// --- SVGs from the FIRST response (Navigation dropdowns) ---

export const IconLaptop: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <g clipPath="url(#clip0_714_25822)">
        <path d="M9 17H6C4.34315 17 3 15.6569 3 14V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V14C21 15.6569 19.6569 17 18 17H15M9 17V20H15V17M9 17H15" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_714_25822">
          <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export const IconDelivery: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <g clipPath="url(#clip0_714_25842)">
        <path d="M9 16C5.68629 16 3 13.3137 3 10C3 6.68629 5.68629 4 9 4C11.4597 4 13.5737 5.48012 14.5 7.59829M21 14C21 17.3137 18.3137 20 15 20C12.3841 20 10.1591 18.3259 9.33811 15.9906C9.11911 15.3677 9 14.6978 9 14C9 10.7998 11.5055 8.1847 14.6619 8.00937C14.7738 8.00315 14.8865 8 15 8C18.3137 8 21 10.6863 21 14Z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_714_25842">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export const IconBasket: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M15.0021 8C15.0021 9.65685 13.6589 11 12.0021 11C10.3452 11 9.00208 9.65685 9.00208 8M4.82627 6.81287L4.20127 16.8129C4.09333 18.54 5.46497 20 7.19543 20H16.8087C18.5392 20 19.9108 18.54 19.8029 16.8129L19.1779 6.81287C19.0791 5.23176 17.7679 4 16.1837 4H7.82043C6.23624 4 4.92509 5.23176 4.82627 6.81287Z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </div>
);

export const IconMarketing: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <g clipPath="url(#clip0_714_25848)">
        <path d="M2.75879 10.1637L3.62703 15.0877C3.91474 16.7194 5.47072 17.8089 7.1024 17.5212L10.0972 16.9931M2.75879 10.1637L2.58514 9.17885C2.29743 7.54716 3.38694 5.99119 5.01862 5.70348L11.9123 4.48794C13.544 4.20023 15.0999 5.28974 15.3876 6.92142C15.4835 7.46532 15.1204 7.98397 14.5765 8.07988L2.75879 10.1637ZM16.0017 12V14L17.6684 15.6667M22.0017 14C22.0017 17.3137 19.3154 20 16.0017 20C12.688 20 10.0017 17.3137 10.0017 14C10.0017 10.6863 12.688 8 16.0017 8C19.3154 8 22.0017 10.6863 22.0017 14Z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_714_25848">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export const IconMobile: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <g clipPath="url(#clip0_714_25834)">
        <path d="M10 19H14M9 22H15C16.6569 22 18 20.6569 18 19L18 5C18 3.34315 16.6569 2 15 2L9 2C7.34315 2 6 3.34315 6 5L6 19C6 20.6569 7.34315 22 9 22Z" stroke="#787A7D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_714_25834">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export const IconLoyalty: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <g clipPath="url(#clip0_2017_22534)">
        <path d="M14.001 2.4375C14.001 2.4375 14.1787 3.47751 14.001 4.4375C13.8095 5.47144 13.001 6.4375 13.001 6.4375M15.501 8.9375L16.501 7.9375M18.301 5.1875L18.751 3.9375M20.001 8.4375L21.001 7.9375M18.001 11.4375C18.001 11.4375 18.7571 11.4695 19.501 11.7075C20.1715 11.9221 21.001 12.4375 21.001 12.4375M5.78101 21.2515L15.1635 17.5555C16.5037 17.0276 16.8632 15.299 15.8447 14.2805L10.1586 8.59438C9.14017 7.57593 7.41158 7.93542 6.88362 9.27547L3.18721 18.6575C2.54631 20.2843 4.15426 21.8923 5.78101 21.2515Z" stroke="#787A7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2017_22534">
          <rect width="24" height="24" fill="white" transform="translate(0 0.4375)" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export const IconArrowRight: React.FC<SvgIconProps> = ({ className, wrapperClassName, fill = 'white', ...props }) => (
  <div className={`w-10 h-10 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <g filter="url(#filter0_b_3508_30122)">
        <path d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z" fill={fill} fillOpacity="0.92" />
      </g>
      <defs>
        <filter id="filter0_b_3508_30122" x="-4" y="-4" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3508_30122" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3508_30122" result="shape" />
        </filter>
      </defs>
    </svg>
  </div>
);

export const IconOwnerLogo: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M12 2C7.02944 2 3 6.02944 3 11C3 16.0425 12 22 12 22C12 22 21 16.0425 21 11C21 6.02944 16.9706 2 12 2ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z" fill="currentColor"/>
    </svg>
  </div>
);

// --- SVGs from the SECOND response (Grader section) ---

export const IconStar: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-4 h-4 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M10.9893 13.7812C10.8543 13.7812 10.7193 13.7397 10.604 13.6564L6.99982 11.0435L3.39563 13.6564C3.1649 13.8244 2.85472 13.8226 2.62408 13.6556C2.39422 13.4881 2.29849 13.192 2.38652 12.922L3.76566 8.68413L0.256342 5.98906C0.0333063 5.81774 -0.0555079 5.52383 0.0350563 5.25766C0.125618 4.99149 0.375165 4.81245 0.6563 4.81245H5.05689L6.37455 0.675942C6.4617 0.403819 6.71465 0.21875 6.99999 0.21875C7.28532 0.21875 7.53828 0.403732 7.62543 0.675942L8.94307 4.81245H13.3437C13.6248 4.81245 13.8743 4.99149 13.9649 5.25766C14.0556 5.52383 13.9667 5.81774 13.7436 5.98906L10.2343 8.68413L11.6135 12.922C11.7015 13.192 11.6058 13.4881 11.3759 13.6556C11.2606 13.7393 11.1252 13.7812 10.9893 13.7812Z" fill="currentColor" />
    </svg>
  </div>
);

export const IconLoadingPin: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-full h-full ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M102 204C158.333 204 204 158.333 204 102C204 45.667 158.333 0 102 0C45.667 0 0 45.667 0 102C0 158.333 45.667 204 102 204Z" fill="black"></path>
      <g className="pin"> {/* `pin` class from original HTML, linked to keyframes in CSS */}
        <path fillRule="evenodd" clipRule="evenodd" d="M102 166C102 166 153 139.4 153 102C153 73.8335 130.167 51 102 51C73.8335 51 51 73.8335 51 102C51 139.4 102 166 102 166Z" fill="white"></path>
        <circle cx="102" cy="102" r="24" fill="black"></circle>
      </g>
    </svg>
  </div>
);

export const IconTagMarker: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-[1.125rem] h-[1.125rem] ${wrapperClassName || ''}`}> {/* icon_18 */}
    <svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M0 13V7H18V13H0Z" fill="currentColor" />
    </svg>
  </div>
);

export const IconAI: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-6 h-6 ${wrapperClassName || ''}`}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M14 8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8C12 10.3085 11.4892 11.7424 10.6158 12.6158C9.74243 13.4892 8.30848 14 6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C8.30848 16 9.74243 16.5108 10.6158 17.3842C11.4892 18.2576 12 19.6915 12 22C12 22.5523 12.4477 23 13 23C13.5523 23 14 22.5523 14 22C14 19.6915 14.5108 18.2576 15.3842 17.3842C16.2576 16.5108 17.6915 16 20 16C20.5523 16 21 15.5523 21 15C21 14.4477 20.5523 14 20 14C17.6915 14 16.2576 13.4892 15.3842 12.6158C14.5108 11.7424 14 10.3085 14 8Z" fill="currentColor" />
      <path d="M6 5.5C6 5.22386 5.77614 5 5.5 5C5.22386 5 5 5.22386 5 5.5C5 6.48063 4.78279 7.0726 4.4277 7.4277C4.0726 7.78279 3.48063 8 2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9C3.48063 9 4.0726 9.21721 4.4277 9.5723C4.78279 9.9274 5 10.5194 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 10.5194 6.21721 9.9274 6.5723 9.5723C6.9274 9.21721 7.51937 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C7.51937 8 6.9274 7.78279 6.5723 7.4277C6.21721 7.0726 6 6.48063 6 5.5Z" fill="currentColor" />
      <path d="M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5C10 2.13341 9.85918 2.47538 9.66728 2.66728C9.47538 2.85918 9.13341 3 8.5 3C8.22386 3 8 3.22386 8 3.5C8 3.77614 8.22386 4 8.5 4C9.13341 4 9.47538 4.14082 9.66728 4.33272C9.85918 4.52462 10 4.86659 10 5.5C10 5.77614 10.2239 6 10.5 6C10.7761 6 11 5.77614 11 5.5C11 4.86659 11.1408 4.52462 11.3327 4.33272C11.5246 4.14082 11.8666 4 12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3C11.8666 3 11.5246 2.85918 11.3327 2.66728C11.1408 2.47538 11 2.13341 11 1.5Z" fill="currentColor" />
    </svg>
  </div>
);

export const IconArrowUp: React.FC<SvgIconProps> = ({ className, wrapperClassName, ...props }) => (
  <div className={`w-[1.125rem] h-[1.125rem] ${wrapperClassName || ''}`}> {/* icon_18 */}
    <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M3.75 8.25L8.99999 3L14.25 8.25M8.99999 14.6912V3.375" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  </div>
);