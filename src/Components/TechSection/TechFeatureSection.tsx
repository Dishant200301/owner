import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const TechSection: React.FC = () => {
  const lottiePlayer = useRef<Player>(null);

  // Handlers to play/stop the Lottie animation on hover (for desktop)
  const handleMouseEnter = () => {
    lottiePlayer.current?.play();
  };

  const handleMouseLeave = () => {
    lottiePlayer.current?.stop();
  };

  return (
    <section className="bg-[#F7F5F2] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Give your restaurant the same tech as the big brands
            </h2>
          </div>

          {/* 
            Responsive Grid:
            - Starts as a single column on mobile.
            - Becomes a two-column grid on medium screens (md:grid-cols-2) and larger.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Top Card: Spans both columns on medium screens and up */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-black min-h-[300px] sm:min-h-[400px] flex items-end">
              {/* Corrected Image Source */}
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71…4e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg" 
                alt="Person holding a phone showing a restaurant mobile app"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="relative z-10 p-6 md:p-8">
                <p className="text-lg font-medium text-white max-w-md text-left">
                  Your customers are used to ordering on their phone. That’s why we give your restaurant its own <span className="font-semibold">mobile app.</span>
                </p>
              </div>
            </div>

            {/* Bottom-Left Card: Google Rankings */}
            <div 
              className="relative group overflow-hidden rounded-2xl min-h-[400px] md:min-h-[450px]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg"
                alt="Restaurant interior"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative flex flex-col justify-between h-full p-6 md:p-8 text-left">
                <div className="flex-grow flex items-center justify-center">
                    <Player
                      ref={lottiePlayer}
                      src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fbb3b8dfb4c5619beed38_ranking.lottie"
                      style={{ height: '250px', width: '250px' }}
                    />
                </div>
                <p className="text-lg font-medium text-white z-10">
                  Get higher Google rankings with your AI-powered <span className="font-semibold">restaurant website.</span>
                </p>
              </div>
            </div>

            {/* Bottom-Right Card: Ordering System */}
            <div className="relative group overflow-hidden rounded-2xl bg-white min-h-[400px] md:min-h-[450px] p-6 md:p-8 flex flex-col justify-end">
              <div className="absolute inset-0 w-full h-full">
                {/* Visuals with hover parallax effect */}
                <img
                  src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac0f3c32e29518e33f_6e9b0643992f8e1d70e5da807a105c95_online-order_2.png"
                  alt="Online ordering UI component 1"
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-[280px] transition-transform duration-500 ease-out group-hover:translate-y-[-55%]"
                />
                <img
                  src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac00ceda9e2aacdd29_60fbfb1d32e666f5839f18017af20b6c_online-order_1.png"
                  alt="Online ordering UI component 2"
                  className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-2/5 max-w-[150px] transition-transform duration-500 ease-out group-hover:-translate-x-2/3"
                />
                <img
                  src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ace0c02cc025cc0ff3_5f9d5ca7e6dc349161dd244e2f18a7b3_online-order_3.png"
                  alt="Online ordering UI component 3"
                  className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-2/5 max-w-[150px] transition-transform duration-500 ease-out group-hover:translate-x-[60%]"
                />
              </div>
              <p className="text-lg font-medium text-gray-800 z-10 relative text-left">
                <span className="text-gray-600">Grow your sales with an </span>
                online ordering system
                <span className="text-gray-600"> modeled after the big brands.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;