import React from 'react';
import BlogHero from '../Components/Blog/BlogHero';
import BlogRecent from '../Components/Blog/Blog-recent';
import TrendingSlider from '../Components/Blog/Trending-slider';
import BlogTopics from '../Components/Blog/Blog-topics';
import BlogIntro from '../Components/Blog/Blog-intro';

const BlogPage: React.FC = () => {
  return (
    <>
      <BlogHero />
      <BlogIntro />
      <BlogRecent />
      <TrendingSlider />
      <BlogTopics />
    </>
  );
};

export default BlogPage;