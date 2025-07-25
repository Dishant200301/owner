import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Import Swiper for the slider functionality
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import type { Swiper as SwiperType } from 'swiper'; // Type for Swiper instance

// --- Data Structure with Precise Visual Layouts ---
// This data reflects the exact layers and images from the screenshots provided.
const tabsData = [
  {
    id: 1,
    title: 'More Google Traffic',
    subtitle: 'Upgrade your SEO',
    description: 'With Owner, your website gets way more Google traffic',
    visuals: {
      background: 'https://assets-global.website-files.com/66643a14df53b71d1ed72d08/6809930e4b75f859553c9b74_bg-seo.png',
      foreground: [
        {
          src: 'https://i.imgur.com/qB41aG1.png', // Static image of the search bar UI
          className: 'absolute z-10 w-[24rem] -top-10 left-10 opacity-90',
        },
        {
          src: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68099508c0154cdc49f8c9b7_a576e66e2a76a448f0c997ba69bd8d8f_ai-website_item-2.avif',
          className: 'relative z-20 w-48 md:w-56 mt-16 rounded-2xl shadow-2xl',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'More Online Sales',
    subtitle: 'Boost your orders',
    description: 'Grow sales with ordering that feels just like the big brands',
    visuals: {
      background: 'https://assets-global.website-files.com/66643a14df53b71d1ed72d08/680a18239050d27572d1f97c_bg-ordering.png',
      foreground: [
        {
          src: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a178dea2dba19951bf646_abc3446dbd78d9103d75cafb2dcfa96d_online-ordering_item-1.avif',
          className: 'absolute z-10 w-[30rem] top-0 right-0 rounded-lg shadow-xl',
        },
        {
          src: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a166038a3b80a4a531b2e_online-ordering_item-2.avif',
          className: 'relative z-20 w-48 md:w-56 rounded-2xl shadow-2xl mr-32',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'More Repeat Orders',
    subtitle: 'Create more regulars',
    description: 'Owner uses smart follow-ups that grow your repeat orders',
    visuals: {
      background: 'https://i.imgur.com/kS5ChIn.png', // Faded blue gradient background
      foreground: [
        {
          src: 'https://i.imgur.com/Gch601g.png', // Static image of the user journey
          className: 'w-full h-full object-contain',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'More App Downloads',
    subtitle: 'Reward your guests',
    description: 'Give guests points when they use your branded mobile app',
    visuals: {
      background: 'https://assets-global.website-files.com/66643a14df53b71d1ed72d08/6809907f1f96435948a3a0e6_bg-rewards.png',
      foreground: [
        {
          src: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68099042b7c07e9975a59a72_1b44c664585f94b4802c63836d933331_rewards_item-1.avif',
          className: 'w-48 md:w-56 rounded-2xl shadow-2xl',
        },
      ],
    },
  },
];

// --- The React Component ---
const ExperienceTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index); // Use slideToLoop for infinite sliders
  };
  
  return (
    <section className="font-sans antialiased text-[#1a1a1a]">
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24 max-w-7xl">
        <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] leading-tight">
            With Owner, you get more traffic, more sales, more repeat customers
          </h2>
        </div>

        <div className="mt-16">
          {/* Tab Menu */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <div className="flex flex-col w-full max-w-4xl sm:flex-row">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className="relative flex-1 px-4 py-3 text-base font-medium text-center transition-colors duration-300"
                >
                  <div className={`flex items-center justify-center space-x-3 ${
                      activeIndex === index ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
                    }`}>
                    <span className="opacity-40">{tab.id}</span>
                    <p>{tab.title}</p>
                  </div>
                  <div className="absolute bottom-[-1px] left-0 w-full h-0.5">
                    {activeIndex === index && (
                      <motion.div
                        className="h-full bg-gray-900"
                        style={{ transformOrigin: 'left' }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 7, ease: 'linear' }}
                        key={activeIndex} // Reset animation when activeIndex changes
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Swiper Content */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
              onSlideChange={(swiper:SwiperType) => setActiveIndex(swiper.realIndex)}
              loop={true} // Enables infinite looping
              navigation={{
                nextEl: '.exp-arrow-next',
                prevEl: '.exp-arrow-prev',
              }}
              className="w-full"
            >
              {tabsData.map((tab) => (
                <SwiperSlide key={tab.id}>
                  <div className="overflow-hidden bg-gray-100 rounded-2xl">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[480px]">
                      {/* Text Content */}
                      <div className="px-8 py-12 text-center lg:px-12 lg:text-left">
                        <p className="text-xl font-medium text-gray-500 md:text-2xl">{tab.subtitle}</p>
                        <p className="mt-2 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">{tab.description}</p>
                      </div>
                      
                      {/* Visual Content */}
                      <div
                        className="relative flex items-center justify-center w-full h-80 lg:h-full"
                        style={{ backgroundImage: `url(${tab.visuals.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                      >
                        {tab.visuals.foreground.map((visual, idx) => (
                          <img key={idx} src={visual.src} alt={`${tab.title} asset ${idx + 1}`} className={visual.className} />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation (at the bottom) */}
            <div className="flex items-center justify-center mt-8 space-x-12">
              <button className="flex items-center space-x-2 text-gray-500 exp-arrow-prev group hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  <span className="text-base font-medium">Previous</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 exp-arrow-next group hover:text-gray-900 transition-colors">
                  <span className="text-base font-medium">Next</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTabs;