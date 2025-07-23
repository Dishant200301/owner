import React from 'react';

const OnlineOrderingSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div>
            <div className="text-center max-w-2xl mx-auto">
              {/* Heading for the section */}
              <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
                Grow your sales with our online ordering platform
              </h2>
            </div>
          </div>

          {/* Automate Banner - this acts as the main clickable card */}
          {/* It's a flex container that will arrange its children vertically on small screens and horizontally on medium screens and up */}
          <a href="/online-ordering" className="block mt-12 w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch">
            {/* Banner Visual - contains the main image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669add39354686f3a534a85a_online-ordering-preview-mo.jpg"
                loading="lazy"
                alt="Smiling restaurant owner standing in front of a neon sign."
                // Tailwind classes for image styling and responsive sizing, matching the original's srcset behavior
                className="w-full h-full object-cover md:rounded-l-xl"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 91vw, 266px"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669add39354686f3a534a85a_online-ordering-preview-mo-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669add39354686f3a534a85a_online-ordering-preview-mo.jpg 524w"
              />
            </div>

            {/* Banner Head - contains the text content and the arrow icon */}
            {/* Uses flex-1 to allow it to grow and fill available space, and flex-col justify-between to push the icon to the bottom */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between text-white">
              <div className="flex-grow"> {/* flex-grow ensures this content pushes the icon down */}
                {/* Title Wrap */}
                <div className="mb-1">
                  {/* Heading for online ordering feature */}
                  <h3 className="text-2xl font-extrabold">Online ordering</h3>
                  <div className="mt-1">
                    {/* Description text */}
                    <h3 className="text-lg text-gray-400">
                      Thousands of restaurants use Owner to increase their direct online sales
                    </h3>
                  </div>
                </div>
              </div>

              {/* Icon Wrap - positioned at the bottom right of the text content */}
              <div className="mt-auto flex justify-end"> {/* mt-auto pushes it to the bottom, justify-end aligns it to the right */}
                <div className="p-3 bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                  {/* SVG Icon from the original HTML, with fill color set via Tailwind */}
                  <svg width="100%" height="100%" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3074 23.7604C25.3074 24.2281 24.9296 24.6079 24.462 24.6105V24.6105C23.9906 24.6132 23.6071 24.2318 23.6071 23.7604L23.6071 18.6784L16.7677 25.5177C16.4267 25.8587 15.8739 25.8587 15.5329 25.5177V25.5177C15.1919 25.1767 15.1919 24.6239 15.5329 24.2829L22.3722 17.4435L17.2953 17.4476C16.8234 17.448 16.4411 17.0649 16.4424 16.593V16.593C16.4437 16.1233 16.8249 15.7432 17.2946 15.7432L24.8044 15.7432C25.0822 15.7432 25.3074 15.9684 25.3074 16.2462L25.3074 23.7604Z" fill="currentColor" className="text-white opacity-75"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OnlineOrderingSection;