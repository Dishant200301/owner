import React, { FC } from 'react';

const AboutHeadlineSection: FC = () => {
  return (
    // section_about-headline: Assuming a dark background as per the previous section,
    // with responsive vertical padding.
    <section className="bg-neutral-900 py-12 md:py-20">
      {/* padding-global: Standard responsive horizontal padding */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* container-small: A smaller max-width container, centered, with centered text.
            We'll use max-w-2xl or max-w-3xl for "small" relative to screen-xl. */}
        <div className="max-w-2xl mx-auto text-center">
          {/* h64: A very large heading. Adjusted responsively.
              text-6xl is roughly 64px on larger screens. */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Local business owners need tech that helps them, not hurts them.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutHeadlineSection;