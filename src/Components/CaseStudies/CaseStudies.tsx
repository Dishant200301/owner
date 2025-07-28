// src/components/TestimonialsSection.tsx

import React, { useState } from "react";

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
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58cc842d3abde9a87dd4_metro-pizza.jpg",
    headline:
      "How Metro Pizza increased direct online sales by $10,000/m by swapping ChowNow for Owner",
    stats: [
      { value: "+$112,000", label: "Sales" },
      { value: "+54%", label: "Growth" },
      { value: "+$29,000", label: "Savings" },
    ],
    ownerName: "John & Sam",
    restaurantName: "Owners at Metro Pizza",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/SZEflIVnhH8", // Example Video URL
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58dec1014216fd440ce0_talkin-taco.jpg",
    headline:
      "How Talkin Tacos increased direct online sales to $120,000/m by using Owner.com",
    stats: [
      { value: "+$7,000,000", label: "Sales" },
      { value: "+970%", label: "Growth" },
      { value: "+$435,000", label: "Savings" },
    ],
    ownerName: "Mo and Omar",
    restaurantName: "Owners of Talkin Tacos",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/A63U_3n4_cM", // Example Video URL
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e14188f2c09047d065fb0_hero-shot-2.jpg",
    headline:
      "How Saffron grew direct online sales by $171,400/month after switching to Owner.com",
    stats: [
      { value: "+$4,500,000", label: "Sales" },
      { value: "4", label: "Locations" },
      { value: "+$600,000", label: "Savings on fees" },
    ],
    ownerName: "Rahul Bhatia",
    restaurantName: "Owner of Saffron Indian Kitchen",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58efd50b05c9f54e572d_sushi-me-rolin.jpg",
    headline:
      "How Sushi Me Roll'n’ increased direct online sales by $50,000 using Owner.com",
    stats: [
      { value: "+$50,000", label: "Sales" },
      { value: "47%", label: "Growth" },
      { value: "+54%", label: "Savings" },
    ],
    ownerName: "Phillip Hang",
    restaurantName: "Owner of Sushi Me Roll'n",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/673b3eea9f5ea46db334110b_gyro-main-2.jpg",
    headline:
      "How Gyro Concept grew to $194,000 in online sales per year with Owner.com",
    stats: [
      { value: "+$194,000", label: "Yearly online sales" },
      { value: "+100%", label: "Increase in direct orders" },
      { value: "25%", label: "Saved on third-party fees" },
    ],
    ownerName: "Nikitas Bouras",
    restaurantName: "Owner of Gyro Concept",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58fa9714cd24bc880bcb_doo-dah-dinner.jpg",
    headline:
      "How Doo-Dah Diner increased direct online sales by $72,000 using Owner.com",
    stats: [
      { value: "+$72,000", label: "Sales" },
      { value: "+54%", label: "Growth" },
      { value: "+$19,000", label: "Savings" },
    ],
    ownerName: "Timirie Shibley",
    restaurantName: "Owner of Doo-Dah Diner",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67c2468d224cef63e84e8415_Screenshot%202025-02-28%20at%206.27.53%E2%80%AFPM.png",
    headline:
      "How HillCrust Pizza saved thousands and ranked higher on Google with Owner.com",
    stats: [
      { value: "20%–25% increase", label: "in monthly online sales" },
      { value: "Saved thousands", label: "in fees after switching" },
      { value: "$9.5k in online orders", label: "in the first month" },
    ],
    ownerName: "Jay Saadat",
    restaurantName: "Co-owner of HillCrust Pizza",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59046e8ef21f428812e4_oaxaca.jpg",
    headline:
      "How Samos Oaxaca increased direct online sales to $10,000/m by using Owner.com",
    stats: [
      { value: "+$150,000", label: "Sales" },
      { value: "+377%", label: "Growth" },
      { value: "+$70,000", label: "Savings" },
    ],
    ownerName: "Yuliana Vasquez",
    restaurantName: "Owner of Samos Oaxaca",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e12d52f8a9ca3c46adc29_hero-shot-2.jpg",
    headline:
      "How Sushi Addicts grew online orders to $210,000 per year with Owner",
    stats: [
      { value: "+$17,000", label: "Monthly online sales" },
      { value: "+75%", label: "Growth in online orders" },
      { value: "+$2,000", label: "In monthly savings" },
    ],
    ownerName: "Fernando Izaguirre",
    restaurantName: "Owner of Sushi Addicts",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 10,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67c24cd9c675df3d7d4c7594_Screenshot%202025-02-28%20at%206.54.58%E2%80%AFPM.png",
    headline:
      "How San Diego Kabob Shack grew online sales by 60% after switching to Owner.com",
    stats: [
      { value: "+$9k in new sales", label: "the first month" },
      { value: "2x online orders", label: "in second month" },
      { value: "60% growth", label: "year-over-year" },
    ],
    ownerName: "Said Hofiani",
    restaurantName: "Owner of San Diego Kabob Shack",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 11,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e590e21e6d6d30d54c866_cyclo.jpg",
    headline:
      "How Cyclo Noodles grew direct online sales by 7X by switching to Owner.com",
    stats: [
      { value: "+$104,500", label: "Sales" },
      { value: "7X", label: "Growth" },
      { value: "+$31,000", label: "Savings" },
    ],
    ownerName: "Sandy Sei",
    restaurantName: "Owner of Cyclo Noodles",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 12,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67d72e5d4a794ae7d2c0d9ce_Screenshot%202025-03-16%20at%209.01.25%E2%80%AFPM.png",
    headline:
      "How Goi Cuon grew online sales from $1.5K to $20K/month with Owner",
    stats: [
      { value: "$20,000/month", label: "in direct online orders" },
      { value: "1,233% growth", label: "in sales after Owner" },
      { value: "Thousands saved", label: "in third-party fees" },
    ],
    ownerName: "Vu Linh",
    restaurantName: "Owner of Goi Cuon",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 13,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59186e8ef21f428818dd_aburaya.jpg",
    headline:
      "How Aburaya grew online sales by $25,000/m by switching from third-party apps",
    stats: [
      { value: "+$25,000/m", label: "Online sales" },
      { value: "+160%", label: "Growth" },
      { value: "+$100,000", label: "Saved in delivery fees" },
    ],
    ownerName: "Hiroyuki Aidichi",
    restaurantName: "Owner of Aburaya Fried Chicken",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
  {
    id: 14,
    imageUrl:
      "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6822d4d8b2afafaf7a907dff_sarkis-pizza-c-min.jpg",
    headline:
      "How Township Line Pizza grew online sales to $300,000 per year with Owner.com",
    stats: [
      { value: "+$3,00,000", label: "Per year in online sales" },
      { value: "Hundreds", label: "Monthly orders from SEO" },
      { value: "+$60,000", label: "Savings on fees" },
    ],
    ownerName: "Sarkis Panossian",
    restaurantName: "Owner of Township Line Pizza",
    storyUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video URL
  },
];

