import React, { useState, useEffect, useRef } from 'react';
import { IconLoadingPin, IconTagMarker } from '../common/SvgIcons';

export const GraderPhoneDisplay: React.FC = () => {
  const [showLoadingPin, setShowLoadingPin] = useState(false);
  const [showTag1, setShowTag1] = useState(false);
  const [showTag2, setShowTag2] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to trigger animations when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation sequence
            const timer1 = setTimeout(() => {
              setShowLoadingPin(true);
            }, 500); // Show loading pin after 0.5s

            const timer2 = setTimeout(() => {
              setShowLoadingPin(false);
              setShowTag1(true);
            }, 2500); // After some time, hide pin, show first tag

            const timer3 = setTimeout(() => {
              setShowTag2(true);
            }, 3500); // After more time, show second tag

            // Clean up timers if component unmounts or leaves view
            return () => {
              clearTimeout(timer1);
              clearTimeout(timer2);
              clearTimeout(timer3);
              setShowLoadingPin(false); // Reset on unmount/exit
              setShowTag1(false);
              setShowTag2(false);
            };
          } else {
            // Reset state if component is no longer intersecting
            setShowLoadingPin(false);
            setShowTag1(false);
            setShowTag2(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

     const currentPhoneRef = phoneRef.current;
    if (currentPhoneRef) {
      observer.observe(currentPhoneRef);
    }

    return () => {
      if (currentPhoneRef) {
        observer.unobserve(currentPhoneRef);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      ref={phoneRef}
      className="relative w-[300px] h-[600px] mx-auto md:w-[400px] md:h-[800px] lg:w-[450px] lg:h-[900px] z-10" // hp-grader_phone-box, relative for tags
    >
      {/* Phone Mockup (Main image frame) */}
      <img
        src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6809881c139b1b218ef1ed59_phone-ui.avif"
        loading="lazy"
        alt="Phone UI Mockup"
        className="absolute inset-0 w-full h-full object-contain z-20" // hp-grader_phone-mock
      />

      {/* Phone Screen Feed (The dynamic content inside the phone) */}
      <div className="absolute top-[8%] left-[10%] w-[80%] h-[80%] overflow-hidden rounded-[2.5rem] bg-gray-100 z-10"> {/* hp-grader_phone-screen, adjusted for actual phone screen size */}
        <img
          src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680989d5f4894fb9796a6ae3_6efc782c4a1bad4412843a05cd6b6192_phone-grader-ui.avif"
          loading="lazy"
          alt="Phone Grader UI Feed"
          className="w-full h-full object-cover" // hp-grader_phone-feed
        />
        {/* Loading Pin Overlay */}
        {showLoadingPin && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30 animate-fade-in"> {/* hp-grader_phone-load */}
            <IconLoadingPin className="w-20 h-20 animate-pulse-pin" /> {/* hp-grader_phone-load-icon */}
          </div>
        )}
      </div>

      {/* Phone Status Bar (on top of mockup) */}
      <img
        src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680989a6a598aea4688dc28b_phone-status.svg"
        loading="lazy"
        alt="Phone Status Bar"
        className="absolute top-[2%] left-[18%] w-[64%] object-contain z-30" // hp-grader_phone-status, adjust positioning
      />

      {/* Phone Shadow (behind mockup) */}
      <img
        src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680987a35774edc612fc8db5_phone-shadow-back.avif"
        loading="lazy"
        alt="Phone Shadow"
        className="absolute inset-0 w-full h-full object-contain translate-x-12 translate-y-12 blur-lg opacity-70 z-0" // hp-grader_phone-shadow, approximated blur and offset
      />

      {/* Tags - positioning is crucial and approximated */}
      {showTag1 && (
        <div className="absolute top-[25%] -left-[25%] lg:-left-[15%] animate-slide-fade-in-1"> {/* hp-grader_phone-tag-box cc-1 */}
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-md whitespace-nowrap"> {/* hp-grader_phone-tag */}
            <IconTagMarker className="text-owner-orange" /> {/* icon_18 */}
            <p className="text-sm font-medium">See who's beating you on Google</p> {/* h14 */}
          </div>
        </div>
      )}
      {showTag2 && (
        <div className="absolute bottom-[25%] -right-[25%] lg:-right-[15%] animate-slide-fade-in-2"> {/* hp-grader_phone-tag-box cc-2 */}
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-md whitespace-nowrap"> {/* hp-grader_phone-tag cc-2 */}
            <IconTagMarker className="text-owner-orange" /> {/* icon_18 */}
            <p className="text-sm font-medium">See exactly what to fix</p> {/* h14 */}
          </div>
        </div>
      )}
    </div>
  );
};