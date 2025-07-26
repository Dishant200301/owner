// ./src/components/TestimonialsCarousel.tsx

import React, { useState, useEffect, useCallback, useRef } from 'react';
import yulianaImage from '../../assets/yuliana-vasquez.jpg';
import saidImage from '../../assets/said-hofiani.jpg';
import rahulImage from '../../assets/rahul-bhatia.jpg';
import JayImage from '../../assets/jay-saadat.png';
import hiroyukiImage from '../../assets/hiroyuki-aidi.png';
import { Link } from 'react-router-dom';

// --- Data Structure Interfaces ---
interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  id: number;
  imageSrc: string;
  name: string;
  title: string;
  quote: string;
  stats: Stat[];
  storyLink: string;
}

// --- Testimonial Data ---
const testimonials: Testimonial[] = [
  { id: 0, imageSrc: hiroyukiImage, name: 'Hiroyuki Aidichi', title: 'Owner of Aburaya Fried Chicken', quote: 'The best part is your customer service. It’s so quick and friendly; it just made my life easier. If somebody asks me, I recommend Owner.', stats: [{ value: '+$300,000', label: 'Online sales' }, { value: '$100,000', label: 'Delivery fees saved' }], storyLink: '#hiroyuki' },
  { id: 1, imageSrc: yulianaImage, name: 'Yuliana Vasquez', title: 'Owner of Samos Oaxaca', quote: 'Owner.com is the secret to our online success. It makes online marketing so easy, and our guests love using our new ordering system and app.', stats: [{ value: '+$150,000', label: 'Online sales' }, { value: '+377%', label: 'Growth' }], storyLink: '#yuliana' },
  { id: 2, imageSrc: JayImage, name: 'Jay Saadat', title: 'Co-owner of HillCrust Pizza', quote: 'You guys got the website out pretty quick, man. I think it was up within, honestly, like a few days. Customers say the website is super user-friendly.', stats: [{ value: '25%', label: 'increase in online orders' }, { value: '5-figure', label: 'savings in third-party fees' }], storyLink: '#jay' },
  { id: 3, imageSrc: rahulImage, name: 'Rahul Bhatia', title: 'Owner of Saffron Indian Kitchen', quote: 'The platform has been like a superpower for restaurants that increases sales and drives new customers consistently.', stats: [{ value: '+$4,500,000', label: 'Online sales' }, { value: '+4', label: 'Locations' }], storyLink: '#rahul' },
  { id: 4, imageSrc: saidImage, name: 'Said Hofiani', title: 'Owner of San Diego Kabob', quote: 'Ever since signing up, we saw bigger returns. This product is so damn good, man. It just pays for itself.', stats: [{ value: '$9k', label: 'sales in first month' }, { value: '60%', label: 'growth year-over-year' }], storyLink: '#said' },
];

// --- Constants & Icons ---
const CLICK_THRESHOLD = 10; // Pixels to move before it's considered a drag
const AUTOPLAY_INTERVAL = 5000; // 5 seconds
const TRANSITION_DURATION = 500; // Milliseconds
const PlayIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8 5v14l11-7z" /></svg>;

// --- Main Carousel Component ---
const TestimonialsCarousel = () => {
  // Create an "infinite" loop by adding clones to the start and end
  const slidesToRender = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Refs for drag functionality and autoplay
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const startXRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);

  // Helper to get the original index from the looped array
  const getOriginalIndex = useCallback((index: number) => (index - 1 + testimonials.length) % testimonials.length, []);
  
  // Helper to calculate slide width dynamically
  const getSlideWidth = () => dragContainerRef.current?.parentElement?.clientWidth ?? 0;

  const setPosition = useCallback((index: number) => {
    currentTranslateRef.current = index * -getSlideWidth();
    prevTranslateRef.current = currentTranslateRef.current;
    if (dragContainerRef.current) {
      dragContainerRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
    }
  }, []);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    autoPlayTimeoutRef.current = setTimeout(() => {
        changeSlide(currentIndex + 1);
    }, AUTOPLAY_INTERVAL);
  }, [currentIndex]);
  
  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
  }, [isTransitioning]);

  // Autoplay and window resize handler
  useEffect(() => {
    resetAutoPlay();
    const handleResize = () => setPosition(currentIndex);
    window.addEventListener('resize', handleResize);
    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex, resetAutoPlay, setPosition]);

  // Effect to handle the "infinite loop" jump
  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setCurrentIndex(testimonials.length);
      } else if (currentIndex === slidesToRender.length - 1) {
        setCurrentIndex(1);
      }
    }, TRANSITION_DURATION);
    return () => clearTimeout(timer);
  }, [isTransitioning, currentIndex, testimonials.length, slidesToRender.length]);
  
  // Update position whenever index changes
  useEffect(() => {
    setPosition(currentIndex);
  }, [currentIndex, setPosition]);

  // --- Drag Handlers ---
  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = 'touches' in event.nativeEvent ? event.nativeEvent.touches[0].clientX : event.nativeEvent.clientX;
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    if (dragContainerRef.current) dragContainerRef.current.style.cursor = 'grabbing';
  };
  
  const handleDragging = useCallback((event: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current || !dragContainerRef.current) return;
    const currentX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const movedBy = currentX - startXRef.current;

    // Set hasDraggedRef to true if user moves past the threshold
    if (!hasDraggedRef.current && Math.abs(movedBy) > CLICK_THRESHOLD) {
        hasDraggedRef.current = true;
    }

    currentTranslateRef.current = prevTranslateRef.current + movedBy;
    dragContainerRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (dragContainerRef.current) dragContainerRef.current.style.cursor = 'grab';
    
    // If it was a real drag, change slide
    if (hasDraggedRef.current) {
      const movedBy = currentTranslateRef.current - prevTranslateRef.current;
      changeSlide(currentIndex + (movedBy < 0 ? 1 : -1));
    } else {
      // Otherwise, it was a click, navigate to story
      window.location.href = testimonials[getOriginalIndex(currentIndex)].storyLink;
      setPosition(currentIndex); // Snap back if there was tiny movement
    }
    resetAutoPlay();
  }, [currentIndex, changeSlide, resetAutoPlay, getOriginalIndex, setPosition]);

  // Add event listeners for dragging
  useEffect(() => {
    const container = dragContainerRef.current;
    if (container) {
      const mouseMove = (e: MouseEvent) => handleDragging(e);
      const touchMove = (e: TouchEvent) => handleDragging(e);
      
      // Use window to capture mouseup event even if cursor leaves the container
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('touchmove', touchMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('touchmove', touchMove);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [handleDragging, handleDragEnd]);

  return (
    <section className="bg-[#f8f5f2] font-sans w-full py-16 sm:py-24 overflow-hidden">
      <div 
        className="mx-auto cursor-grab"
        onMouseDown={handleDragStart} 
        onTouchStart={handleDragStart}
      >
        <div 
          ref={dragContainerRef}
          className="flex"
          style={{ transition: isTransitioning ? `transform ${TRANSITION_DURATION}ms ease-in-out` : 'none' }}
        >
          {slidesToRender.map((testimonial, index) => {
            const isActive = getOriginalIndex(currentIndex) === getOriginalIndex(index);
            const shouldAnimate = isActive && !isTransitioning;

            return (
              <div key={`${testimonial.id}-${index}`} className="w-full flex-shrink-0 px-4 flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-sm overflow-hidden w-full max-w-6xl lg:h-[500px]">
                  {/* Image Column */}
                  <div className="relative aspect-[4/5] w-full lg:aspect-auto">
                    <img src={testimonial.imageSrc} alt={testimonial.name} className="w-full h-full object-cover" draggable="false" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white pointer-events-none">
                      <h3 className="font-bold text-lg md:text-xl">{testimonial.name}</h3>
                      <p className="text-sm md:text-base">{testimonial.title}</p>
                    </div>
                    <button className="absolute bottom-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black/50">
                      <PlayIcon />
                    </button>
                  </div>
                  {/* Content Column */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div className={`${shouldAnimate ? 'animate-fade-in-up' : 'opacity-0'}`}>
                      <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
                        “{testimonial.quote}”
                      </p>
                    </div>
                    <div className="mt-8 flex items-end justify-between gap-4">
                      <div className={`flex gap-6 lg:gap-10 ${shouldAnimate ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
                        {testimonial.stats.map((stat, statIndex) => (
                          <div key={statIndex}>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-500 mt-1 whitespace-nowrap">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <Link to={testimonial.storyLink} className={`bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 md:py-3 md:px-5 rounded-full transition-colors flex items-center gap-2 whitespace-nowrap self-end ${shouldAnimate ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                        See story
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center items-center mt-10 gap-3">
        {testimonials.map((_, slideIndex) => {
          const isActive = getOriginalIndex(currentIndex) === slideIndex;
          return isActive ? (
            <div key={slideIndex} className="relative w-8 h-2 bg-gray-300 rounded-full overflow-hidden">
              {/* The key={currentIndex} is crucial to restart the animation on slide change */}
              <div key={currentIndex} className="absolute top-0 left-0 h-full w-full bg-blue-600 rounded-full animate-progress-bar"></div>
            </div>
          ) : (
            <button 
              key={slideIndex} 
              onClick={() => changeSlide(slideIndex + 1)} 
              className="h-2 w-2 rounded-full bg-gray-300 transition-colors hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#f8f5f2]" 
              aria-label={`Go to slide ${slideIndex + 1}`} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;