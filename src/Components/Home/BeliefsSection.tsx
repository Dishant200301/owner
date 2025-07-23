import React, { FC } from 'react';
import SignatureSvg from './SignatureSvg'; // Adjust the import path as necessary

interface Belief {
  id: string;
  title: string;
  description: string;
}

const beliefsData: Belief[] = [
  {
    id: 'sales-growth',
    title: 'Sales growth is more important than customization.',
    description:
      'The third party delivery apps and the big national brands have shaped how everyone orders online. We take their best practices and give them to you. This is why we outperform our competitors, who choose customization over sales.',
  },
  {
    id: 'earn-business',
    title: 'We have to earn your business every month.',
    description:
      'Restaurants are hard enough, you don’t need another tech vendor tying you up in a long term contract. Customers vote with their feet if they don’t like your restaurant. We want you to be able to leave easily if we aren’t adding value and helping you grow your business.',
  },
  {
    id: 'own-relationships',
    title: 'Restaurants should own their customer relationships.',
    description:
      'One of the cruelest byproducts of tech “innovation” is how you are separated from your customers. If you ever decide to leave Owner, you get to bring your customers with you.',
  },
];

const BeliefsSection: FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-stone-50"> {/* Added bg-stone-50 for background color */}
      <div className="px-4 md:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-lg"> {/* Added shadow-lg for subtle shadow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column: Heading and Adam Guild Info */}
            <div className="flex flex-col">
              <div className="mb-8"> {/* margin-bottom margin-24 */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Three beliefs that guide our company
                </h2>
              </div>
              <div className="text-gray-500 mb-8 lg:mb-0">
                <p className="text-base">Understand the principles that guide our decisions.</p>
              </div>

              {/* Adam Guild Visual */}
              <div className="mt-auto pt-8"> {/* Push to bottom and add top padding */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0"> {/* Adjusted sizes and added mx-auto for mobile centering */}
                  <div className="hp-beliefs_visual rounded-2xl overflow-hidden h-full">
                    <img
                      src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f0afcb8d61ebc96e95d6c_adam-guild.jpg"
                      loading="lazy"
                      alt="Adam Guild"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="hp-beliefs_signature absolute top-0 left-0 w-full h-full"
                    style={{
                      // Position signature over face, might need fine-tuning
                      top: '10%', // Adjust as needed
                      left: '20%', // Adjust as needed
                      width: '80%', // Adjust as needed
                      height: '80%', // Adjust as needed
                    }}
                  >
                    <SignatureSvg />
                  </div>
                </div>
                <p className="text-sm mt-4 text-center lg:text-left">
                  Adam Guild
                  <br />
                  Co-Founder and CEO at Owner
                </p>
              </div>
            </div>

            {/* Right Column: Beliefs List */}
            <ul className="space-y-8 divide-y divide-gray-200"> {/* Added space-y and divide for borders */}
              {beliefsData.map((belief, index) => (
                <li
                  key={belief.id}
                  className={`py-8 ${index === 0 ? 'pt-0' : ''} ${index === beliefsData.length - 1 ? 'pb-0 border-b-0' : 'border-b border-gray-200'}`}
                >
                  <p className="text-xl font-semibold mb-2">{belief.title}</p>
                  <div className="text-gray-500">
                    <p className="text-base">{belief.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;