import React from 'react';
import OwnersSection from '../Components/OwnersSection';
import RestaurantReviews from '../Components/Review/RestaurantReviews';
import GuidesSection from '../Components/GuidesSection';
import BeliefsSection from '../Components/Home/BeliefsSection';
import TestimonialsCarousel from '../Components/prisecing/TestimonialsCarousel';
import ExperienceTabsSection from '../Components/ExperienceTabsSection';
import RestaurantGrader from '../Components/grader/SectionHpGrader';
import Testimonials from '../Components/Home/TestimonialsSection';

function HomePage() {
  return (
    <div className="overflow-hidden"> {/* Ensure no horizontal scroll from animations/absolute positioning */}
      
      <main>
        <RestaurantGrader />
        <OwnersSection /> 
        <ExperienceTabsSection /> 
        <RestaurantReviews/>
        <Testimonials/> 
        <TestimonialsCarousel/>
        <BeliefsSection/>
        <GuidesSection/>
      </main>
    </div>
  );
}

export default HomePage;