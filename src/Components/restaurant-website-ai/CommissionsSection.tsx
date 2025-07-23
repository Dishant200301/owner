import React from 'react';

const CommissionsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl text-center">
            {/* Heading for the section */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              A proven design that drives more traffic
            </h2>
          </div>
          {/* Main grid container for the feature cards */}
          <ul role="list" className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

            {/* First Feature Card (AI SEO) */}
            {/* On large screens, this card spans 2 columns and its content is laid out horizontally */}
            {/* The 'overflow-visible' allows the absolutely positioned images to extend beyond the card's boundaries */}
            <li className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center lg:col-span-2 lg:flex-row lg:items-start lg:gap-x-8 overflow-visible">
              {/* Visual part wrapper for the "phone screen" simulation and surrounding images */}
              <div className="relative w-full max-w-xs h-64 md:h-72 lg:w-1/2 flex-shrink-0 mb-8 lg:mb-0">
                {/* Central "phone screen" element, simplified from Lottie animation to static Tailwind elements */}
                <div className="absolute inset-0 z-10 bg-white rounded-xl shadow-xl flex flex-col p-4 justify-center items-center">
                  {/* Search bar simulation */}
                  <div className="w-11/12 bg-gray-100 rounded-md p-2 flex items-center shadow-sm">
                    {/* Search icon */}
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <span className="text-gray-500 text-xs">restaurants near me</span>
                  </div>
                  {/* Review snippet simulation */}
                  <div className="mt-4 w-11/12 bg-white rounded-md shadow-md p-3 text-sm">
                    <p className="font-semibold text-gray-800">Your restaurant</p>
                    <div className="flex items-center mt-1">
                      <span className="text-blue-600 font-bold text-xs mr-1">4.4</span>
                      <span className="text-yellow-400 text-base">★★★★☆</span> {/* Unicode stars */}
                      <span className="text-gray-400 text-xs ml-1">(500+)</span>
                    </div>
                    {/* Placeholder for additional content */}
                    <div className="mt-2 space-y-1">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  {/* Additional blurred content below */}
                  <div className="mt-4 w-11/12 bg-white rounded-md shadow-md p-3 text-sm">
                    <div className="h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                  </div>
                </div>
                {/* Small surrounding food images, absolutely positioned to create the layered effect */}
                {/* Image URLs are directly from the original HTML's provided assets */}
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01533a329643d7b2b1e02_Card%20Item-1.png" loading="lazy" alt="Food item pizza" className="absolute top-0 left-0 w-24 h-24 object-cover rounded-md shadow-md z-0 transform -translate-x-1/3 -translate-y-1/3" />
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a0153339117f8b38fd8c79_Card%20Item-2.png" loading="lazy" alt="Food item pasta" className="absolute bottom-0 left-0 w-24 h-24 object-cover rounded-md shadow-md z-0 transform -translate-x-1/3 translate-y-1/3" />
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01533262c81f0b39e500f_Card%20Item-3.png" loading="lazy" alt="Food item stir-fry" className="absolute top-1/2 right-0 w-24 h-24 object-cover rounded-md shadow-md z-0 transform translate-x-1/2 -translate-y-1/2" />
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01533c571273b460e0324_Card%20Item.png" loading="lazy" alt="Food item steak" className="absolute top-1/4 right-1/4 w-20 h-20 object-cover rounded-md shadow-md z-0 transform -translate-x-1/4 -translate-y-1/4" />
              </div>

              {/* Content text part for AI SEO */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pl-8">
                <p className="text-sm text-gray-500 uppercase font-semibold">AI SEO</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-2 leading-tight">AI-optimized sites boost SEO and Google traffic.</h3>
              </div>
            </li>

            {/* Second Feature Card (Online ordering) */}
            <li className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="mb-2">
                <p className="text-sm text-gray-500 uppercase font-semibold">Online ordering built-in</p>
              </div>
              {/* Image representing the "online ordering built-in" feature */}
              <img 
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669d06b991b1ed920b72a08f_online%20ordering%20built-in.png" 
                loading="lazy" 
                alt="Screenshot of an online ordering website for a restaurant, showing menu categories and food items." 
                className="w-full h-auto object-cover rounded-md mb-6" 
              />
              <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">Great ordering experience that increases sales.</h3>
            </li>

            {/* Third Feature Card (Fast launch) */}
            {/* Background color approximated from the original image */}
            <li className="flex flex-col items-center rounded-xl shadow-lg p-6 text-center bg-[#DB803C]">
              <div className="mb-2">
                <p className="text-sm text-white uppercase font-semibold">Fast launch</p>
              </div>
              {/* Image representing the "fast launch" feature */}
              <img 
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669d06b9d62c81f0b39e504c_fast%20launch.png" 
                loading="lazy" 
                alt="Screenshot of a branding page with sections for custom text, popular dishes, and customer stories." 
                className="w-full h-auto object-cover rounded-md mb-6" 
              />
              <h3 className="text-2xl font-extrabold text-white leading-tight">Add your branding, then go live ASAP.</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommissionsSection;