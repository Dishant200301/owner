
import React, { useState, useEffect } from 'react';
import type SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Controller } from 'swiper/modules';

const FeaturesTabs: React.FC = () => {
    const [tabSwiper, setTabSwiper] = useState<SwiperCore | null>(null);
    const [contentSwiper, setContentSwiper] = useState<SwiperCore | null>(null);

    const tabData = [
        { id: 1, title: 'More Google Traffic', subtitle: 'Upgrade your SEO', description: 'With Owner, your website gets way more Google traffic' },
        { id: 2, title: 'More Online Sales', subtitle: 'Boost your orders', description: 'Grow sales with ordering that feels just like the big brands' },
        { id: 3, title: 'More Repeat Orders', subtitle: 'Create more regulars', description: 'Owner uses smart follow-ups that grow your repeat orders' },
        { id: 4, title: 'More App Downloads', subtitle: 'Reward your guests', description: 'Give guests points when they use your branded mobile app' },
    ];
    
    const contentImages = [
        'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68099508c0154cdc49f8c9b7_a576e66e2a76a448f0c997ba69bd8d8f_ai-website_item-2.avif',
        'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a178dea2dba19951bf646_abc3446dbd78d9103d75cafb2dcfa96d_online-ordering_item-1.avif',
        'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/681214b6923ef956e00bbe28_3647942429bb2058a6d96e3f71542f42_follow-up.json', // This is a lottie file, will show as broken image. Using placeholder.
        'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a166038a3b80a4a531b2e_online-ordering_item-2.avif',
    ];
    
    // Placeholder for lottie file
    contentImages[2] = 'https://picsum.photos/seed/followup/800/600';

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">With Owner, you get more traffic, more sales, more repeat customers</h2>
                </div>
                
                <div className="border-b border-gray-200 mb-8">
                     <Swiper
                        onSwiper={setTabSwiper}
                        controller={{ control: contentSwiper }}
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        modules={[Controller]}
                        className="!pb-0"
                    >
                        {tabData.map((tab) => (
                             <SwiperSlide key={tab.id} className="!w-auto">
                                <button className="group text-left py-4 px-2 relative">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-xl font-medium text-gray-300">{`0${tab.id}`}</span>
                                        <span className="text-xl font-medium text-gray-800">{tab.title}</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
                                         <div className="bg-blue-600 h-1 transition-transform duration-[7000ms] ease-linear scale-x-0 group-[.swiper-slide-active]:scale-x-100 origin-left"></div>
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                 <Swiper
                    onSwiper={setContentSwiper}
                    controller={{ control: tabSwiper }}
                    autoplay={{ delay: 7000, disableOnInteraction: true }}
                    loop={true}
                    effect={'fade'}
                    fadeEffect={{ crossFade: true }}
                    modules={[EffectFade, Autoplay, Controller]}
                    className="w-full h-auto md:h-[500px] bg-white rounded-2xl shadow-md p-8"
                >
                    {tabData.map((tab, index) => (
                        <SwiperSlide key={tab.id}>
                            <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                                <div className="text-left">
                                    <p className="text-2xl text-gray-400 mb-2">{tab.subtitle}</p>
                                    <p className="text-2xl font-semibold text-gray-900">{tab.description}</p>
                                </div>
                                <div className="flex items-center justify-center h-full">
                                    <img src={contentImages[index]} alt={tab.title} className="max-h-[250px] md:max-h-[400px] object-contain"/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturesTabs;
