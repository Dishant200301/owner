import React from 'react'
import RestaurantWebsiteHero from '../Components/restaurant-website-ai/RestaurantWebsiteHero'
import CommissionsSection from '../Components/restaurant-website-ai/CommissionsSection'
import FAQsSection from '../Components/restaurant-website-ai/FAQsSection'
import TestimonialsCarousel from '../Components/prisecing/TestimonialsCarousel'
import FeaturesSection from '../Components/prisecing/FeaturesSection'
import GuidesSection from '../Components/restaurant-website-ai/GuidesSection'
import OnlineOrderingSection from '../Components/restaurant-website-ai/OnlineOrderingSection'

export default function RestaurantWebsiteAi() {
  return (
    <>
    <RestaurantWebsiteHero/>
    <FeaturesSection/>
    <CommissionsSection/>
    <FAQsSection/>
    <TestimonialsCarousel/>
    <GuidesSection/>
    <OnlineOrderingSection/>
    </>
  )
}
