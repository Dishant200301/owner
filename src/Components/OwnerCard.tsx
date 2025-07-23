import React from 'react';

// Define the types for the props of the OwnerCard component
interface OwnerCardProps {
    name: string;
    title: string;
    imageUrl: string;
    linkHref: string;
    value?: string;           // Optional: For cards displaying a large monetary value
    valueUnit?: string;       // Optional: e.g., "/year"
    valueDescription?: string; // Optional: e.g., "In direct online sales"
    descriptionText?: string; // Optional: For cards displaying a descriptive paragraph
}

const OwnerCard: React.FC<OwnerCardProps> = ({
    name,
    title,
    imageUrl,
    linkHref,
    value,
    valueUnit,
    valueDescription,
    descriptionText
}) => {
    // Determine if the card should display a large value or a descriptive text
    const isValueCard = value !== undefined;

    return (
        <a 
            href={linkHref} 
            className="
                flex flex-col justify-between items-start p-6 rounded-xl overflow-hidden 
                relative w-[320px] h-[400px] shrink-0 bg-white shadow-md
            "
        >
            {/* Image and Overlay Gradients */}
            <div className="absolute inset-0 z-0">
                {/* Top overlay for text readability */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent"></div>
                {/* Bottom overlay for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                <img
                    src={imageUrl}
                    loading="lazy"
                    alt={`Portrait of ${name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Top Text (Name & Title) */}
            <div className="z-20 text-white relative">
                <div className="opacity-90">
                    <p className="text-sm">{name}</p> {/* Maps to p14 */}
                </div>
                <div className="opacity-70">
                    <p className="text-sm">{title}</p> {/* Maps to p14 */}
                </div>
            </div>

            {/* Bottom Content (Value or Description) */}
            <div className="z-20 text-white relative mt-auto"> {/* mt-auto pushes content to the bottom */}
                {isValueCard ? (
                    <>
                        {/* Layout for cards showing a big monetary value */}
                        <div className="mb-2"> {/* margin-bottom margin-8 converted to mb-2 (8px) */}
                            <p>
                                <span className="text-p44 font-bold">{value}</span> {/* Custom p44 font size */}
                                <span className="text-sm opacity-80">{valueUnit}</span> {/* Maps to h14 */}
                            </p>
                        </div>
                        <div className="opacity-90">
                            <p className="text-sm">{valueDescription}</p> {/* Maps to p14 */}
                        </div>
                    </>
                ) : (
                    <>
                        {/* Layout for cards showing a descriptive paragraph */}
                        <p className="text-xl font-semibold">{descriptionText}</p> {/* Maps to h20 */}
                    </>
                )}
            </div>
        </a>
    );
};

export default OwnerCard;