
import React from 'react';
import { PlayIcon, ArrowRightIcon } from '../icons/MiscIcons';
import { guidesData } from './constants';

const GuideCard: React.FC<{title: string; image: string; isVideo: boolean}> = ({title, image, isVideo}) => (
    <a href="#" className="group relative block w-full aspect-[4/3] rounded-2xl overflow-hidden text-white">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end p-6">
             <p className="text-lg font-semibold">{title}</p>
             {isVideo && (
                <div className="absolute top-6 right-6 h-12 w-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <PlayIcon className="h-6 w-6 text-white" />
                </div>
             )}
        </div>
    </a>
);


const Guides: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
                <div className="max-w-lg">
                    <h2 className="text-4xl font-bold text-gray-900">See our free guides on growing your restaurant</h2>
                </div>
                <a href="#" className="inline-flex items-center space-x-2 bg-gray-800 text-white px-5 py-2.5 rounded-lg text-base font-medium hover:bg-black transition-colors">
                    <span>Read the blog</span>
                    <ArrowRightIcon className="h-5 w-5" />
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {guidesData.map((guide, i) => (
                    <GuideCard key={i} {...guide} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Guides;
