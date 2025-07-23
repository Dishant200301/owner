import React, { FC } from 'react';

// Define the type for each statistic item
interface StatItem {
  value: string;
  description: string;
}

// Define the data for the statistics
const statsData: StatItem[] = [
  { value: "60M+ served users", description: "restaurant guests that have used Owner" },
  { value: "10,000+ restaurants helped", description: "independent restaurants in the USA" },
  { value: "$1B+ sales driven", description: "estimated sales impact of our software" },
  { value: "$250M+ saved fees", description: "helping restaurants protect their profits" },
];

const AboutStatsSection: FC = () => {
  return (
    // section_about-stats: Using a dark background (consistent with previous sections)
    // and responsive vertical padding.
    // `relative` positioning is needed for the absolutely positioned background pattern.
    // `overflow-hidden` to prevent the absolute pattern from causing horizontal scroll if it extends too far.
    <section className="relative bg-neutral-900 py-16 md:py-24 overflow-hidden">

      {/* Background pattern overlay (subtle blue/gray stripes, wavy)
          This div is absolutely positioned to cover the bottom-right part of the section.
          The `backgroundImage` is a placeholder URL. You'll need to replace it
          with the actual SVG or image used for the background pattern.
          I've used a common pattern name found on similar sites (`abstract-stripes.svg`)
          as a placeholder, but you'll need the exact asset. */}
      <div
        className="absolute bottom-0 right-0 w-3/5 h-3/4 opacity-20 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6677f5492d3f3f88f15d2a6a_abstract-stripes.svg")', // REPLACE WITH YOUR ACTUAL IMAGE/SVG URL
          backgroundSize: 'cover', // Ensures the pattern covers the div
          backgroundRepeat: 'no-repeat', // The pattern is likely a single, large graphic
          backgroundPosition: 'bottom right', // Positions it to the bottom right
        }}
      ></div>

      {/* The main content wrapper, needs `z-10` to ensure it's above the background pattern */}
      <div className="relative z-10">
        {/* padding-global: Standard responsive horizontal padding */}
        <div className="px-4 sm:px-6 lg:px-8">
          {/* container-large: Max width for content, centered */}
          <div className="max-w-screen-xl mx-auto">
            {/* about-stats_wrap: Flex column to stack title and list.
                No `items-center` here as content is left-aligned. */}
            <div className="flex flex-col gap-y-12">
              {/* h36: Responsive font size, bold, white text, left-aligned */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Difference made since 2020
              </h2>

              {/* about-stats_list: Stacked vertically (single column).
                  Use flex-col with gap for spacing. */}
              <ul className="flex flex-col gap-y-8"> {/* Adjusted gap-y for list items */}
                {statsData.map((stat, index) => (
                  // Each list item needs to be left-aligned and should have a max-width
                  // to match the narrow column seen in the image.
                  <li key={index} className="max-w-xs md:max-w-sm"> {/* Adjust max-w as needed */}
                    {/* margin-bottom margin-8: Mapped to mb-2 (8px) */}
                    <div className="mb-2">
                      {/* h36: Responsive font size for the stat value, bold, white text */}
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                    {/* text-color-content-tertiary: Mapped to text-neutral-400 (a light gray) */}
                    <div>
                      {/* h16: Responsive font size for the description, light gray text */}
                      <p className="text-base sm:text-lg text-neutral-400">
                        {stat.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;