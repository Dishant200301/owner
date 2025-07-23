import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      question: "What is included?",
      answer: "Our service includes order management, delivery tracking, customer support, and integration with your existing POS system."
    },
    {
      question: "What commissions do I pay as a restaurant?",
      answer: "We charge competitive commission rates that vary based on your restaurant's volume and partnership tier. Contact us for specific pricing details."
    },
    {
      question: "How long are your contracts?",
      answer: "We offer flexible contract terms ranging from month-to-month agreements to annual contracts with better rates for longer commitments."
    },
    {
      question: "How long does it take to get started?",
      answer: "Most restaurants can be up and running within 1-2 weeks, including menu setup, staff training, and system integration."
    },
    {
      question: "Should I stop using third-party delivery apps?",
      answer: "We recommend a hybrid approach. Our platform can complement your existing channels while giving you more control and better margins on direct orders."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - FAQ */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">FAQ's</h1>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="pb-6 pr-10">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Testimonial Card */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 border border-gray-700 rounded-lg"></div>
              <div className="absolute top-8 right-8 w-24 h-24 border border-gray-700 rounded-lg"></div>
            </div>
            
            {/* Profile image with proper 260x447 aspect ratio */}
            <div className="relative z-10">
              <div 
                className="bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
                style={{
                  width: '340px',
                  height: '250px',
                  aspectRatio: '240/148'
                }}
              >
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center"
                  style={{
                    backgroundImage: `url("https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669095937639bf4b0a62d7b1_hiroyuki-aidachi-p-500.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg font-medium mb-6 leading-relaxed">
                "After we signed up with Owner, we've saved probably hundreds of thousands of dollars."
              </blockquote>
              
              {/* Attribution */}
              <div>
                <p className="font-medium text-white">Hiroyuki Aidichi</p>
                <p className="text-gray-400 text-sm mt-1">Owner of Aburaya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;