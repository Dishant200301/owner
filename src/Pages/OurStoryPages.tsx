import React from 'react'
import AboutHero from '../Components/OurStory/AboutHero'
// import AboutSection from '../Components/OurStory/AboutSection'
// import AboutHeadlineSection from '../Components/OurStory/AboutHeadlineSection'
// import AboutStatsSection from '../Components/OurStory/AboutStatsSection'
import AboutStartSection from '../Components/OurStory/AboutStartSection'
import VisionAndCareers from '../Components/OurStory/VisionAndCareers'
import AboutContentSection from '../Components/OurStory/AboutContentSection'

export default function OurStoryPages() {
  return (
   <>
   <AboutHero/>
   <AboutContentSection/>
   <AboutStartSection/>
   <VisionAndCareers/>
   </>
  )
}
