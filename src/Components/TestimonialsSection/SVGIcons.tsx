// src/SVGIcons.tsx
import React from 'react';

// ... (G2Icon, CapterraIcon, ButtonArrow from previous code) ...

export const PlayButtonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.5 8.86762C7.5 7.27719 7.5 6.48198 7.83313 6.03148C8.12355 5.63875 8.56886 5.38992 9.05554 5.34841C9.6138 5.3008 10.291 5.71757 11.6455 6.5511L16.2928 9.41096C17.6851 10.2678 18.3813 10.6962 18.619 11.2467C18.8266 11.7275 18.8266 12.2725 18.619 12.7533C18.3813 13.3038 17.6851 13.7322 16.2928 14.589L11.6455 17.4489C10.291 18.2824 9.6138 18.6992 9.05554 18.6516C8.56886 18.6101 8.12355 18.3612 7.83313 17.9685C7.5 17.518 7.5 16.7228 7.5 15.1324L7.5 8.86762Z"
      fill="currentColor"
      fillOpacity="0.92"
    />
  </svg>
);

export const NavArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16.9823 20.4958C16.72 20.7581 16.2952 20.7593 16.0314 20.4985V20.4985C15.7656 20.2356 15.7644 19.8067 16.0288 19.5423L18.8786 16.6926H11.2081C10.8257 16.6926 10.5156 16.3825 10.5156 16.0001V16.0001C10.5156 15.6176 10.8257 15.3076 11.2081 15.3076H18.8786L16.0293 12.463C15.7645 12.1986 15.765 11.7694 16.0303 11.5055V11.5055C16.2944 11.2428 16.7213 11.2434 16.9847 11.5068L21.1959 15.718C21.3517 15.8738 21.3517 16.1264 21.1959 16.2821L16.9823 20.4958Z"
      fill="currentColor"
    />
  </svg>
);

export const NavArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.0177 20.4958C15.28 20.7581 15.7048 20.7593 15.9686 20.4985V20.4985C16.2344 20.2356 16.2356 19.8067 15.9712 19.5423L13.1214 16.6926H20.7919C21.1743 16.6926 21.4844 16.3825 21.4844 16.0001V16.0001C21.4844 15.6176 21.1743 15.3076 20.7919 15.3076H13.1214L15.9707 12.463C16.2355 12.1986 16.235 11.7694 15.9697 11.5055V11.5055C15.7056 11.2428 15.2787 11.2434 15.0153 11.5068L10.8041 15.718C10.6483 15.8738 10.6483 16.1264 10.8041 16.2821L15.0177 20.4958Z"
      fill="currentColor"
    />
  </svg>
);
export const ButtonArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 1.5L5 6L1 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);