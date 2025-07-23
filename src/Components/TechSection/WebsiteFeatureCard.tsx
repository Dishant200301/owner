// src/components/WebsiteFeatureCard.tsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Lottie player import

const WebsiteFeatureCard: React.FC = () => {
  return (
    <div className="hp-tech_item cc-light relative rounded-lg overflow-hidden p-8 flex flex-col justify-end bg-[#fcfbf9] aspect-square">
      <img
        src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg"
        alt=""
        sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, 45vw"
        srcSet="
          https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-500.jpg 500w,
          https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-800.jpg 800w,
          https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1)-p-1080.jpg 1080w,
          https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666ef54e3a7b5743b3530fc4_local-restaurants-bg%20(1).jpg 1132w
        "
        className="img-cover absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Lottie Animation Player */}
      {/* Note: The original 'data-autoplay="0"' suggests it's triggered by interaction (e.g., scroll into view).
          For simplicity, this example sets autoplay to true.
          To replicate the original behavior (play on scroll/interaction), you'd use a library like `react-intersection-observer`
          to detect when the component is in view and then control the Lottie player's state. */}
      <div className="hp-tech_lottie absolute inset-0 flex items-center justify-center pointer-events-none">
        <Player
          autoplay={true} // Set to true for continuous play, or false and control with state
          loop={true} // Set to true to loop the animation
          src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fbb3b8dfb4c5619beed38_ranking.lottie"
          className="w-full h-full max-w-xs md:max-w-sm lg:max-w-full" // Adjust size as needed
        >
          {/* Controls can be added here if needed */}
        </Player>
      </div>

      <div className="z-10 relative"> {/* z-index-2 */}
        <p className="text-xl md:text-2xl font-semibold leading-snug"> {/* h18 */}
          Get higher Google rankings with your AI-powered <span className="text-white">restaurant website.</span>
        </p>
      </div>
    </div>
  );
};

export default WebsiteFeatureCard;