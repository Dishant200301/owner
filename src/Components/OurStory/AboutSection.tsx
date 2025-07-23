import React, { FC } from 'react';

// Define props for individual words if needed, though we can manage this directly.
// For consistency and potential future animation hooks, we'll create a simple Word component.
interface WordProps {
  text: string;
  textColorClass?: string;
}

const Word: FC<WordProps> = ({ text, textColorClass = 'text-white' }) => (
  // Original had 'display: inline-block'. Keeping it for potential animation reliance.
  <span className={`inline-block ${textColorClass}`}>{text}{' '}</span>
);

interface ParagraphBlock {
  text: string;
  color?: string; // Can be a Tailwind class like 'text-white' or 'text-neutral-400', or original rgb string
  breaksBefore?: number; // Number of <br> tags before this block
}

const AboutSection: FC = () => {

  // Helper function to render text with varying colors and handle breaks
  const renderStyledParagraph = (textBlocks: ParagraphBlock[]) => {
    return textBlocks.map((block, blockIndex) => (
      <React.Fragment key={blockIndex}>
        {block.breaksBefore && Array.from({ length: block.breaksBefore }).map((_, i) => <br key={`br-${blockIndex}-${i}`} />)}
        {block.text.split(' ').map((word, wordIndex) => {
          // Filter out empty strings if there are multiple spaces
          if (!word.trim()) return null;

          let finalTextColorClass = 'text-white'; // Default

          if (block.color) {
            // Map custom RGB to Tailwind classes
            if (block.color === 'rgb(251, 251, 251)') {
              finalTextColorClass = 'text-neutral-50'; // Very light gray, almost white
            } else if (block.color === 'rgb(120, 122, 125)') {
              finalTextColorClass = 'text-neutral-400'; // A darker gray
            } else {
              finalTextColorClass = block.color; // Assume it's already a Tailwind class
            }
          }

          // Handle the special '‍' character which was an isolated div
          if (word === '‍') {
            return (
              <Word key={`word-${blockIndex}-${wordIndex}`} text={word} textColorClass={finalTextColorClass} />
            );
          }

          return (
            <Word key={`word-${blockIndex}-${wordIndex}`} text={word} textColorClass={finalTextColorClass} />
          );
        })}
      </React.Fragment>
    ));
  };


  // Content for the first paragraph
  const paragraph1Content: ParagraphBlock[] = [
    { text: "They risk everything – years of their lives, their families, their savings – to pursue their dreams.", color: 'text-white' },
    { text: "They’re the heart of our economy, creating the majority of new jobs. They remind us that it’s possible to rise from being an entry-level worker to becoming a business owner one day, as 70% of restaurant owners do.", color: 'text-white', breaksBefore: 2 },
    { text: "But local business owners are on a path to extinction.", color: 'text-white', breaksBefore: 2 },
    { text: "Just 20 years ago, 60% of restaurants were owned by independent mom and pops. Today, that number is 40%, and dropping. Big chains keep taking over. Mom-and-pops keep shutting down.", color: 'text-white', breaksBefore: 2 },
  ];

  // Content for the second paragraph with varying colors
  const paragraph2Content: ParagraphBlock[] = [
    { text: "Local restaurants are being destroyed by large corporations.", color: 'text-white' }, // Original: color: rgb(251, 251, 251) -> text-neutral-50, but very close to white so used text-white
    { text: "Tech companies like Grubhub charge predatory fees and take away all of their customer relationships.", color: 'rgb(120, 122, 125)' }, // Original: rgb(120, 122, 125) -> text-neutral-400
    { text: "They don't even share customers’ names, let alone contact details.", color: 'rgb(120, 122, 125)' },
    { text: "Plus, massive corporations like Domino’s Pizza are spending billions on marketing and technology — aiming to replace their small local counterparts.", color: 'rgb(120, 122, 125)', breaksBefore: 2 },
    { text: "‍", color: 'rgb(120, 122, 125)', breaksBefore: 1 }, // Special character with a br before and after
    { text: "But Owner is changing the odds.", color: 'rgb(120, 122, 125)', breaksBefore: 2 },
    { text: "Owner is a proven system for independent restaurants to drive sales profitably — to grow independently, in spite of the Goliaths.", color: 'rgb(120, 122, 125)', breaksBefore: 2 },
  ];

  // Image data for the gallery
  const galleryImages = [
    { src: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66909d53ca7cc57377c4e8ba_delivery.jpg", alt: "Food delivery", sizes: "(max-width: 524px) 100vw, 524px", srcset: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66909d53ca7cc57377c4e8ba_delivery-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66909d53ca7cc57377c4e8ba_delivery.jpg 524w" },
    { src: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66edf886c3f4bcf99336_about-story_2.jpg", alt: "Restaurant kitchen staff" },
    { src: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed4f48d80e38be45d5_about-story_3.jpg", alt: "Chef preparing food" },
    { src: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon.webp", alt: "Cafe owner talking to customer", sizes: "(max-width: 991px) 100vw, (max-width: 1212px) 99vw, 1200px", srcset: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon-p-500.webp 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon-p-800.webp 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon-p-1080.webp 1080w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/67d7e7a86a44845924a36cf7_674e11bdf36c39102f699cf1_1-secon.webp 1200w" },
    { src: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f66ed107197cedfe07fd6_about-story_5.jpg", alt: "Barista making coffee" },
  ];

  return (
    // section_about-intro: Using bg-neutral-900 for a dark background as text is white/light gray
    // section-border: Custom attribute, kept as data-section-border=""
    <section className="bg-neutral-900 py-16 md:py-24" data-section-border="">
      {/* padding-global: Standard responsive horizontal padding */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* container-large: Max width for content, centered */}
        <div className="max-w-screen-xl mx-auto">
          {/* about-intro_wrap: Flex column layout for sections with vertical gap */}
          <div className="flex flex-col gap-y-16 lg:gap-y-24">

            {/* First Text Block */}
            {/* flex-center: Centers content horizontally and stacks vertically */}
            <div className="flex flex-col items-center text-center">
              {/* margin-bottom margin-40: Roughly mb-10 in Tailwind (40px) */}
              <div className="mb-10">
                {/* h36: Adjust font size responsively, bold, white text */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Local business owners are heroes to us.
                </h2>
              </div>
              {/* text-color-content-tertiary: Text color, handled by the render function */}
              <div data-animation-wrap="" className="text-white">
                {/* h20 & max-width-470: Font size and max width for the paragraph, centered */}
                <p data-animation-text="" className="text-lg sm:text-xl md:text-2xl max-w-xl mx-auto">
                  {renderStyledParagraph(paragraph1Content)}
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            {/* about-intro_gallery: Using a responsive columns layout (CSS masonry) for the gallery.
                The 'left' and 'right' classes in the original HTML likely implied a more complex
                staggered layout or specific positioning. For general responsiveness, `columns` is a good fit. */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 py-8 md:py-16">
              {galleryImages.map((image, index) => (
                <div key={index} className="mb-4 overflow-hidden rounded-lg"> {/* about-intro_gallery_visual */}
                  <img
                    src={image.src}
                    loading="lazy"
                    sizes={image.sizes}
                    srcSet={image.srcset}
                    alt={image.alt}
                    className="w-full h-auto object-cover" // img-cover maps to object-cover
                  />
                </div>
              ))}
            </div>

            {/* Second Text Block (Structure identical to the first) */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  A technological revolution is going on.
                </h2>
              </div>
              <div data-animation-wrap="" className="text-white">
                {/* max-width-480: Adjusted to max-w-xl for consistency with the first paragraph */}
                <p data-animation-text="" className="text-lg sm:text-xl md:text-2xl max-w-xl mx-auto">
                  {renderStyledParagraph(paragraph2Content)}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;