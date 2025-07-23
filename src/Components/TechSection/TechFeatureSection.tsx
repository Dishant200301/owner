// src/components/TechFeatureSection.tsx
import React from 'react';
import MobileAppFeatureCard from './MobileAppFeatureCard';
import WebsiteFeatureCard from './WebsiteFeatureCard';
import OrderingSystemFeatureCard from './OrderingSystemFeatureCard';

const TechFeatureSection: React.FC = () => {
  return (
    <section className="border-b border-gray-200 py-16 sm:py-20 md:py-24"> {/* section_hp-tech & section-border */}
      <div className="px-4 mx-auto max-w-7xl"> {/* padding-global & container-large */}
        <div className="hp-tech_wrap flex flex-col items-center text-center">
          <div className="max-w-xl mb-12 md:mb-16"> {/* max-width-710 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"> {/* h36 */}
              Give your restaurant the same tech as the big brands
            </h2>
          </div>
          <div className="hp-tech_grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {/* The first item spans across all columns on larger screens */}
            <MobileAppFeatureCard />
            {/* The next two items take up their respective columns */}
            <WebsiteFeatureCard />
            <OrderingSystemFeatureCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFeatureSection;