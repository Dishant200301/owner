import React from 'react';
import OwnersSection from '../Components/OwnersSection';
import ExperienceTabsSection from '../Components/ExperienceTabsSection'; // Import the new section
import RestaurantReviews from '../Components/Review/RestaurantReviews';
import RestaurantTechSection from '../Components/TechSection/TechFeatureSection';
import GuidesSection from '../Components/GuidesSection';
import TestimonialsSection from '../Components/Home/TestimonialsSection';
import BeliefsSection from '../Components/Home/BeliefsSection';
import TestimonialsCarousel from '../Components/prisecing/TestimonialsCarousel';
import { SectionHpGrader } from '../Components/grader/SectionHpGrader';

function HomePage() {
  return (
    <div className="overflow-hidden"> {/* Ensure no horizontal scroll from animations/absolute positioning */}
      
      <main>
        <SectionHpGrader />
        <OwnersSection /> 
        <ExperienceTabsSection /> 
        <RestaurantReviews/>
        <RestaurantTechSection/> 
        <TestimonialsSection/>
        <TestimonialsCarousel/>
        <BeliefsSection/>
        <GuidesSection/>
      </main>
    </div>
  );
}

export default HomePage;