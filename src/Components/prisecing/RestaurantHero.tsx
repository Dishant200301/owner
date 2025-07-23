import React from 'react';
import bgImage from '../../assets/restaurant-hero.png'; 

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7" />
  </svg>
);

const RestaurantHero: React.FC = () => {
  return (
    <section className="p-4">
      <div
        className="
          relative 
          flex flex-col lg:flex-row items-center 
          justify-between 
          w-full 
          max-w-7xl mx-auto 
          rounded-3xl 
          overflow-hidden 
          bg-cover bg-center 
          min-h-[500px] 
          lg:min-h-[600px]
        "
        // The background image is set here.
        // Replace 'path/to/your/generated-image.jpg' with the actual image path.
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center w-full h-full p-8 sm:p-16 lg:p-24">
          
          {/* Left Side: Text and Button */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The easiest way to grow <br />
              your restaurant online.
            </h1>
            <button className="
              mt-8 
              inline-flex items-center 
              gap-3 px-8 py-4 
              bg-gray-900 
              text-white 
              font-semibold 
              rounded-full 
              shadow-lg 
              hover:bg-gray-800 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 
              transition-all duration-300
            ">
              Get a free demo
              <ArrowIcon />
            </button>
          </div>

          {/* Right Side: This side is intentionally left empty */}
          {/* The phone is part of the background image as per the original design. */}
          {/* If you generate the phone as a separate image, you would place it here. */}
          <div className="w-full lg:w-1/2">
            {/* This space is reserved for the phone in the background image */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;