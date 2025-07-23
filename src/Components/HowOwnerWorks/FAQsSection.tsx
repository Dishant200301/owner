import React, { useState, useRef, useEffect } from 'react';

// Reusable component for the plus/minus icon
const PlusMinusIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div className="relative w-5 h-5 flex items-center justify-center">
    <div className="absolute w-full h-px bg-current transition-transform duration-300 ease-in-out"></div> {/* horizontal line */}
    <div
      className={`absolute w-full h-px bg-current transition-transform duration-300 ease-in-out ${
        isOpen ? 'rotate-90' : 'rotate-0'
      }`}
    ></div> {/* vertical line, rotates to hide when open */}
  </div>
);

interface TestimonialSnackProps {
  avatarSrc: string;
  avatarAlt: string;
  quote: React.ReactNode; // Can accept a string or JSX, e.g., with <a> tag
  author: string;
}

const TestimonialSnack: React.FC<TestimonialSnackProps> = ({ avatarSrc, avatarAlt, quote, author }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"> {/* Equivalent to .testimonials-snack */}
      <img
        src={avatarSrc}
        loading="lazy"
        alt={avatarAlt}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0" // Equivalent to .testimonials-snack_avatar
      />
      <div>
        <div className="mb-1"> {/* Equivalent to .margin-bottom margin-6 */}
          <div className="text-gray-700 text-sm leading-relaxed"> {/* Equivalent to .text-color-content-secondary .p13 */}
            {quote}
          </div>
        </div>
        <div className="text-gray-500 text-xs"> {/* Equivalent to .text-color-content-quaternary .p11 */}
          {author}
        </div>
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: React.ReactNode; // Can contain paragraphs, testimonials, etc.
  testimonial?: TestimonialSnackProps; // Optional testimonial to display below the answer
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, testimonial }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 py-6"> {/* Equivalent to .faqs_item */}
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800"> {/* Equivalent to .h18 */}
          {question}
        </h3>
        <div className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200"> {/* Equivalent to .faqs_icon */}
          <PlusMinusIcon isOpen={isOpen} />
        </div>
      </div>
      {/* Equivalent to .faqs_body */}
      <div
        ref={contentRef}
        style={{ height: 0 }} // Initial state for hidden content
        className="overflow-hidden transition-height duration-300 ease-in-out"
      >
        <div className="mt-4"> {/* Equivalent to .margin-top margin-16 */}
          <div className="max-w-xl text-gray-600 text-base leading-relaxed"> {/* Equivalent to .max-width-580 .p15 */}
            {answer}
          </div>
        </div>
        {testimonial && (
          <div className="mt-7"> {/* Equivalent to .margin-top margin-28 */}
            <TestimonialSnack {...testimonial} />
          </div>
        )}
      </div>
    </div>
  );
};

const FAQsSection: React.FC = () => {
  return (
    // Equivalent to .section_faqs
    // The background color matches the screenshot (white background with dark borders/shadows)
    <section className="bg-white py-16 sm:py-24 rounded-bl-3xl rounded-br-3xl shadow-xl overflow-hidden">
      {/* Equivalent to .padding-global */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Equivalent to .container-large */}
        <div className="max-w-7xl mx-auto">
          {/* Equivalent to .faqs_wrap - Grid for side-by-side layout on medium screens */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] gap-x-16 lg:gap-x-24">

            {/* Equivalent to .faqs_content */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-12"> {/* Equivalent to .h44 */}
                FAQs
              </h2>
              {/* Equivalent to .faqs_list */}
              <div className="divide-y divide-gray-200">
                <FAQItem
                  question="What do I need to get started?"
                  answer={
                    <>
                      We set up most restaurants within a week. You’ll have an onboarding specialist to guide you through the process. They will need information about your business to get you up and running.
                      <br /><br />
                      You’ll need to share access to your key accounts (your domain, Google and Yelp profiles). We’ll ask about basics like your EIN and your POS. We use Stripe to help you accept payments online, so you’ll set up an account with them if you don’t already have one.
                      <br /><br />
                      From there, we’ll update your new website with your branding. We’ll also use your menu to set up your online ordering.
                      <br /><br />
                      If you have everything in order, like knowing the login and password to all of your accounts, this can be done very quickly. If that’s the case, you can be up and running in a few days.
                    </>
                  }
                  testimonial={{
                    avatarSrc: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668ef0ea4e4d3fa4c4bc9e28_sandy-sei.jpg",
                    avatarAlt: "Sandy Sei avatar",
                    quote: "“As long as you're ready, they get right into work. It only took us about two days.”",
                    author: "Sandy Sei, Owner of Cyclo Noodles",
                  }}
                />
                <FAQItem
                  question="Do you take over my POS?"
                  answer={
                    <>
                      No, but we can automatically inject orders into many of the major POS systems. If it’s Clover or Square, we integrate directly so all the orders online go straight to your POS. We can also send you a tablet or printer (at no extra fee) if that's what you'd prefer.
                    </>
                  }
                  testimonial={{
                    avatarSrc: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668ef3ba9d8e6dec309e86ce_phillip-hang.jpg",
                    avatarAlt: "Phillip Hang avatar",
                    quote: "“Now that we’ve used Owner for 1 year, I can say confidently that it is the best technology in our restaurant.”",
                    author: "Phillip Hang, Owner of Sushi Me Roll'n",
                  }}
                />
                <FAQItem
                  question="What happens to my current website?"
                  answer={
                    <>
                      During onboarding, we back up and save everything from your current website. That way, if you ever decide to cancel, we'll simply revert it back to your old site. Your domain name is also never at risk, since you'll always retain ownership of it. We just replace the website.
                    </>
                  }
                  testimonial={{
                    avatarSrc: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668ef0eaa800260145aec75e_gia-schultz.jpg",
                    avatarAlt: "Gia Schultz avatar",
                    quote: "“They built me an amazing website. They built the menu out for the online ordering platform. I think it was ready in less than two weeks.”",
                    author: "Gia Schultz, Owner of The Modern Vegan",
                  }}
                />
                <FAQItem
                  question="Do you do social media marketing?"
                  answer={
                    <>
                      No. We've actually found that social media isn't great ROI for most local restaurants. On the other hand, Google search is proven to drive direct sales. This is why we've built Owner.com with Google SEO in mind. If social media is important to you, we believe that independent restaurant owners shouldn't outsource social media to a company, since guests may want to use it to get to know you better on a more personal level.
                    </>
                  }
                  testimonial={{
                    avatarSrc: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668edfb0540480b1942d0d02_6495e23ab02db80f6fcb7edc_oaxaca_intro.webp",
                    avatarAlt: "Yuliana Vasquez avatar",
                    quote: (
                      <>
                        “<a href="http://owner.com/" className="text-blue-600 hover:underline">Owner.com</a> is the secret to our online success. It makes online marketing so easy, and our guests love using our new ordering system and app.”
                      </>
                    ),
                    author: "Yuliana Vasquez, Owner of Samos Oaxaca",
                  }}
                />
                <FAQItem
                  question="How do you get customers to order directly from me?"
                  answer={
                    <>
                      First, we help you educate your customers. We do things like sending you flyers (at no additional cost) to put in your outgoing delivery orders, to show customers the benefits of ordering direct. We’ll also make sure your own website shows up at the top of Google.
                      <br /><br />
                      Second, your online ordering experience with Owner.com is super easy to use, so guests enjoy coming back to your website and app.
                      <br /><br />
                      Third, we'll set up your reward program, so customers earn points when they order direct, and claim points for free food in future orders.
                    </>
                  }
                  testimonial={{
                    avatarSrc: "https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668ef436097d1593a1052390_mo-farraj.jpg",
                    avatarAlt: "Mo Farraj avatar",
                    quote: (
                      <>
                        “For my customers to order through me directly, my online ordering system has to be better than Uber and DoorDash. Our solution was <a href="http://owner.com/" className="text-blue-600 hover:underline">Owner.com</a>.”
                      </>
                    ),
                    author: "Mo Farraj, Owner of Talkin Tacos",
                  }}
                />
              </div>
            </div>

            {/* Sticky Banner - Equivalent to .sticky-banner_wrap and .sticky-banner */}
            {/* Using a fixed position for simplicity, or sticky for more control within a scrolling container */}
            <div className="hidden md:block md:col-span-1 md:self-start md:sticky md:top-20 lg:top-24">
              <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690967918b1187ab936f44d_fernando-izaguerre.jpg"
                    loading="lazy"
                    alt="Fernando Izaguerre"
                    sizes="(max-width: 720px) 100vw, 720px"
                    srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690967918b1187ab936f44d_fernando-izaguerre-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6690967918b1187ab936f44d_fernando-izaguerre.jpg 720w"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-lg font-semibold leading-relaxed mb-4"> {/* Equivalent to .h18 */}
                  "I have a lot of friends that have restaurants. I tell them they have to switch to Owner."
                </p>
                <div className="mt-3"> {/* Equivalent to .margin-top margin-12 */}
                  <div className="text-gray-400 text-xs"> {/* Equivalent to .text-color-content-inverted-tertiary .p12 */}
                    Fernando Izaguerre
                    <br />
                    Owner of Sushi Addicts
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;