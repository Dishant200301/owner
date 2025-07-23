import React from 'react';

const AboutContentSection: React.FC = () => {
  return (
    // Equivalent to about-dark-section
    <div className="bg-gray-900 text-white">
      {/* section_about-intro */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-gray-700"> {/* section-border */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-large */}
          <div className="flex flex-col items-center text-center"> {/* about-intro_wrap flex-center */}
            <div className="mb-10 sm:mb-12"> {/* margin-bottom margin-40 */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"> {/* h36 */}
                Local business owners are heroes to us.
              </h2>
            </div>
            <div className="text-gray-300"> {/* text-color-content-tertiary */}
              <div className="max-w-lg mx-auto"> {/* max-width-470 */}
                {/* data-animation-text, data-animation-wrap and word styles are for animation, not rendered directly */}
                {/* Replicated with plain text */}
                <p className="text-xl sm:text-2xl font-semibold leading-relaxed"> {/* h20 */}
                  They risk everything – years of their lives, their families, their savings – to pursue their dreams. <br /><br />
                  They’re the heart of our economy, creating the majority of new jobs. They remind us that it’s possible to rise from being an entry-level worker to becoming a business owner one day, as 70% of restaurant owners do.<br /><br />
                  But local business owners are on a path to extinction. <br /><br />
                  Just 20 years ago, 60% of restaurants were owned by independent mom and pops. Today, that number is 40%, and dropping. Big chains keep taking over. Mom-and-pops keep shutting down.
                </p>
              </div>
            </div>
          </div>

          {/* about-intro_gallery - This section often implies a complex layout, simplified here using a grid and adjusted positioning */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-16 sm:mt-24">
            <div className="col-span-1 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-0 md:translate-y-8"> {/* about-intro_gallery_visual left */}
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66909d53ca7cc57377c4e8ba_delivery.jpg"
                loading="lazy"
                sizes="(max-width: 524px) 100vw, 524px"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66909d53ca7cc57377c4e8ba_delivery-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66909d53ca7cc57377c4e8ba_delivery.jpg 524w"
                alt="Person handling takeout orders"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-8 md:translate-y-0"> {/* about-intro_gallery_visual right */}
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66edf886c3f4bcf99336_about-story_2.jpg"
                loading="lazy"
                alt="Chef preparing food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-0 md:translate-y-8"> {/* about-intro_gallery_visual left */}
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed4f48d80e38be45d5_about-story_3.jpg"
                loading="lazy"
                alt="Barista making coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-8 md:translate-y-0"> {/* about-intro_gallery_visual right */}
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon.webp"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, (max-width: 1212px) 99vw, 1200px"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon-p-500.webp 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon-p-800.webp 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon-p-1080.webp 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon.webp 1200w"
                alt="Person using a POS system"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-0 md:translate-y-8 hidden lg:block"> {/* about-intro_gallery_visual left */}
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed107197cedfe07fd6_about-story_5.jpg"
                loading="lazy"
                alt="Laptop displaying data"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          <div className="flex flex-col items-center text-center mt-24 sm:mt-32"> {/* flex-center */}
            <div className="mb-10 sm:mb-12"> {/* margin-bottom margin-40 */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"> {/* h36 */}
                A technological revolution is going on.
              </h2>
            </div>
            <div className="text-gray-300"> {/* text-color-content-tertiary */}
              <div className="max-w-xl mx-auto"> {/* max-width-480 */}
                {/* data-animation-text, data-animation-wrap and word styles are for animation, not rendered directly */}
                {/* Replicated with plain text */}
                <p className="text-xl sm:text-2xl font-semibold leading-relaxed"> {/* h20 */}
                  Local restaurants are being destroyed by large corporations. Tech companies like Grubhub charge predatory fees and take away all of their customer relationships. They don't even share customers’ names, let alone contact details. <br /><br />
                  Plus, massive corporations like Domino’s Pizza are spending billions on marketing and technology — aiming to replace their small local counterparts.<br /><br />
                  ‍But Owner is changing the odds.<br /><br />
                  Owner is a proven system for independent restaurants to drive sales profitably — to grow independently, in spite of the Goliaths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section_about-headline */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"> {/* padding-global container-small */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"> {/* h64 */}
            Local business owners need tech that helps them, not hurts them.
          </h2>
        </div>
      </section>

      {/* section_about-stats */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-large */}
          <div className="mb-16"> {/* about-stats_wrap - using this div to contain header and list */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-12"> {/* h36 */}
              Difference made since 2020
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"> {/* about-stats_list */}
              <li>
                <div className="mb-2"> {/* margin-bottom margin-8 */}
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">60M+ served users</p> {/* h36 */}
                </div>
                <div className="text-gray-400"> {/* text-color-content-tertiary */}
                  <p className="text-base font-medium">restaurant guests that have used Owner</p> {/* h16 */}
                </div>
              </li>
              <li>
                <div className="mb-2"> {/* margin-bottom margin-8 */}
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">10,000+ restaurants helped</p> {/* h36 */}
                </div>
                <div className="text-gray-400"> {/* text-color-content-tertiary */}
                  <p className="text-base font-medium">independent restaurants in the USA</p> {/* h16 */}
                </div>
              </li>
              <li>
                <div className="mb-2"> {/* margin-bottom margin-8 */}
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">$1B+ sales driven</p> {/* h36 */}
                </div>
                <div className="text-gray-400"> {/* text-color-content-tertiary */}
                  <p className="text-base font-medium">estimated sales impact of our software</p> {/* h16 */}
                </div>
              </li>
              <li>
                <div className="mb-2"> {/* margin-bottom margin-8 */}
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">$250M+ saved fees</p> {/* h36 */}
                </div>
                <div className="text-gray-400"> {/* text-color-content-tertiary */}
                  <p className="text-base font-medium">helping restaurants protect their profits</p> {/* h16 */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContentSection;