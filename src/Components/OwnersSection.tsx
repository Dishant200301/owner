import React from 'react';

// Define the type for an owner's data for type-safety
interface Owner {
  name: string;
  restaurant: string;
  imageSrc: string;
  statistic: string;
  description: string;
  caseStudyLink: string;
}

// Data for the owner cards using the original CDN links
const ownersData: Owner[] = [
  {
    name: 'Rahul Bhatia',
    restaurant: 'Owner of Saffron Indian Kitchen',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e14188f2c09047d065fb0_hero-shot-2.jpg',
    statistic: '+$4,500,000/year',
    description: 'in online sales',
    caseStudyLink: '#',
  },
  {
    name: 'John & Sam',
    restaurant: 'Owners at Metro Pizza',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58cc842d3abde9a87dd4_metro-pizza.jpg',
    statistic: '+$10,000/m',
    description: 'in direct online sales',
    caseStudyLink: '#',
  },
  {
    name: 'Mo and Omar',
    restaurant: 'Owners of Talkin Tacos',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58dec1014216fd440ce0_talkin-taco.jpg',
    statistic: '+$7,000,000/year',
    description: 'In direct online sales',
    caseStudyLink: '#',
  },
  {
    name: 'Fernando Izaguirre',
    restaurant: 'Owner of Sushi Addicts',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e12d52f8a9ca3c46adc29_hero-shot-2.jpg',
    statistic: '+$210,000/year',
    description: 'in online orders',
    caseStudyLink: '#',
  },
  {
    name: 'Hiroyuki Aidichi',
    restaurant: 'Owner of Aburaya Fried Chicken',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59186e8ef21f428818dd_aburaya.jpg',
    statistic: '+$300,000/year',
    description: 'in online sales',
    caseStudyLink: '#',
  },
  {
    name: 'Yuliana Vasquez',
    restaurant: 'Owner of Samos Oaxaca',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59046e8ef21f428812e4_oaxaca.jpg',
    statistic: '+$10,000/m',
    description: 'in direct online sales',
    caseStudyLink: '#',
  },
  {
    name: 'Phillip Hang',
    restaurant: 'Owner of Sushi Me Roll\'n',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58efd50b05c9f54e572d_sushi-me-rolin.jpg',
    statistic: '+$50,000',
    description: 'in direct online sales',
    caseStudyLink: '#',
  },
  {
    name: 'Sandy Sei',
    restaurant: 'Owner of Cyclo Noodles',
    imageSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e590e21e6d6d30d54c866_cyclo.jpg',
    statistic: '+7X',
    description: 'direct online sales growth',
    caseStudyLink: '#',
  },
];

const OwnerCard: React.FC<Owner> = ({ name, restaurant, imageSrc, statistic, description, caseStudyLink }) => (
  <a href={caseStudyLink} className="relative flex flex-col justify-between w-64 md:w-80 h-96 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 mx-4">
    <img src={imageSrc} alt={`Owner ${name} of ${restaurant}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
    <div className="relative z-10 p-5 text-white">
      <p className="font-semibold opacity-90">{name}</p>
      <p className="text-sm opacity-70">{restaurant}</p>
    </div>
    <div className="relative z-10 p-5 text-white">
       <p className="text-4xl font-bold">{statistic}</p>
       <p className="text-sm opacity-90">{description}</p>
    </div>
  </a>
);

// A component to render a single scrolling row of cards
const MarqueeRow: React.FC<{ owners: Owner[] }> = ({ owners }) => (
  <div className="flex">
    {owners.map((owner, index) => (
      <OwnerCard key={`${owner.name}-${index}`} {...owner} />
    ))}
  </div>
);

const TrustedOwnersSection: React.FC = () => {
  // We duplicate the data to create a seamless loop
  const extendedOwnersData = [...ownersData, ...ownersData];
  const extendedReversedData = [...ownersData, ...ownersData].reverse();

  return (
    <>
      {/* We inject the keyframes animation directly into the page */}
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: scroll 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: scroll 60s linear infinite reverse;
        }
      `}</style>
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Trusted by thousands of owners
          </h2>
        </div>
        <div className="space-y-8">
          {/* First Row */}
          <div className="flex">
            <div className="flex animate-marquee">
              <MarqueeRow owners={extendedOwnersData} />
            </div>
          </div>
          {/* Second Row - reversed */}
          {/* <div className="flex">
            <div className="flex animate-marquee">
              <MarqueeRow owners={extendedReversedData} />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default TrustedOwnersSection;