// --- REUSABLE TESTIMONIAL CARD COMPONENT ---
interface TestimonialCardProps {
  testimonial: Testimonial;
  isPlaying: boolean;
  onPlayClick: (id: number) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isPlaying,
  onPlayClick,
}) => {
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
            <img
              src={testimonial.imageUrl}
              alt={`Video thumbnail for ${testimonial.restaurantName}`}
              className="h-full w-full object-cover"
            />
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
              <p className="text-xl font-bold text-gray-900 lg:text-2xl">
                {stat.value}
              </p>
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
            <p className="font-semibold text-gray-900">
              {testimonial.ownerName}
            </p>
            <p className="text-sm text-gray-600">
              {testimonial.restaurantName}
            </p>
          </div>
          <a
            href={testimonial.storyUrl}
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Read full story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
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
    <>
      <div className="cs-index_head" style={{ marginTop: "250px" }}>
     
        <div className="margin-bottom margin-16">
          <h1 className="h56">Owner is trusted by thousands of restaurants</h1>
        </div>
        <div className="margin-bottom margin-24">
          <div className="max-width-470">
            <div className="text-color-content-secondary">
              <p className="h15">
                Learn more about how restaurant owners have used our platform to
                maximize their success online. See the real numbers from real
                restaurants — before and after using Owner.
              </p>
            </div>
          </div>
        </div>
        <ul className="hp-reviews_platforms">
          <li className="platforms_item">
            <div className="icon_32 w-embed">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={32} height={32} rx={16} fill="white" />
                <g clipPath="url(#clip0_3003_13801)">
                  <path
                    d="M5 15.2389H12.605H17.2288V10.6658L5 15.2389Z"
                    fill="#FF9D28"
                  />
                  <path
                    d="M17.2266 10.6656V26.8375L22.9978 8.5L17.2266 10.6656Z"
                    fill="#68C5ED"
                  />
                  <path
                    d="M17.2253 15.2444H12.6016L17.2253 26.8375V15.2444Z"
                    fill="#044D80"
                  />
                  <path
                    d="M5 15.2388L13.7919 18.2144L12.605 15.2388H5Z"
                    fill="#E54747"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3003_13801">
                    <rect
                      width={18}
                      height="18.3375"
                      fill="white"
                      transform="translate(5 8.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="p12">Rated #1 Restaurant Marketing Software</p>
          </li>
          <li className="platforms_item">
            <div className="icon_32 w-embed">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3003_13808)">
                  <circle cx={16} cy={16} r={16} fill="white" />
                  <path
                    d="M16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM16.1627 6.85733C16.7627 6.85733 17.3627 6.916 17.952 7.03333L16.1627 10.7747C13.2827 10.7733 10.9373 13.12 10.9373 16C10.9373 18.88 13.284 21.2267 16.164 21.2267C17.4133 21.2267 18.6227 20.776 19.568 19.9587L21.5453 23.388C20.182 24.3812 18.5703 24.9779 16.8888 25.1119C15.2073 25.2459 13.5216 24.912 12.0181 24.1472C10.5146 23.3824 9.25205 22.2165 8.37016 20.7787C7.48827 19.3407 7.02144 17.6868 7.02133 16C7.02133 13.5756 7.98444 11.2504 9.69877 9.53611C11.4131 7.82177 13.7383 6.85733 16.1627 6.85733ZM20.8267 7.51067C20.8383 7.51055 20.8497 7.51055 20.8613 7.51067C21.4307 7.51067 21.9173 7.66133 22.3293 7.964C22.7427 8.26933 22.9507 8.692 22.9507 9.22533C22.9507 10.0773 22.4707 10.5987 21.5707 11.06L21.068 11.3147C20.5307 11.5867 20.2653 11.828 20.192 12.256H22.9253V13.3893H18.7907V13.1973C18.7907 12.496 18.928 11.9173 19.2093 11.456C19.4907 10.996 19.9773 10.5893 20.6787 10.2333L21.0013 10.0773C21.5707 9.78933 21.7187 9.54267 21.7187 9.244C21.7187 8.88933 21.4147 8.63333 20.9187 8.63333C20.332 8.63333 19.888 8.93733 19.58 9.55867L18.7907 8.76533C18.964 8.39333 19.2413 8.096 19.616 7.86533C19.9779 7.63493 20.3977 7.51195 20.8267 7.51067ZM18.0347 14.6947H22.56L24.8227 18.6107L22.56 22.5307L20.2973 18.6107H15.7733L18.0347 14.6947Z"
                    fill="#FF492C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3003_13808">
                    <rect width={32} height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="p12">Leader&nbsp;Position Winter 2025</p>
          </li>
        </ul>
        <div className="margin-top margin-24">
          <div className="text-color-brand">
            <p className="p11 text-weight-medium">
              Over 250 5-star reviews on G2 and Capterra
            </p>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default TestimonialsSection;
