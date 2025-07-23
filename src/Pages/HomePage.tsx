import React from 'react';
import { SectionHpGrader } from '../Components/grader/SectionHpGrader'; // The new section
import OwnersSection from '../Components/OwnersSection';
import ExperienceTabsSection from '../Components/ExperienceTabsSection'; // Import the new section
import RestaurantReviews from '../Components/Review/RestaurantReviews';
import RestaurantTechSection from '../Components/TechSection/TechFeatureSection';
import GuidesSection from '../Components/GuidesSection';
import TestimonialsSection from '../Components/Home/TestimonialsSection';

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
        <GuidesSection/>
      </main>
    </div>
  );
}

export default HomePage;