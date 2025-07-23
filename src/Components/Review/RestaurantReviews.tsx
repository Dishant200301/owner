import React from 'react';
import { motion } from 'framer-motion';

// --- TYPE DEFINITIONS ---
interface Review {
  id: number;
  name: string;
  avatarUrl: string;
  text: string;
}

// --- SVG ICON COMPONENTS ---
const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.73915 2.34164C6.97015 1.63071 7.08565 1.27525 7.25912 1.17988C7.40912 1.09742 7.59088 1.09742 7.74088 1.17988C7.91435 1.27525 8.02985 1.63071 8.26085 2.34164L9.00424 4.62959C9.0688 4.82826 9.10107 4.92759 9.16187 5.00108C9.21555 5.06598 9.28476 5.11626 9.36306 5.14726C9.45175 5.18237 9.55619 5.18237 9.76509 5.18237H12.1708C12.9183 5.18237 13.292 5.18237 13.4364 5.31789C13.5611 5.43506 13.6173 5.60792 13.5852 5.77606C13.5481 5.97052 13.2458 6.19021 12.641 6.62959L10.6948 8.04361C10.5258 8.1664 10.4413 8.22779 10.3902 8.30832C10.345 8.37943 10.3186 8.46079 10.3133 8.54484C10.3073 8.64003 10.3396 8.73937 10.4041 8.93804L11.1475 11.226C11.3785 11.9369 11.494 12.2924 11.4097 12.4715C11.3369 12.6264 11.1898 12.7332 11.02 12.7547C10.8236 12.7795 10.5212 12.5598 9.91647 12.1204L7.97023 10.7064C7.80123 10.5836 7.71673 10.5222 7.62434 10.4985C7.54277 10.4775 7.45723 10.4775 7.37566 10.4985C7.28327 10.5222 7.19877 10.5836 7.02977 10.7064L5.08353 12.1204C4.47878 12.5598 4.1764 12.7795 3.98 12.7547C3.81018 12.7332 3.66313 12.6264 3.59025 12.4715C3.50596 12.2924 3.62146 11.9369 3.85246 11.226L4.59585 8.93804C4.66041 8.73937 4.69268 8.64003 4.68669 8.54484C4.68141 8.46079 4.65497 8.37943 4.60984 8.30832C4.55874 8.22779 4.47424 8.1664 4.30524 8.04361L2.359 6.62959C1.75424 6.19021 1.45187 5.97052 1.41477 5.77606C1.3827 5.60792 1.43887 5.43506 1.56364 5.31789C1.70795 5.18237 2.08171 5.18237 2.82922 5.18237H5.23491C5.44381 5.18237 5.54825 5.18237 5.63694 5.14726C5.71524 5.11626 5.78445 5.06598 5.83813 5.00108C5.89893 4.92759 5.9312 4.82826 5.99576 4.62959L6.73915 2.34164Z" />
  </svg>
);

const MarketingPlatformIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="white"></rect>
        <path d="M5 15.2389H12.605H17.2288V10.6658L5 15.2389Z" fill="#FF9D28"></path>
        <path d="M17.2266 10.6656V26.8375L22.9978 8.5L17.2266 10.6656Z" fill="#68C5ED"></path>
        <path d="M17.2253 15.2444H12.6016L17.2253 26.8375V15.2444Z" fill="#044D80"></path>
        <path d="M5 15.2388L13.7919 18.2144L12.605 15.2388H5Z" fill="#E54747"></path>
    </svg>
);

