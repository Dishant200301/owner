import React from 'react';
import OwnerCard from './OwnerCard';

interface OwnerData {
    name: string;
    title: string;
    imageUrl: string;
    linkHref: string;
    value?: string;
    valueUnit?: string;
    valueDescription?: string;
    descriptionText?: string;
}

const ownersData: OwnerData[] = [
    // ... (your existing ownersData array remains the same)
    {
        name: "Mo and Omar",
        title: "Owners of Talkin Tacos",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58dec1014216fd440ce0_talkin-taco.jpg",
        linkHref: "/case-studies/talkin-tacos",
        value: "+$7,000,000",
        valueUnit: "/year",
        valueDescription: "In direct online sales"
    },
    {
        name: "Fernando Izaguirre",
        title: "Owner of Sushi Addicts",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e12d52f8a9ca3c46adc29_hero-shot-2.jpg",
        linkHref: "/case-studies/sushi-addicts",
        descriptionText: "How Sushi Addicts grew online orders to $210,000 per year with Owner"
    },
    {
        name: "Sarkis Panossian",
        title: "Owner of Township Line Pizza",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6822d4d8b2afafaf7a907dff_sarkis-pizza-c-min.jpg",
        linkHref: "/case-studies/township-line-pizza",
        value: "+$300,000",
        valueUnit: "/year",
        valueDescription: "Online sales"
    },
    {
        name: "Nikitas Bouras",
        title: "Owner of Gyro Concept",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/673b3eea9f5ea46db334110b_gyro-main-2.jpg",
        linkHref: "/case-studies/gyro-concept",
        descriptionText: "How Gyro Concept grew to $194,000 in online sales per year with Owner.com"
    },
    {
        name: "Hiroyuki Aidichi",
        title: "Owner of Aburaya Fried Chicken",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59186e8ef21f428818dd_aburaya.jpg",
        linkHref: "/case-studies/aburaya",
        value: "+$300,000",
        valueUnit: "/year",
        valueDescription: "Online sales"
    },
    {
        name: "Yuliana Vasquez",
        title: "Owner of Samos Oaxaca",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e59046e8ef21f428812e4_oaxaca.jpg",
        linkHref: "/case-studies/samos-oaxaca",
        descriptionText: "How Samos Oaxaca increased direct online sales to $10,000/m by using Owner.com"
    },
    {
        name: "Gia Schultz",
        title: "Owner of The Modern Vegan",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/66950266b5c04d98f7f8e0c3_the-modern-vegan%20(1).jpg",
        linkHref: "/case-studies/the-modern-vegan",
        value: "$240,000",
        valueUnit: "/year",
        valueDescription: "Online sales"
    },
    // Adding more data to ensure enough content for a smooth marquee effect
    {
        name: "Sandy Sei",
        title: "Owner of Cyclo Noodles",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e590e21e6d6d30d54c866_cyclo.jpg",
        linkHref: "/case-studies/cyclo-noodles",
        descriptionText: "How Cyclo Noodles grew direct online sales by 7X by switching to Owner.com"
    },
    {
        name: "Rahul Bhatia",
        title: "Owner of Saffron Indian Kitchen",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/674e14188f2c09047d065fb0_hero-shot-2.jpg",
        linkHref: "/case-studies/saffron",
        value: "+$4,500,000",
        valueUnit: "/year",
        valueDescription: "Online sales"
    },
    {
        name: "John & Sam",
        title: "Owners at Metro Pizza",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58cc842d3abde9a87dd4_metro-pizza.jpg",
        linkHref: "/case-studies/metro-pizza",
        descriptionText: "How Metro Pizza increased direct online sales by $10,000/m by swapping ChowNow for Owner"
    },
    {
        name: "Phillip Hang",
        title: "Owner of Sushi Me Roll'n",
        imageUrl: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e58efd50b05c9f54e572d_sushi-me-rolin.jpg",
        linkHref: "/case-studies/sushi-me-rollin",
        descriptionText: "How Sushi Me Roll'n’ increased direct online sales by $50,000 using Owner.com"
    }
];

const OwnersSection: React.FC = () => {
    const scrollingOwners = [...ownersData, ...ownersData, ...ownersData];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold">Trusted by thousands of owners</h2>
                </div>
                <div className="relative overflow-hidden w-full h-[400px] group">
                    <div
                        className="
                            hp-owners_row flex flex-nowrap gap-x-6 absolute left-0 top-0 h-full
                            animate-marquee-rtl
                        "
                    >
                        {scrollingOwners.map((owner, index) => (
                            <OwnerCard key={`marquee-item-${index}`} {...owner} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OwnersSection;