// src/components/ExperienceTabsSection.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react'; // <--- Import useCallback

// --- TabItem Component (no changes) ---
interface TabItemProps {
  index: number;
  title: string;
  isActive: boolean;
  onClick: (index: number) => void;
}

const TabItem: React.FC<TabItemProps> = ({ index, title, isActive, onClick }) => {
  return (
    <div
      className={`flex-shrink-0 cursor-pointer pb-2 transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-500'}`}
      onClick={() => onClick(index - 1)}
    >
      <div className="flex items-center space-x-2">
        <div className={`text-h20 font-bold ${isActive ? 'opacity-100' : 'opacity-20'}`}>
          {index}
        </div>
        <p className="text-h20 font-bold">{title}</p>
      </div>
      <div className="h-0.5 bg-gray-300 overflow-hidden mt-1">
        <div
          className={`h-full bg-black transform origin-left transition-transform duration-700 ${isActive ? 'animate-fill-dot' : 'scale-x-0'}`}
        />
      </div>
    </div>
  );
};

// --- TabPane Component (no changes) ---
interface TabPaneProps {
  titleOpacity: string;
  title: string;
  description: string;
  visual: React.ReactNode;
}

const TabPane: React.FC<TabPaneProps> = ({ titleOpacity, title, description, visual }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg h-[400px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-8 left-8 z-20 p-4 text-white">
        <p className={`text-h28 ${titleOpacity}`}>{title}</p>
        <p className="text-h28 font-bold">{description}</p>
      </div>
      <div className="relative w-full h-full flex items-center justify-center">
        {visual}
      </div>
    </div>
  );
};

// --- Main ExperienceTabsSection Component ---
const ExperienceTabsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const tabsData = [
    {
      title: 'More Google Traffic',
      pane: {
        titleOpacity: 'opacity-50',
        title: 'Upgrade your SEO',
        description: 'With Owner, your website gets way more Google traffic',
        visual: (
          <div className="relative w-full h-full">
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68099508c0154cdc49f8c9b7_a576e66e2a76a448f0c997ba69bd8d8f_ai-website_item-2.avif"
              alt="Blurred kitchen background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66643a14df53b71d1ed72d08_google-traffic-phone.avif" // **REPLACE THIS URL**
              alt="Google search result on phone"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 lg:w-2/5 h-auto object-contain z-10"
            />
          </div>
        ),
      },
    },
    {
      title: 'More Online Sales',
      pane: {
        titleOpacity: 'opacity-50',
        title: 'Boost your orders',
        description: 'Grow sales with ordering that feels just like the big brands',
        visual: (
          <div className="relative w-full h-full">
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a178dea2dba1991bf646_abc3446dbd78d9103d75cafb2dcfa96d_online-ordering_item-1.avif" // Re-using item-1 as background
              alt="Online sales background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66643a14df53b71d1ed72d08_online-sales-desktop.avif" // **REPLACE THIS URL for the actual desktop screenshot**
              alt="Desktop online ordering"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 h-auto object-contain z-10"
              style={{ top: 'calc(50% + 20px)', right: '-10%', width: '80%', transform: 'translateY(-50%)' }} // Fine-tuning for the desktop screen peeking
            />
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a166038a3b80a4a531b2e_online-ordering_item-2.avif" // Original phone URL
              alt="Online ordering rewards on phone"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-auto object-contain z-20"
            />
          </div>
        ),
      },
    },
    {
      title: 'More Repeat Orders',
      pane: {
        titleOpacity: 'opacity-50',
        title: 'Create more regulars',
        description: 'Owner uses smart follow-ups that grow your repeat orders',
        visual: (
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66643a14df53b71d1ed72d08_repeat-orders-diagram.avif" // **REPLACE THIS URL**
              alt="Customer follow-up diagram"
              className="w-full h-full object-contain"
            />
          </div>
        ),
      },
    },
    {
      title: 'More App Downloads',
      pane: {
        titleOpacity: 'opacity-50',
        title: 'Reward your guests',
        description: 'Give guests points when they use your branded mobile app',
        visual: (
          <div className="relative w-full h-full">
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66643a14df53b71d1ed72d08_app-downloads-phone.avif" // **REPLACE THIS URL**
              alt="Branded mobile app on phone"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
        ),
      },
    },
  ];

  // Memoize goToNextTab using useCallback
  const goToNextTab = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabsData.length);
  }, [tabsData.length]); // tabsData.length is a stable value since tabsData is a constant array

  // Memoize goToPrevTab using useCallback
  const goToPrevTab = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + tabsData.length) % tabsData.length);
  }, [tabsData.length]); // tabsData.length is a stable value

  // Auto-advance logic for tabs
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      goToNextTab(); // Use the memoized function
    }, 7000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, goToNextTab]); // <--- Now, goToNextTab is a stable dependency

  return (
    <section className="py-16 bg-white font-sans">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <h2 className="text-h36 font-bold leading-tight">
              With Owner, you get more traffic, more sales, more repeat customers
            </h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center md:items-start overflow-x-auto whitespace-nowrap md:overflow-visible md:whitespace-normal">
            {tabsData.map((tab, index) => (
              <TabItem
                key={index}
                index={index + 1}
                title={tab.title}
                isActive={index === activeIndex}
                onClick={setActiveIndex}
              />
            ))}
          </div>

          {/* Tab Content (Slider Box) */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <TabPane
                titleOpacity={tabsData[activeIndex].pane.titleOpacity}
                title={tabsData[activeIndex].pane.title}
                description={tabsData[activeIndex].pane.description}
                visual={tabsData[activeIndex].pane.visual}
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={goToPrevTab} // Use the memoized function
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0177 20.4958C15.28 20.7581 15.7048 20.7593 15.9686 20.4985V20.4985C16.2344 20.2356 16.2356 19.8067 15.9712 19.5423L13.1214 16.6926H20.7919C21.1743 16.6926 21.4844 16.3825 21.4844 16.0001V16.0001C21.4844 15.6176 21.1743 15.3076 20.7919 15.3076H13.1214L15.9707 12.463C16.2355 12.1986 16.235 11.7694 15.9697 11.5055V11.5055C15.7056 11.2428 15.2787 11.2434 15.0153 11.5068L10.8041 15.718C10.6483 15.8738 10.6483 16.1264 10.8041 16.2821L15.0177 20.4958Z" fill="currentColor" />
                </svg>
              </div>
              <p className="p15 hidden md:block text-content-tertiary">Previous</p>
            </button>

            <button
              onClick={goToNextTab} // Use the memoized function
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="p15 hidden md:block text-content-tertiary">Next</p>
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9823 20.4958C16.72 20.7581 16.2952 20.7593 16.0314 20.4985V20.4985C15.7656 20.2356 15.7644 19.8067 16.0288 19.5423L18.8786 16.6926H11.2081C10.8257 16.6926 10.5156 16.3825 10.5156 16.0001V16.0001C10.5156 15.6176 10.8257 15.3076 11.2081 15.3076H18.8786L16.0293 12.463C15.7645 12.1986 15.765 11.7694 16.0303 11.5055V11.5055C16.2944 11.2428 16.7213 11.2434 16.9847 11.5068L21.1959 15.718C21.3517 15.8738 21.3517 16.1264 21.1959 16.2821L16.9823 20.4958Z" fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTabsSection;