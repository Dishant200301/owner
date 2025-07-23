
import React from 'react';

const Icon: React.FC<{ children: React.ReactNode, viewBox?: string, className?: string }> = ({ children, viewBox = "0 0 24 24", className }) => (
    <svg className={className} width="100%" height="100%" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
);

export const WebsiteBuilderIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className}>
        <path d="M9 17H6C4.34315 17 3 15.6569 3 14V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V14C21 15.6569 19.6569 17 18 17H15M9 17V20H15V17M9 17H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
);

export const ZeroCommissionDeliveryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className}>
        <path d="M9 16C5.68629 16 3 13.3137 3 10C3 6.68629 5.68629 4 9 4C11.4597 4 13.5737 5.48012 14.5 7.59829M21 14C21 17.3137 18.3137 20 15 20C12.3841 20 10.1591 18.3259 9.33811 15.9906C9.11911 15.3677 9 14.6978 9 14C9 10.7998 11.5055 8.1847 14.6619 8.00937C14.7738 8.00315 14.8865 8 15 8C18.3137 8 21 10.6863 21 14Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
    </Icon>
);

export const OnlineOrderingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className}>
         <path d="M15.0021 8C15.0021 9.65685 13.6589 11 12.0021 11C10.3452 11 9.00208 9.65685 9.00208 8M4.82627 6.81287L4.20127 16.8129C4.09333 18.54 5.46497 20 7.19543 20H16.8087C18.5392 20 19.9108 18.54 19.8029 16.8129L19.1779 6.81287C19.0791 5.23176 17.7679 4 16.1837 4H7.82043C6.23624 4 4.92509 5.23176 4.82627 6.81287Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </Icon>
);

export const AutomatedMarketingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className}>
        <path d="M2.75879 10.1637L3.62703 15.0877C3.91474 16.7194 5.47072 17.8089 7.1024 17.5212L10.0972 16.9931M2.75879 10.1637L2.58514 9.17885C2.29743 7.54716 3.38694 5.99119 5.01862 5.70348L11.9123 4.48794C13.544 4.20023 15.0999 5.28974 15.3876 6.92142C15.4835 7.46532 15.1204 7.98397 14.5765 8.07988L2.75879 10.1637ZM16.0017 12V14L17.6684 15.6667M22.0017 14C22.0017 17.3137 19.3154 20 16.0017 20C12.688 20 10.0017 17.3137 10.0017 14C10.0017 10.6863 12.688 8 16.0017 8C19.3154 8 22.0017 10.6863 22.0017 14Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
    </Icon>
);

export const CustomMobileAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className}>
        <path d="M10 19H14M9 22H15C16.6569 22 18 20.6569 18 19L18 5C18 3.34315 16.6569 2 15 2L9 2C7.34315 2 6 3.34315 6 5L6 19C6 20.6569 7.34315 22 9 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
);

export const LoyaltyProgramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className} viewBox="0 0 24 25">
        <path d="M14.001 2.4375C14.001 2.4375 14.1787 3.47751 14.001 4.4375C13.8095 5.47144 13.001 6.4375 13.001 6.4375M15.501 8.9375L16.501 7.9375M18.301 5.1875L18.751 3.9375M20.001 8.4375L21.001 7.9375M18.001 11.4375C18.001 11.4375 18.7571 11.4695 19.501 11.7075C20.1715 11.9221 21.001 12.4375 21.001 12.4375M5.78101 21.2515L15.1635 17.5555C16.5037 17.0276 16.8632 15.299 15.8447 14.2805L10.1586 8.59438C9.14017 7.57593 7.41158 7.93542 6.88362 9.27547L3.18721 18.6575C2.54631 20.2843 4.15426 21.8923 5.78101 21.2515Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className} viewBox="0 0 40 40">
        <path d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z" fill="currentColor" />
    </Icon>
);
