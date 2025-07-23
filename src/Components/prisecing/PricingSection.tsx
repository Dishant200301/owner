// ./src/components/PricingSection.tsx

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Icon Components ---
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);
const RightArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);


// --- Reusable IncludedFeature Sub-component ---
interface IncludedFeatureProps {
  title: string;
  description: string;
}
const IncludedFeature: React.FC<IncludedFeatureProps> = ({ title, description }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3 py-5 border-b border-gray-200 last:border-b-0">
        <div className="flex items-center gap-4 md:col-span-1">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                <CheckIcon />
            </div>
            <span className="font-semibold text-gray-800">{title}</span>
        </div>
        <div className="md:col-span-2">
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);


// --- Main PricingSection Component ---
const PricingSection = () => {
    const includedFeatures = [
        { title: "Restaurant Website", description: "A restaurant website perfectly optimized to grow your traffic and sales." },
        { title: "Online Ordering", description: "An online ordering system that's as good as the biggest restaurant brands." },
        { title: "Mobile App", description: "Your very own mobile app, branded for your restaurant, that your regulars will love." },
        { title: "Loyalty and Rewards", description: "A rewards program that gets more repeat orders, just like the national chains." },
        { title: "Automated Marketing", description: "Automated email and text marketing campaigns that drive sales on their own." },
        { title: "Month-to-Month Contract", description: "No lock-in. No long-term contracts. No cancellation fees. Cancel anytime." },
        { title: "24/7 Support", description: "You're 24/7, so we are too. Our customer support is consistently rated 5 stars." },
    ];
    
    // Framer Motion Animation Variants
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    const listVariants: Variants = {
      visible: { transition: { staggerChildren: 0.08 } }
    };
    const itemVariants: Variants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.section 
            className="bg-white py-20 sm:py-24 font-sans"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Top Text Content */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        One simple price.
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Month-to-month. No long-term contracts. No cancellation fees. Just pay a flat rate to get everything on the Owner platform.
                    </p>
                </div>
                
                {/* Pricing Card */}
                <motion.div 
                    className="relative bg-blue-600 text-white rounded-2xl p-8 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Subtle grid pattern overlay */}
                    <div 
                        className="absolute inset-0 opacity-[0.07]" 
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
                    ></div>
                    
                    <div className="relative flex flex-col sm:flex-row justify-between items-center gap-6 z-10">
                        <div>
                            <p className="text-5xl font-bold">$499</p>
                            <p className="text-blue-200 mt-1">billed monthly</p>
                        </div>
                        <a href="/demo" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg flex items-center shadow-md transition-transform hover:scale-105">
                            Get a free demo
                            <RightArrowIcon />
                        </a>
                    </div>
                </motion.div>
                
                {/* What's Included Section */}
                <div className="mt-16">
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                        What's included
                    </h2>
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {includedFeatures.map((feature) => (
                        <motion.div key={feature.title} variants={itemVariants}>
                            <IncludedFeature title={feature.title} description={feature.description} />
                        </motion.div>
                      ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default PricingSection;