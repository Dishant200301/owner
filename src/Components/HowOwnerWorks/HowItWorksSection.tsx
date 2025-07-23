import React from 'react';

// Reusable SVG components for the button arrow
const ButtonArrowTail: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-0.5">
    <path d="M9 1L1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const ButtonArrowHead: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-3">
    <path d="M1 1.5L5 6L1 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
);

interface HowItWorkStepProps {
  stepNumber: string;
  title: string;
  description: string;
  linkHref: string;
  imageUrl: string;
  imageAlt: string;
  // Optional props for responsive image sources, as seen in original HTML
  imageSrcSet?: string;
  imageSizes?: string;
}

const HowItWorkStep: React.FC<HowItWorkStepProps> = ({
  stepNumber,
  title,
  description,
  linkHref,
  imageUrl,
  imageAlt,
  imageSrcSet,
  imageSizes,
}) => {
  return (
    // Equivalent to .hiw-steps_item
    // Flex container: column on small screens, row on medium screens and up
    // Adds padding and a bottom border, the last item removes its bottom border
    <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-16 lg:py-20 border-b border-gray-200 last:border-b-0">
      {/* Equivalent to .hiw-steps_item-content */}
      {/* Adjusted width, text alignment, and spacing for responsiveness */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-10 md:mb-0 md:pr-12 lg:pr-24">
        {/* Equivalent to .hiw-steps_item-num */}
        <div className="flex items-center mb-6"> {/* margin-bottom for the number/pattern block */}
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            {stepNumber}.
          </p>
          <div className="h-px bg-gray-300 w-8 ml-4"></div> {/* Equivalent to .pattern - a simple horizontal line */}
        </div>
        {/* Equivalent to .hiw-steps_item-text */}
        <div className="w-full">
          {/* Equivalent to .margin-bottom margin-8 */}
          <div className="mb-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-800"> {/* Equivalent to .h36 */}
              {title}
            </p>
          </div>
          {/* Equivalent to .text-color-content-secondary */}
          <div className="text-gray-600">
            <p className="text-base"> {/* Equivalent to .p15 */}
              {description}
            </p>
          </div>
          {/* Equivalent to .margin-top margin-24 */}
          <div className="mt-6">
            {/* Equivalent to .button .is-secondary .w-inline-block */}
            <a href={linkHref} className="inline-flex items-center bg-gray-100 text-gray-800 border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors">
              <p className="text-sm font-semibold"> {/* Equivalent to .h13 */}
                Learn more
              </p>
              <div className="flex items-center ml-2"> {/* Equivalent to .button_arrow */}
                <ButtonArrowTail />
                <ButtonArrowHead />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Equivalent to .hiw-steps_item_visual */}
      {/* Centering the image within its column */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        {/* Equivalent to .img-cover, with rounded corners and shadow from screenshot */}
        <img
          src={imageUrl}
          loading="lazy"
          alt={imageAlt}
          sizes={imageSizes}
          srcSet={imageSrcSet}
          className="object-cover w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    // Equivalent to .section_hiw-steps, using a light background color as seen in the image
    <section className="bg-white py-16 sm:py-24">
      {/* Equivalent to .padding-global - standard global horizontal padding */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Equivalent to .container-large - standard max-width container with auto margins for centering */}
        <div className="max-w-7xl mx-auto">
          {/* Equivalent to .hiw-steps_wrap - flex column to stack steps, with a divider between them */}
          <div className="flex flex-col">

            <HowItWorkStep
              stepNumber="01"
              title="Show up at the top of Google"
              description="Beat your competition with a website perfectly optimized for Google. Get more orders from people in your area."
              linkHref="/restaurant-website-ai"
              imageUrl="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg"
              imageAlt="Google search results showing a restaurant at the top"
              imageSizes="(max-width: 991px) 100vw, (max-width: 1143px) 99vw, 1132px"
              imageSrcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg 1132w"
            />

            <HowItWorkStep
              stepNumber="02"
              title="Grow sales with the easiest online ordering"
              description="Guests order more from you when your online ordering experience feels familiar and easy."
              linkHref="/online-ordering"
              imageUrl="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d1f8ecd64b44914c4_hiw_2.jpg"
              imageAlt="Online ordering menu on a desktop screen"
              imageSizes="(max-width: 991px) 100vw, (max-width: 1078px) 99vw, 1068px"
              imageSrcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d1f8ecd64b44914c4_hiw_2-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d1f8ecd64b44914c4_hiw_2-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d1f8ecd64b44914c4_hiw_2.jpg 1068w"
            />

            <HowItWorkStep
              stepNumber="03"
              title="Drive re-orders with your mobile app and rewards"
              description="Get more repeat orders with your own 5-star mobile app. Drive loyalty with a rewards program, just like Starbucks."
              linkHref="/branded-apps"
              imageUrl="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582dcd1bfba7964d8038_hiw_3.jpg"
              imageAlt="Hands holding a mobile phone with a restaurant app"
              imageSizes="(max-width: 991px) 100vw, (max-width: 1078px) 99vw, 1068px"
              imageSrcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582dcd1bfba7964d8038_hiw_3-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582dcd1bfba7964d8038_hiw_3-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582dcd1bfba7964d8038_hiw_3.jpg 1068w"
            />

            <HowItWorkStep
              stepNumber="04"
              title="Keep guests engaged with auto-marketing"
              description="Boost sales with proven, automated marketing campaigns. Send money-making emails and texts without writing a word."
              linkHref="/automatic-marketing"
              imageUrl="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d8dbd972390d3f549_hiw_4.jpg"
              imageAlt="Email marketing dashboard on a laptop screen"
              imageSizes="(max-width: 991px) 100vw, (max-width: 1081px) 99vw, 1071px"
              imageSrcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d8dbd972390d3f549_hiw_4-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d8dbd972390d3f549_hiw_4-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690582d8dbd972390d3f549_hiw_4.jpg 1071w"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;