import React from 'react';

const ProvenDesignSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            A proven design that drives more traffic
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI SEO Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-center">
            <div className="relative w-full md:w-1/2 flex-shrink-0 mb-8 md:mb-0 md:mr-8">
              {/* This container helps in positioning the floating images */}
              <div className="relative max-w-xs mx-auto">
                {/* Central Search UI Card */}
                <div className="relative bg-white rounded-2xl shadow-xl p-4 z-10">
                  <div className="w-full bg-white border border-gray-200 rounded-lg p-2 flex items-center shadow-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-gray-700 text-base">restaurants near me</span>
                  </div>
                  <div className="w-full bg-white rounded-md shadow-md p-3 border border-gray-100">
                    <div className="flex items-center">
                      <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a0153339117f8b38fd8c79_Card%20Item-2.png" alt="Restaurant" className="w-12 h-12 rounded-md mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Your restaurant</p>
                        <div className="flex items-center mt-1 text-sm">
                          <span className="text-gray-700 font-bold mr-1">4.4</span>
                          <span className="text-yellow-400 text-lg">★★★★</span><span className="text-gray-300 text-lg">★</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                        <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                    </div>
                  </div>
                   <div className="mt-3 h-10 bg-gray-100 rounded-md"></div>
                   <div className="mt-3 h-10 bg-gray-100 rounded-md"></div>
                </div>

                {/* Floating Images */}
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01533a329643d7b2b1e02_Card%20Item-1.png" alt="Pizza" className="absolute top-0 left-0 w-24 h-24 rounded-lg shadow-lg -translate-x-1/3 -translate-y-1/3" />
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01533262c81f0b39e500f_Card%20Item-3.png" alt="Food bowl" className="absolute top-0 right-0 w-24 h-24 rounded-lg shadow-lg translate-x-1/3 -translate-y-1/4" />
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a0153339117f8b38fd8c79_Card%20Item-2.png" alt="Noodles" className="absolute bottom-0 left-0 w-24 h-24 rounded-lg shadow-lg -translate-x-1/4 translate-y-1/4" />
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01533c571273b460e0324_Card%20Item.png" alt="Salad bowl" className="absolute bottom-0 right-0 w-24 h-24 rounded-lg shadow-lg translate-x-1/4 translate-y-1/4" />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-base text-gray-500 uppercase font-semibold mb-2">AI SEO</p>
              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                AI-optimized sites boost SEO and Google traffic.
              </h3>
            </div>
          </div>

          {/* Online Ordering Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
             <p className="text-base text-gray-500 uppercase font-semibold mb-3">Online ordering built-in</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Great ordering experience that increases sales.
            </h3>
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669d06b991b1ed920b72a08f_online%20ordering%20built-in.png"
              alt="Online ordering interface for an Italian restaurant"
              className="rounded-lg shadow-md mt-auto"
            />
          </div>

          {/* Fast Launch Card */}
          <div className="bg-[#A96F44] rounded-2xl shadow-lg p-8 flex flex-col text-white">
            <p className="text-base uppercase font-semibold mb-3">Fast launch</p>
            <h3 className="text-3xl font-bold mb-6 leading-snug">
              Add your branding, then go live ASAP.
            </h3>
            <img
              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669d06b9d62c81f0b39e504c_fast%20launch.png"
              alt="Website template for fast launch"
              className="rounded-lg shadow-md mt-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenDesignSection;