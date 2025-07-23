// ./src/components/FeaturesSection.tsx

import React from 'react';

// --- Reusable Icon Components ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
    {children}
  </div>
);

const SparkleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-900"
  >
    <path d="M12 2.5L14.33 9.67L21.5 12L14.33 14.33L12 21.5L9.67 14.33L2.5 12L9.67 9.67L12 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const LinkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-900"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-900"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7V12L15 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Feature Item Component ---
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0">
      <IconWrapper>{icon}</IconWrapper>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 text-base">{description}</p>
    </div>
  </div>
);

// --- Main Features Section Component ---
const FeaturesSection = () => {
  const featuresData = [
    {
      icon: <SparkleIcon />,
      title: 'We build websites that Google loves',
      description: 'AI-optimized websites that boost your SEO and get you more Google traffic.',
    },
    {
      icon: <LinkIcon />,
      title: 'Drive online sales like the big brands',
      description: 'Easy online ordering right on your website. Grow your traffic, grow your orders.',
    },
    {
      icon: <ClockIcon />,
      title: 'Your new website in days, not months',
      description: "Add your brand to our proven design, then you're ready to grow online.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center">
              Get more sales from your<br />restaurant's website
            </h2>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none lg:mt-24">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">

            <div className="relative rounded-2xl shadow-xl">
              <img
                src="/placeholder-image.png"
                alt="Screenshot of an elegant website for 'Italy's authentic taste', an Italian restaurant in California."
                className="aspect-[4/3] w-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                 <p className="text-sm font-light">Ranked best Italian restaurant in CA</p>
                 <h3 className="text-4xl font-bold mt-2 leading-tight">Italy's authentic taste, in California</h3>
                 {/* 
                   THIS IS THE CORRECTED LINE:
                   The > character is replaced with > to prevent a JSX parsing error.
                 */}
                 <button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 px-5 rounded-lg self-start text-sm transition-colors">
                   Order online 
                 </button>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              {featuresData.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;