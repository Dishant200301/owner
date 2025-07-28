import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import OurStoryPages from './Pages/OurStoryPages';
import PricingPage from './Pages/PricingPage';
import HowOwnerWorks from './Pages/HowOwnerWorks';
import Footer from './Components/Footer';
import RestaurantWebsiteAi from './Pages/RestaurantWebsiteAi';
import Header from './Components/navigation/Header';
import BlogPage from './Pages/BlogPage';
import Restaurant_promotion_ideas from './Pages/Restaurant_promotion_ideas';
import ReviewPage from './Pages/ReviewPage';
import ReleasesPage from './Pages/ReleasesPage';

export default function App() {
  return (
    <>
     <Router>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPages />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/how-owner-works" element={<HowOwnerWorks />} />
        <Route path="/restaurant-website-ai" element={<RestaurantWebsiteAi />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/restaurant-promotion-ideas" element={<Restaurant_promotion_ideas />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/releases" element={<ReleasesPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
};