// src/components/TestimonialsSection.tsx

import React, { useState } from 'react';

// --- TYPE DEFINITIONS ---
interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  id: number;
  imageUrl: string;
  headline: React.ReactNode;
  stats: Stat[];
  ownerName: string;
  restaurantName: string;
  storyUrl: string;
  videoUrl: string; // Added to hold the embeddable video URL
}

// --- SVG ICON COMPONENT ---
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-gray-800"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);


// --- MOCK DATA ---
// Using placeholder images and YouTube videos. Replace with your actual URLs.
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58cc842d3abde9a87dd4_metro-pizza.jpg',
    headline: "How Metro Pizza increased direct online sales by $10,000/m by swapping ChowNow for Owner",
    stats: [
      { value: "+$112,000", label: "Sales" },
      { value: "+54%", label: "Growth" },
      { value: "+$29,000", label: "Savings" },
    ],
    ownerName: "John & Sam",
    restaurantName: "Owners at Metro Pizza",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/SZEflIVnhH8', // Example Video URL
  },
  {
    id: 2,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58dec1014216fd440ce0_talkin-taco.jpg',
    headline: "How Talkin Tacos increased direct online sales to $120,000/m by using Owner.com",
    stats: [
      { value: "+$7,000,000", label: "Sales" },
      { value: "+970%", label: "Growth" },
      { value: "+$435,000", label: "Savings" },
    ],
    ownerName: "Mo and Omar",
    restaurantName: "Owners of Talkin Tacos",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/A63U_3n4_cM', // Example Video URL
  },
  {
    id: 3,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e14188f2c09047d065fb0_hero-shot-2.jpg',
    headline: "How Saffron grew direct online sales by $171,400/month after switching to Owner.com",
    stats: [
        { value: "+$4,500,000", label: "Sales" },
        { value: "4", label: "Locations" },
        { value: "+$600,000", label: "Savings on fees" },
    ],
    ownerName: "Rahul Bhatia",
    restaurantName: "Owner of Saffron Indian Kitchen",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 4,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58efd50b05c9f54e572d_sushi-me-rolin.jpg',
    headline: "How Sushi Me Roll'n’ increased direct online sales by $50,000 using Owner.com",
    stats: [
        { value: "+$50,000", label: "Sales" },
        { value: "47%", label: "Growth" },
        { value: "+54%", label: "Savings" },
    ],
    ownerName: "Phillip Hang",
    restaurantName: "Owner of Sushi Me Roll'n",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 5,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/673b3eea9f5ea46db334110b_gyro-main-2.jpg',
    headline: "How Gyro Concept grew to $194,000 in online sales per year with Owner.com",
    stats: [
        { value: "+$194,000", label: "Yearly online sales" },
        { value: "+100%", label: "Increase in direct orders" },
        { value: "25%", label: "Saved on third-party fees" },
    ],
    ownerName: "Nikitas Bouras",
    restaurantName: "Owner of Gyro Concept",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 6,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58fa9714cd24bc880bcb_doo-dah-dinner.jpg',
    headline: "How Doo-Dah Diner increased direct online sales by $72,000 using Owner.com",
    stats: [
        { value: "+$72,000", label: "Sales" },
        { value: "+54%", label: "Growth" },
        { value: "+$19,000", label: "Savings" },
    ],
    ownerName: "Timirie Shibley",
    restaurantName: "Owner of Doo-Dah Diner",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 7,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67c2468d224cef63e84e8415_Screenshot%202025-02-28%20at%206.27.53%E2%80%AFPM.png',
    headline: "How HillCrust Pizza saved thousands and ranked higher on Google with Owner.com",
    stats: [
        { value: "20%–25% increase", label: "in monthly online sales" },
        { value: "Saved thousands", label: "in fees after switching" },
        { value: "$9.5k in online orders", label: "in the first month" },
    ],
    ownerName: "Jay Saadat",
    restaurantName: "Co-owner of HillCrust Pizza",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 8,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59046e8ef21f428812e4_oaxaca.jpg',
    headline: "How Samos Oaxaca increased direct online sales to $10,000/m by using Owner.com",
    stats: [
        { value: "+$150,000", label: "Sales" },
        { value: "+377%", label: "Growth" },
        { value: "+$70,000", label: "Savings" },
    ],
    ownerName: "Yuliana Vasquez",
    restaurantName: "Owner of Samos Oaxaca",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 9,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e12d52f8a9ca3c46adc29_hero-shot-2.jpg',
    headline: "How Sushi Addicts grew online orders to $210,000 per year with Owner",
    stats: [
        { value: "+$17,000", label: "Monthly online sales" },
        { value: "+75%", label: "Growth in online orders" },
        { value: "+$2,000", label: "In monthly savings" },
    ],
    ownerName: "Fernando Izaguirre",
    restaurantName: "Owner of Sushi Addicts",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 10,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67c24cd9c675df3d7d4c7594_Screenshot%202025-02-28%20at%206.54.58%E2%80%AFPM.png',
    headline: "How San Diego Kabob Shack grew online sales by 60% after switching to Owner.com",
    stats: [
        { value: "+$9k in new sales", label: "the first month" },
        { value: "2x online orders", label: "in second month" },
        { value: "60% growth", label: "year-over-year" },
    ],
    ownerName: "Said Hofiani",
    restaurantName: "Owner of San Diego Kabob Shack",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 11,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e590e21e6d6d30d54c866_cyclo.jpg',
    headline: "How Cyclo Noodles grew direct online sales by 7X by switching to Owner.com",
    stats: [
        { value: "+$104,500", label: "Sales" },
        { value: "7X", label: "Growth" },
        { value: "+$31,000", label: "Savings" },
    ],
    ownerName: "Sandy Sei",
    restaurantName: "Owner of Cyclo Noodles",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 12,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67d72e5d4a794ae7d2c0d9ce_Screenshot%202025-03-16%20at%209.01.25%E2%80%AFPM.png',
    headline: "How Goi Cuon grew online sales from $1.5K to $20K/month with Owner",
    stats: [
        { value: "$20,000/month", label: "in direct online orders" },
        { value: "1,233% growth", label: "in sales after Owner" },
        { value: "Thousands saved", label: "in third-party fees" },
    ],
    ownerName: "Vu Linh",
    restaurantName: "Owner of Goi Cuon",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 13,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59186e8ef21f428818dd_aburaya.jpg',
    headline: "How Aburaya grew online sales by $25,000/m by switching from third-party apps",
    stats: [
        { value: "+$25,000/m", label: "Online sales" },
        { value: "+160%", label: "Growth" },
        { value: "+$100,000", label: "Saved in delivery fees" },
    ],
    ownerName: "Hiroyuki Aidichi",
    restaurantName: "Owner of Aburaya Fried Chicken",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },
  {
    id: 14,
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6822d4d8b2afafaf7a907dff_sarkis-pizza-c-min.jpg',
    headline: "How Township Line Pizza grew online sales to $300,000 per year with Owner.com",
    stats: [
        { value: "+$3,00,000", label: "Per year in online sales" },
        { value: "Hundreds", label: "Monthly orders from SEO" },
        { value: "+$60,000", label: "Savings on fees" },
    ],
    ownerName: "Sarkis Panossian",
    restaurantName: "Owner of Township Line Pizza",
    storyUrl: "#",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example Video URL
  },

  
 
];

// --- REUSABLE TESTIMONIAL CARD COMPONENT ---
interface TestimonialCardProps {
  testimonial: Testimonial;
  isPlaying: boolean;
  onPlayClick: (id: number) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isPlaying, onPlayClick }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-lg lg:flex-row lg:p-8">
      {/* Left Side: Video Thumbnail or Player */}
      <div className="relative aspect-[3/4] w-full flex-shrink-0 overflow-hidden rounded-2xl bg-gray-200 lg:w-[300px]">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
src={`${testimonial.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
title={`Video for ${testimonial.restaurantName}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        ) : (
          <>
            <img src={testimonial.imageUrl} alt={`Video thumbnail for ${testimonial.restaurantName}`}
 className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
              <span className="font-semibold text-white">Play the video</span>
              <button
                onClick={() => onPlayClick(testimonial.id)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 transition hover:bg-white"
                aria-label={`Play video for ${testimonial.restaurantName}`}

              >
                <PlayIcon />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right Side: Content */}
      <div className="flex flex-1 flex-col pt-6 lg:ml-8 lg:pt-0">
        <h3 className="text-2xl font-bold leading-tight text-gray-900 lg:text-3xl">
          {testimonial.headline}
        </h3>
        
        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-4">
          {testimonial.stats.map((stat, index) => (
            <div key={index}>
              <p className="text-xl font-bold text-gray-900 lg:text-2xl">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Spacer to push content below to the bottom */}
        <div className="flex-grow"></div>
        
        {/* Divider */}
        <hr className="my-6 lg:my-8" />
        
        {/* Attribution */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{testimonial.ownerName}</p>
            <p className="text-sm text-gray-600">{testimonial.restaurantName}</p>
          </div>
          <a href={testimonial.storyUrl} className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
            Read full story
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};


// --- MAIN SECTION COMPONENT ---
const TestimonialsSection: React.FC = () => {
  // State to track the ID of the currently playing video. null means no video is playing.
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  // Handler to set the active video ID.
  const handlePlayClick = (id: number) => {
    setActiveVideoId(id);
  };

  return (
    <div className="bg-zinc-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isPlaying={activeVideoId === testimonial.id}
              onPlayClick={handlePlayClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;