import React from 'react';

// SVG icon component for the career banner
const ArrowRightIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.3074 23.7604C25.3074 24.2281 24.9296 24.6079 24.462 24.6105V24.6105C23.9906 24.6132 23.6071 24.2318 23.6071 23.7604L23.6071 18.6784L16.7677 25.5177C16.4267 25.8587 15.8739 25.8587 15.5329 25.5177V25.5177C15.1919 25.1767 15.1919 24.6239 15.5329 24.2829L22.3722 17.4435L17.2953 17.4476C16.8234 17.448 16.4411 17.0649 16.4424 16.593V16.593C16.4437 16.1233 16.8249 15.7432 17.2946 15.7432L24.8044 15.7432C25.0822 15.7432 25.3074 15.9684 25.3074 16.2462L25.3074 23.7604Z"
      fill="white"
      fillOpacity="0.76"
    ></path>
  </svg>
);

const VisionAndCareers: React.FC = () => {
  return (
    // Equivalent to about-dark-bottom - using a dark background for the entire component
    <div className="bg-gray-50">
      {/* section_about-story */}
      <section className="pb-16 pt-24 border-b border-gray-200"> {/* section-border="bottom" */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-large */}
          <div className="mb-16"> {/* about-story_wrap - not fully replicated as a distinct div, its content is directly under */}
            <div className="max-w-3xl mx-auto text-center mb-16"> {/* max-width-710 text-align-center */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"> {/* h44 */}
                Our long-term vision goes beyond restaurants.
              </h2>
            </div>
            {/* about-story_grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
              {/* Card 1: Today */}
              <div
                id="w-node-a03c08b7-74ac-8d7f-7353-02ca95d28c0e-f91a9e7a"
                className="relative bg-black rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end p-8 shadow-xl"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6a6f484e2574014a4_about_1.jpg"
                    loading="lazy"
                    sizes="(max-width: 991px) 100vw, (max-width: 1715px) 99vw, 1698px"
                    srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6a6f484e2574014a4_about_1-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6a6f484e2574014a4_about_1-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6a6f484e2574014a4_about_1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6a6f484e2574014a4_about_1.jpg 1698w"
                    alt="Restaurant owner looking up"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div> {/* Overlay for text readability */}
                </div>
                <div className="relative z-10 text-white">
                  <p className="text-lg font-semibold mb-4">Today</p> {/* h18 */}
                  <div className="max-w-md mb-2"> {/* max-width-430 */}
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight"> {/* h24 */}
                      We serve thousands of restaurants in the USA, <span className="text-gray-400">along with millions of restaurant guests.</span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400"> {/* p15 */}
                    $25 billion addressable market opportunity.
                  </p>
                </div>
              </div>

              {/* Card 2: 3 Years */}
              <div
                id="w-node-_85b623ce-5420-19ff-7e6f-ae61822f49d3-f91a9e7a"
                className="relative bg-black rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end p-8 text-white shadow-xl"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6c774be74b474c9b2_about_2.jpg"
                    loading="lazy"
                    sizes="(max-width: 991px) 100vw, (max-width: 1715px) 99vw, 1698px"
                    srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6c774be74b474c9b2_about_2-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6c774be74b474c9b2_about_2-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6c774be74b474c9b2_about_2-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a6c774be74b474c9b2_about_2.jpg 1698w"
                    alt="Global icon"
                    className="w-full h-full object-contain object-right opacity-30 origin-right" // img-cover origin-right
                  />
                  {/* about-story_card-overlay (dark overlay) handled by background-color on image parent + opacity */}
                </div>
                <div className="relative z-10">
                  <p className="text-lg font-semibold mb-4">3 Years</p> {/* h18 */}
                  <div className="max-w-md mb-2"> {/* max-width-430 */}
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight"> {/* h24 */}
                      Millions of restaurants worldwide use Owner, <span className="text-gray-400">as we 10X the market opportunity by expanding globally.</span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400"> {/* p15 */}
                    $100 billion addressable market opportunity.
                  </p>
                </div>
              </div>

              {/* Card 3: 10 Years (Big Card) */}
              <div
                id="w-node-_3d6c039c-85c3-9f9a-2cc7-c274b4f2ac58-f91a9e7a"
                className="lg:col-span-2 bg-white rounded-2xl overflow-hidden p-8 flex flex-col md:flex-row gap-8 shadow-xl"
              >
                <div className="md:w-1/2 flex items-center justify-center"> {/* about-story_people-wrap */}
                  <img
                    src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a63174ee1713a2b9dc_about_3.png"
                    loading="lazy"
                    sizes="(max-width: 991px) 100vw, (max-width: 1200px) 99vw, 1188px"
                    srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a63174ee1713a2b9dc_about_3-p-500.png 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a63174ee1713a2b9dc_about_3-p-800.png 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a63174ee1713a2b9dc_about_3-p-1080.png 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fc0a63174ee1713a2b9dc_about_3.png 1188w"
                    alt="Group of diverse people"
                    className="w-full h-auto object-contain" // about-story_people-img
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center"> {/* about-story_card-text */}
                  <p className="text-lg font-semibold text-gray-700 mb-4">10 Years</p> {/* h18 text-color-content-secondary */}
                  <div className="max-w-md mb-4"> {/* max-width-430 */}
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight"> {/* h28 */}
                      Owner serves every type of local business,<span className="text-gray-500"> delivering profitable growth for tens of millions of business owners globally.</span>
                    </h3>
                  </div>
                  <div className="space-y-1 text-gray-500"> {/* about-story_card-bottom-inner text-color-content-tertiary */}
                    <p className="text-sm"> {/* p15 */}
                      $1 trillion addressable market opportunity.
                    </p>
                    <p className="text-sm"> {/* p15 */}
                      Like Shopify + HubSpot, for local business owners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section_bot-banner */}
      <section className="bg-gray-800 py-16 sm:py-24 lg:py-32"> {/* section-full */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-large */}
          <div className="flex flex-col items-center text-center"> {/* bot-banner_wrap */}
            <div className="mb-8"> {/* bot-banner_head */}
              <div className="mb-4"> {/* margin-bottom margin-16 */}
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight"> {/* h48 */}
                  Help mom and pop business owners succeed in the digital age
                </h2>
              </div>
              <div className="max-w-lg mx-auto"> {/* max-width-460 */}
                <p className="text-base text-gray-300"> {/* p15 text-color-content-secondary */}
                  Owner is remote-first and all-inclusive with competitive perks. Learn all about it in our careers page.
                </p>
              </div>
            </div>
            <a
              href="/careers"
              className="mt-8 relative w-full lg:max-w-4xl bg-gray-700 hover:bg-gray-600 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white transition-colors duration-200 overflow-hidden group shadow-lg" // career-banner w-inline-block
            >
              <div className="flex flex-col text-left"> {/* career-banner_head */}
                <h3 className="text-2xl md:text-3xl font-bold">Careers at Owner</h3> {/* h24 */}
                <div className="mt-1"> {/* margin-top margin-4 */}
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-300">See our open roles</h3> {/* h20 text-color-content-tertiary */}
                </div>
              </div>
              <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-6 w-10 h-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"> {/* icon-wrap icon_40 w-embed */}
                <ArrowRightIcon />
              </div>
              {/* about-intro_gallery cc-banner */}
              <div className="absolute inset-y-0 right-0 w-[45%] md:w-[40%] flex overflow-hidden">
                <div className="absolute inset-0 flex items-end">
                    {/* The images are meant to be a horizontally scrolling/overlapping gallery */}
                    {/* Replicated using absolute positioning and z-index to create the overlapping effect */}
                    <div className="absolute bottom-0 left-0 w-[120px] h-[100px] md:w-[150px] md:h-[120px] rounded-lg overflow-hidden -rotate-6 z-5 transform group-hover:scale-105 transition-transform duration-300">
                      <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed62fe41f9c7d6dbf9_about-story_1.jpg" loading="lazy" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-[70px] w-[120px] h-[100px] md:w-[150px] md:h-[120px] rounded-lg overflow-hidden rotate-3 z-10 transform group-hover:scale-105 transition-transform duration-300">
                      <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014eb6803d1d6115280334_OWNER-067-web-final.jpg" loading="lazy" sizes="(max-width: 1732px) 100vw, 1732px" srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014eb6803d1d6115280334_OWNER-067-web-final-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014eb6803d1d6115280334_OWNER-067-web-final-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014eb6803d1d6115280334_OWNER-067-web-final-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014eb6803d1d6115280334_OWNER-067-web-final-p-1600.jpg 1600w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014eb6803d1d6115280334_OWNER-067-web-final.jpg 1732w" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-[140px] w-[120px] h-[100px] md:w-[150px] md:h-[120px] rounded-lg overflow-hidden -rotate-3 z-15 transform group-hover:scale-105 transition-transform duration-300">
                      <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed4f48d80e38be45d5_about-story_3.jpg" loading="lazy" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-[210px] w-[120px] h-[100px] md:w-[150px] md:h-[120px] rounded-lg overflow-hidden rotate-6 z-20 transform group-hover:scale-105 transition-transform duration-300">
                      <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014d20b9af2c530b7b182e_OWNER-238-web-final.jpg" loading="lazy" sizes="(max-width: 1000px) 100vw, 1000px" srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014d20b9af2c530b7b182e_OWNER-238-web-final-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014d20b9af2c530b7b182e_OWNER-238-web-final-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68014d20b9af2c530b7b182e_OWNER-238-web-final.jpg 1000w" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-[280px] w-[120px] h-[100px] md:w-[150px] md:h-[120px] rounded-lg overflow-hidden -rotate-6 z-25 transform group-hover:scale-105 transition-transform duration-300">
                      <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed107197cedfe07fd6_about-story_5.jpg" loading="lazy" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionAndCareers;