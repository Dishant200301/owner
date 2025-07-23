import React from 'react';

const AboutStartSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          {/* Content Column */}
          <div className="lg:w-1/2 pb-12 lg:pb-0">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
              How it started
            </h2>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                Adam Guild was inspired to start Owner after an experience he had in saving his mom’s business.
              </p>
              {/* Equivalent to margin-top margin-48 */}
              <div className="mt-12">
                {/* Equivalent to text-color-content-secondary */}
                <div className="text-gray-700">
                  {/* Equivalent to h15 */}
                  <p className="text-base leading-relaxed">
                    Adam's mom was struggling because she didn’t have the right tools to grow her dog grooming business. She asked him for help, and he built the first version of Owner for her business. <br /><br />
                    Finally, she had the right technology to grow.<br /><br />
                    She transformed from a stressed single mom to a proud, self-made success.<br /><br />
                    Owner scaled after Adam partnered with Dean Bloembergen, the best technology leader he knew – who had experience building technology for large restaurant corporations like Blaze Pizza and Sharky’s. Dean’s parents are also small business owners, so he deeply loves helping people like them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visuals Column */}
          <div className="lg:w-1/2 relative min-h-[450px] md:min-h-[600px] lg:min-h-[500px] xl:min-h-[600px] mt-8 lg:mt-0">
            {/* Image 1: Worker (about-start_visual _1) */}
            <div className="absolute top-0 left-0 w-[60%] aspect-square rounded-2xl overflow-hidden shadow-xl lg:w-[55%] xl:w-[50%]">
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66b3dd19cbd8f3bf81566dbc_owner-reviews_2%20(1).jpg"
                loading="lazy"
                sizes="(max-width: 2831px) 100vw, 2831px"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66b3dd19cbd8f3bf81566dbc_owner-reviews_2%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66b3dd19cbd8f3bf81566dbc_owner-reviews_2%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66b3dd19cbd8f3bf81566dbc_owner-reviews_2%20(1)-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66b3dd19cbd8f3bf81566dbc_owner-reviews_2%20(1)-p-1600.jpg 1600w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66b3dd19cbd8f3bf81566dbc_owner-reviews_2%20(1)-p-2000.jpg 2000w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66b3dd19cbd8f3bf81566dbc_owner-reviews_2%20(1).jpg 2831w"
                alt="Worker preparing food"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2: Laptop (about-start_visual _2) */}
            <div className="absolute top-[20%] right-0 w-[65%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl md:top-[15%] md:right-[5%] lg:top-[10%] xl:top-[15%] lg:w-[60%] xl:w-[55%]">
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed107197cedfe07fd6_about-story_5.jpg"
                loading="lazy"
                alt="Laptop displaying data"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3: Founders (about-start_visual _3) */}
            <div className="absolute bottom-0 left-[20%] w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl z-10 md:bottom-0 md:left-[30%] lg:bottom-0 lg:left-[25%] lg:w-[50%]">
              <img
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666fc75d57de54ad86ba2549_about-founders%20(1).jpg"
                loading="lazy"
                sizes="(max-width: 524px) 100vw, 524px"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666fc75d57de54ad86ba2549_about-founders%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666fc75d57de54ad86ba2549_about-founders%20(1).jpg 524w"
                alt="Two founders of Owner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStartSection;           