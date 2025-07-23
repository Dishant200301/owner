import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import { MainHeader } from './Components/navigation/MainHeader'
import OurStoryPages from './Pages/OurStoryPages';
import PricingPage from './Pages/PricingPage';
import HowOwnerWorks from './Pages/HowOwnerWorks';
import Footer from './Components/Footer';
import RestaurantWebsiteAi from './Pages/RestaurantWebsiteAi';

export default function App() {
  return (
    <>
     <Router>
    <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPages />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/how-owner-works" element={<HowOwnerWorks />} />
        <Route path="/restaurant-website-ai" element={<RestaurantWebsiteAi />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
};