// src/components/MobileAppFeatureCard.tsx
import React from 'react';

const MobileAppFeatureCard: React.FC = () => {
  return (
    <div
      id="w-node-fa747f94-95b2-ee52-e1c7-e8f4d2624320-1ed72d09"
      className="hp-tech_item cc-top relative rounded-lg overflow-hidden p-8 flex flex-col justify-end bg-black text-white aspect-video lg:col-span-full xl:col-span-1 xl:aspect-auto xl:row-span-2 min-h-[400px]"
      style={{
        backgroundImage: 'url("https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef4b162590204ae4597b0_mobile-app-bg%20(1).jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to ensure text readability on image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="hp-tech_meta relative z-10">
        <p className="text-xl md:text-2xl font-semibold leading-snug"> {/* h18 */}
          Your customers are used to ordering on their phone. That’s why we give your restaurant its own <span className="text-white">mobile app.</span>
        </p>
      </div>
    </div>
  );
};

export default MobileAppFeatureCard;