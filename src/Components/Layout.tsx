import React, { ReactNode } from 'react';
// import HeadMeta from './HeadMeta';
import Nav from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-wrapper cc-clip">
      {/* <HeadMeta /> */}
      <div className="global-wrap">
        {/* Analytics and other scripts can be placed here or in HeadMeta */}
      </div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;