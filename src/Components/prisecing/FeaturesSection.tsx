import React from "react";

const RestaurantSalesSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center">
            Get more sales from your
            <br />
            restaurant&apos;s website
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none lg:mt-24">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
            <div className="relative rounded-[20px] shadow-xl overflow-hidden">
              <div className="commisions-bg_visual">
                <img
                  src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01bd5a329643d7b30d4df_website-builder_intro%20(1).jpg"
                  loading="lazy"
                  alt=""
                  className="object-cover w-full h-full"
                  srcSet="
                    https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01bd5a329643d7b30d4df_website-builder_intro%20(1)-p-500.jpg 500w,
                    https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01bd5a329643d7b30d4df_website-builder_intro%20(1)-p-800.jpg 800w,
                    https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66a01bd5a329643d7b30d4df_website-builder_intro%20(1).jpg 1068w
                  "
                  sizes="(max-width: 991px) 100vw, (max-width: 1078px) 99vw, 1068px"
                />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              {[
                {
                  title: "We build websites that Google loves",
                  description:
                    "AI-optimized websites that boost your SEO and get you more Google traffic.",
                  icon: (
                    <path
                      d="M12 2.5L14.33 9.67L21.5 12L14.33 14.33L12 21.5L9.67 14.33L2.5 12L9.67 9.67L12 2.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  title: "Drive online sales like the big brands",
                  description:
                    "Easy online ordering right on your website. Grow your traffic, grow your orders.",
                  icon: (
                    <>
                      <path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  ),
                },
                {
                  title: "Your new website in days, not months",
                  description:
                    "Add your brand to our proven design, then you're ready to grow online.",
                  icon: (
                    <>
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 7V12L15 13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  ),
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-900"
                      >
                        {feature.icon}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSalesSection;
