// import PricingSection from '../Components/prisecing/PricingSection'; // Importing the Pricing section
import FeaturesGridSection from '../Components/prisecing/FeaturesGridSection';
import TestimonialsCarousel from '../Components/prisecing/TestimonialsCarousel'; // Importing the Testimonials 
import DemoForm from '../Components/prisecing/DemoForm'; // Importing the Demo Form component
import PricingHero from '../Components/prisecing/PricingHero'; // Importing the Pricing Hero component
import FAQ from '../Components/prisecing/FAQ'; // Adjust the import path as needed

function PricingPage() {
  return (
    <>
      {/* <PricingSection />  */}
      <PricingHero/>
      <FeaturesGridSection/>
      <TestimonialsCarousel/>
      <FAQ />
      <DemoForm/>
    </>
  );
}

export default PricingPage;