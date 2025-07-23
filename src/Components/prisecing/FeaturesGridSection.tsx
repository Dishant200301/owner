// ./src/components/FeaturesGrid.tsx

import React from 'react';

// --- Reusable Icon Components ---

// Wrapper for the circular icon background
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
    {children}
  </div>
);

const PackageIcon = () => (
  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 20H8C6.89543 20 6 19.1046 6 18V9C6 7.89543 6.89543 7 8 7H16C17.1046 7 18 7.89543 18 9V18C18 19.1046 17.1046 20 16 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7V4M12 4H9M12 4H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RefreshIcon = () => (
  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12C20 16.4184 16.4184 20 12 20C7.58172 20 4 16.4184 4 12C4 7.58172 7.58172 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 5V8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckShieldIcon = () => (
  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeadsetIcon = () => (
  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12V18C19 19.1046 18.1046 20 17 20H15C13.8954 20 13 19.1046 13 18V13C13 12.4477 13.4477 12 14 12H19ZM5 12V18C5 19.1046 5.89543 20 7 20H9C10.1046 20 11 19.1046 11 18V13C11 12.4477 10.5523 12 10 12H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Feature Data ---
const features = {
  main: {
    title: 'One package with everything you need',
    description: 'With Owner, you get all the tools you need to grow from day one. Our happiest and most successful customers switched to Owner from another solution. They were paying less, but weren’t getting the online sales growth they were looking for.',
    icon: <PackageIcon />,
  },
  topRight: {
    title: 'Month to month pricing',
    description: "Our pricing is month to month. We don’t believe in locking you into long-term contracts. We believe in earning your business every month.",
    icon: <RefreshIcon />,
  },
  bottomLeft: {
    title: 'No upgrades or upsells',
    description: 'There are no upgrades or upsells. We give you everything you need to grow online.',
    icon: <CheckShieldIcon />,
  },
  bottomRight: {
    title: '24/7 support',
    description: 'Work with a world-class team. You’ll have 24/7 support.',
    icon: <HeadsetIcon />,
  },
};


// --- Main Features Grid Component ---
const FeaturesGrid = () => {
  return (
    <section className="bg-gray-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Join thousands of restaurants switching to Owner
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here’s why restaurants choose Owner to grow faster online
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-6xl lg:grid-cols-2">
          
          {/* Left Column (Tall Card) */}
          <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <h3 className="max-w-xs text-2xl font-bold text-gray-900">
                {features.main.title}
              </h3>
              <IconWrapper>{features.main.icon}</IconWrapper>
            </div>
            <p className="mt-12 text-gray-600">{features.main.description}</p>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="flex flex-col gap-8">
            {/* Top Card */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start justify-between">
                <h3 className="max-w-xs text-2xl font-bold text-gray-900">
                  {features.topRight.title}
                </h3>
                <IconWrapper>{features.topRight.icon}</IconWrapper>
              </div>
              <p className="mt-4 text-gray-600">{features.topRight.description}</p>
            </div>
            
            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {features.bottomLeft.title}
                  </h3>
                  <IconWrapper>{features.bottomLeft.icon}</IconWrapper>
                </div>
                <p className="mt-4 text-gray-600">{features.bottomLeft.description}</p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {features.bottomRight.title}
                  </h3>
                  <IconWrapper>{features.bottomRight.icon}</IconWrapper>
                </div>
                <p className="mt-4 text-gray-600">{features.bottomRight.description}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;