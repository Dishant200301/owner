// ./src/components/ProductFeatures.tsx

import React from 'react';

// --- Icon Components ---
// These are simple line-art icons to match the design.

const WebsiteBuilderIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg> );
const AutomatedMarketingIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" /></svg> );
const ZeroCommissionIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg> );
const CustomAppIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> );
const OnlineOrderingIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg> );
const LoyaltyProgramIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.31-2.31L12.75 18l1.178-.398a3.375 3.375 0 002.31-2.31L16.5 14.25l.398 1.178a3.375 3.375 0 002.31 2.31L20.25 18l-1.178.398a3.375 3.375 0 00-2.31 2.31z" /></svg> );
const ExpandIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg> );


// --- Reusable Feature Item Component ---
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);


const ProductFeatures = () => {
    const features = [
        { icon: <WebsiteBuilderIcon />, title: "Website Builder", description: "Convert more visitors into customers with an AI-powered website." },
        { icon: <AutomatedMarketingIcon />, title: "Automated Marketing", description: "Drive sales from customers with proven, automated campaigns." },
        { icon: <ZeroCommissionIcon />, title: "Zero-Commission Delivery", description: "Profitable delivery by top-rated drivers at a fair price." },
        { icon: <CustomAppIcon />, title: "Custom Mobile App", description: "Grow repeat orders with a 5-star mobile app." },
        { icon: <OnlineOrderingIcon />, title: "Online Ordering", description: "Get more orders with online ordering that feels familiar and easy." },
        { icon: <LoyaltyProgramIcon />, title: "Loyalty Program", description: "Build loyalty with a rewards program inspired by the big brands." },
    ];

    return (
        <main className="bg-white py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Feature Grid */}
                    <div className="flex flex-col gap-10">
                        <p className="text-gray-500 font-medium">Product</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map(feature => (
                                <FeatureItem key={feature.title} {...feature} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Case Study Card */}
                    <a href="#" className="block relative group">
                        <img 
                            src="/talkin-tacos.png" 
                            alt="Owners of Talkin Tacos" 
                            className="rounded-2xl w-full h-auto shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
                        <div className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full group-hover:bg-black/50 transition-colors">
                            <ExpandIcon />
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-xl font-semibold leading-tight">
                                How Talkin Tacos increased direct online sales to $120,000/m by using Owner.com
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default ProductFeatures;