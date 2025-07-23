import React, { useState } from 'react';

// Define the structure for an FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Sample FAQ data
const faqs: FAQItem[] = [
  {
    question: 'What happens to my current website?',
    answer: `When you sign up with Owner, you'll get a new restaurant website optimized for traffic and sales. It will replace your current website.

Your domain and website URL will stay the same.

We won't delete your current website. If you ever decide to cancel your subscription with us, we will restore your website to how it was before you signed up.`,
  },
  {
    question: 'How much can I customize my design?',
    answer: `We believe sales is the most important thing. So we give you a proven design that you can personalize with your branding.

It's why restaurant websites with Owner look a certain way. We've studied the best online brands. We've driven over $100 million in sales for restaurants. We've helped thousands of restaurant owners grow their customer base with our websites.

If you're looking for a lot of design freedom, Owner is not the right fit for your business.`,
  },
  {
    question: 'How long will this take?',
    answer: `If you have everything ready to go, a few days. 

Most customers get their new online presence set up within about a week.

We'll need some information about your business when you sign up. 

This includes your website domain information, along with Google Business and Yelp details. The more of those you have on hand, the faster we can launch.`,
  },
];

const FAQsSection: React.FC = () => {
  // State to manage which FAQ item is currently open.
  // null means no item is open.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-gray-200"> {/* section-border */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-large */}
        <div className="flex flex-col lg:flex-row lg:gap-24"> {/* faqs_wrap */}
          {/* FAQs Content */}
          <div className="lg:w-2/3 mb-12 lg:mb-0"> {/* faqs_content */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">FAQs</h2> {/* h44 */}
            <div className="space-y-6"> {/* faqs_list */}
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0"> {/* faqs_item */}
                  <button
                    className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3> {/* h18 */}
                    <div className="relative w-5 h-5 flex-shrink-0"> {/* faqs_icon */}
                      {/* Horizontal line */}
                      <div className="absolute w-full h-0.5 bg-gray-900 rounded-full top-1/2 -translate-y-1/2"></div> {/* faqs_line */}
                      {/* Vertical line - rotates to become horizontal (or disappear) */}
                      <div
                        className={`absolute w-full h-0.5 bg-gray-900 rounded-full top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out ${
                          openIndex === index ? 'rotate-90' : 'rotate-0'
                        }`}
                      ></div> {/* faqs_line _2 */}
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="mt-4"> {/* margin-top margin-16 */}
                      <div className="max-w-2xl"> {/* max-width-580 */}
                        <p className="text-base text-gray-700 whitespace-pre-line">{faq.answer}</p> {/* p15 */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Testimonial Banner */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="sticky top-20 bg-gray-900 text-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl max-w-sm lg:max-w-xs"> {/* sticky-banner */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 flex-shrink-0"> {/* sticky-banner_visual */}
                <img
                  src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668f345ebe9b55075cda19c3_matt-miller.jpg"
                  loading="lazy"
                  sizes="(max-width: 991px) 100vw, 244px"
                  srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668f345ebe9b55075cda19c3_matt-miller-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668f345ebe9b55075cda19c3_matt-miller.jpg 720w"
                  alt="Matthew Miller"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-semibold leading-relaxed mb-4"> {/* h18 */}
                "We're getting more clicks, and we're getting more traffic. And those clicks are turning into sales."
              </p>
              <div className="mt-3"> {/* margin-top margin-12 */}
                <p className="text-xs text-gray-400"> {/* p12 text-color-content-inverted-tertiary */}
                  Matthew Miller<br />
                  Co-Owner of Mr M's Sandwich Shop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;