const G2Icon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="white"></circle>
        <path d="M16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM16.1627 6.85733C16.7627 6.85733 17.3627 6.916 17.952 7.03333L16.1627 10.7747C13.2827 10.7733 10.9373 13.12 10.9373 16C10.9373 18.88 13.284 21.2267 16.164 21.2267C17.4133 21.2267 18.6227 20.776 19.568 19.9587L21.5453 23.388C20.182 24.3812 18.5703 24.9779 16.8888 25.1119C15.2073 25.2459 13.5216 24.912 12.0181 24.1472C10.5146 23.3824 9.25205 22.2165 8.37016 20.7787C7.48827 19.3407 7.02144 17.6868 7.02133 16C7.02133 13.5756 7.98444 11.2504 9.69877 9.53611C11.4131 7.82177 13.7383 6.85733 16.1627 6.85733ZM20.8267 7.51067C20.8383 7.51055 20.8497 7.51055 20.8613 7.51067C21.4307 7.51067 21.9173 7.66133 22.3293 7.964C22.7427 8.26933 22.9507 8.692 22.9507 9.22533C22.9507 10.0773 22.4707 10.5987 21.5707 11.06L21.068 11.3147C20.5307 11.5867 20.2653 11.828 20.192 12.256H22.9253V13.3893H18.7907V13.1973C18.7907 12.496 18.928 11.9173 19.2093 11.456C19.4907 10.996 19.9773 10.5893 20.6787 10.2333L21.0013 10.0773C21.5707 9.78933 21.7187 9.54267 21.7187 9.244C21.7187 8.88933 21.4147 8.63333 20.9187 8.63333C20.332 8.63333 19.888 8.93733 19.58 9.55867L18.7907 8.76533C18.964 8.39333 19.2413 8.096 19.616 7.86533C19.9779 7.63493 20.3977 7.51195 20.8267 7.51067ZM18.0347 14.6947H22.56L24.8227 18.6107L22.56 22.5307L20.2973 18.6107H15.7733L18.0347 14.6947Z" fill="#FF492C"></path>
    </svg>
);

const ArrowRightIcon: React.FC = () => (
    <svg className="w-2 h-3" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5L5 6L1 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
    </svg>
);


// --- MOCK DATA ---
const reviewsData: Review[] = [
  {
    id: 1,
    name: 'Steven F',
    avatarUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e9284f98fb67f811248df_1_1.jpeg',
    text: 'The branded website and Online ordering platform is perfect for our guest and growing my business.',
  },
  {
    id: 2,
    name: 'Mohammad A',
    avatarUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e930e2e9b2fdeeb0b7d3f_1_4.jpeg',
    text: 'With Owner.com I keep all money from sales and only pay minimal fee on delivery cost.',
  },
  {
    id: 3,
    name: 'Jake A',
    avatarUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e93f0f98fb67f81131322_1_7.jpeg',
    text: 'Owner.com has almost everything you need to run your restaurant online. An awesome partner to have for restaurants.',
  },
  {
    id: 4,
    name: 'Tara B',
    avatarUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e92ad5b46e544921e6560_1_2.jpeg',
    text: 'Owner.com has been an absolute lifesaver when it comes to minimizing third-party service fees and driving direct store sales.',
  },
  {
    id: 5,
    name: 'Daryl E',
    avatarUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e932f3f679ef5a1bdf5f4_1-5.jpeg',
    text: "My restaurants operate very late, yet Owner Customer's Support has ALWAYS been active and able to help me with any concerns!",
  },
  {
    id: 6,
    name: 'Michael B',
    avatarUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e940d4bbd0d98bed8fc77_1_8.jpeg',
    text: 'They are helping us take back more control of our business and compete with larger companies because the technology is great!',
  },
];

// --- REVIEW CARD COMPONENT ---
const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white p-6 rounded-2xl shadow-sm flex flex-col h-full"
    >
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5" />
        ))}
      </div>
      <p className="text-gray-700 text-base flex-grow mb-4">{review.text}</p>
      <div className="flex items-center mt-auto">
        <img src={review.avatarUrl} alt={review.name} className="w-10 h-10 rounded-full mr-4" />
        <p className="text-gray-900 font-medium">{review.name}</p>
      </div>
    </motion.div>
  );
};


// --- MAIN COMPONENT ---
const RestaurantReviews: React.FC = () => {
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="bg-[#f8f5f1] py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            See why we're rated #1 <br /> in restaurant tech
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="bg-gray-200/70 rounded-full py-2 px-4 flex items-center gap-3">
              <MarketingPlatformIcon />
              <p className="text-sm font-medium text-gray-700">Rated #1 Restaurant Marketing Software</p>
            </div>
            <div className="bg-gray-200/70 rounded-full py-2 px-4 flex items-center gap-3">
              <G2Icon />
              <p className="text-sm font-medium text-gray-700">Leader Position Winter 2025</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-blue-600 font-medium">
            <a href="/" className="hover:underline">Over 250 5-star reviews on G2 and Capterra</a>
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
            <motion.a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                See more reviews
                <ArrowRightIcon />
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default RestaurantReviews;