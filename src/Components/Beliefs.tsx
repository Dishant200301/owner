
import React from 'react';
import { SignatureIcon } from '../icons/MiscIcons';

const beliefs = [
    { title: "Sales growth is more important than customization.", description: "The third party delivery apps and the big national brands have shaped how everyone orders online. We take their best practices and give them to you. This is why we outperform our competitors, who choose customization over sales." },
    { title: "We have to earn your business every month.", description: "Restaurants are hard enough, you don’t need another tech vendor tying you up in a long term contract. Customers vote with their feet if they don’t like your restaurant. We want you to be able to leave easily if we aren’t adding value and helping you grow your business." },
    { title: "Restaurants should own their customer relationships.", description: "One of the cruelest byproducts of tech “innovation” is how you are separated from your customers. If you ever decide to leave Owner, you get to bring your customers with you." }
];

const Beliefs: React.FC = () => {
    return (
        <section className="py-24 bg-white rounded-3xl mt-[-1rem] border border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900">Three beliefs that guide our company</h2>
                            <p className="text-gray-500 mt-4">Understand the principles that guide our decisions.</p>
                        </div>
                        <ul className="space-y-8">
                            {beliefs.map((belief, i) => (
                                <li key={i} className="pb-8 border-b border-gray-200 last:border-b-0 last:pb-0">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{belief.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{belief.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative rounded-2xl overflow-hidden w-full max-w-sm mb-6">
                            <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f0afcb8d61ebc96e95d6c_adam-guild.jpg" alt="Adam Guild" className="w-full h-auto object-cover" />
                            <div className="absolute bottom-4 left-4 text-white mix-blend-exclusion">
                                <SignatureIcon className="h-20 w-32" />
                            </div>
                        </div>
                        <p className="text-sm text-center text-gray-700">Adam Guild<br/>Co-Founder and CEO at Owner</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beliefs;
