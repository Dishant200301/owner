import React from 'react';

const HpTechSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Give your restaurant the same tech as the big brands
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

            {/* Top Item: Mobile App */}
            <div
              id="w-node-fa747f94-95b2-ee52-e1c7-e8f4d2624320-1ed72d09"
              className="relative col-span-1 lg:col-span-2 bg-cover bg-center rounded-2xl overflow-hidden aspect-[16/7] md:aspect-[16/6] flex items-end p-8"
              style={{ backgroundImage: `url(https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e2f9d1d8ef31d3f3f_home-mobile-app.jpg)` }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 w-full text-center">
                <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
                  Your customers are used to ordering on their phone. That’s why we give your restaurant its own <span className="text-white font-bold">mobile app.</span>
                </p>
              </div>
            </div>

            {/* Bottom Left Item: Restaurant Website */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end min-h-[300px] sm:min-h-[400px]">
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg"
                loading="lazy"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg 1132w"
                alt="Restaurant interior with table"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Lottie animation placeholder with Z-index for positioning */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 z-20 w-4/5 max-w-sm bg-white rounded-lg shadow-md">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="text-gray-500 text-sm">restaurants near me</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md">
                  <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg" alt="Your restaurant thumbnail" className="w-10 h-10 rounded-md object-cover" />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm">Your restaurant</p>
                    <div className="flex items-center">
                      <span className="text-blue-500 text-xs font-bold">4.4</span>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 ${i < 4 ? 'text-blue-500' : 'text-gray-300'} ml-0.5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.532 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.777.565-1.833-.197-1.532-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Simplified lines for content below */}
                <div className="space-y-1 mt-4">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-11/12"></div>
                  <div className="h-2 bg-gray-100 rounded w-10/12"></div>
                </div>
              </div>

              {/* Bottom Text for cc-light */}
              <div className="relative z-10 p-8 pt-24 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
                  Get higher Google rankings with your AI-powered <span className="text-white font-bold">restaurant website.</span>
                </p>
              </div>
            </div>

            {/* Bottom Right Item: Online Ordering */}
            <div className="relative bg-amber-50 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end min-h-[300px] sm:min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Layered images for online ordering visual */}
                <div className="relative w-full h-full">
                  {/* Image 1: Focaccia (largest, bottom layer) */}
                  <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ace0c02cc025cc0ff3_5f9d5ca7e6dc349161dd244e2f18a7b3_online-order_3.png" alt="Online order Focaccia" className="absolute w-full h-full object-contain object-bottom scale-110" />
                  {/* Image 2: Chicken Ravioli (middle layer) */}
                  <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac0f3c32e29518e33f_6e9b0643992f8e1d70e5da807a105c95_online-order_2.png" alt="Online order Chicken Ravioli" className="absolute w-full h-full object-contain object-center translate-y-1/4 scale-90" />
                  {/* Image 3: Presto Pizza (smallest, top layer) */}
                  <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef6ac00ceda9e2aacdd29_60fbfb1d32e666f5839f18017af20b6c_online-order_1.png" alt="Online order Presto Pizza" className="absolute w-full h-full object-contain object-top -translate-y-1/4 scale-80" />
                </div>
              </div>
              
              {/* Bottom Text for cc-dark */}
              <div className="relative z-10 p-8 pt-24 bg-gradient-to-t from-amber-100 to-transparent">
                <p className="text-xl sm:text-2xl font-semibold text-gray-700 leading-relaxed">
                  <span className="text-gray-500">Grow your sales with an </span><span className="text-gray-900 font-bold">online ordering system</span><span className="text-gray-500"> modeled after the big brands.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HpTechSection;