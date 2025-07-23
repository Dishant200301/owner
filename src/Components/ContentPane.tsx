import React from 'react';
import clsx from 'clsx';
// For Lottie animations, you'd typically install 'lottie-react' and import your JSON files.
// import Lottie from 'lottie-react';
// import animationData1 from '../assets/ranking-new.json'; // Example: path to your Lottie JSON

interface ContentPaneProps {
    preTitle: string;
    mainContent: string;
    imageUrl?: string;
    imageSrcSet?: string;
    imageAlt: string;
    lottieSrc?: string; // URL for Lottie animation JSON (dummy for now)
    paneClass?: string; // Optional class for specific pane styling
}

const ContentPane: React.FC<ContentPaneProps> = ({
    preTitle,
    mainContent,
    imageUrl,
    imageSrcSet,
    imageAlt,
    lottieSrc,
    paneClass
}) => {
    return (
        <div className={clsx("flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-gray-100 min-h-[400px]", paneClass)}>
            <div className="exp-tabs_tabs-content md:w-1/2 text-left mb-8 md:mb-0 md:mr-8">
                <div className="opacity-50 mb-2">
                    <p className="text-h28 font-medium">{preTitle}</p>
                </div>
                <p className="text-h28 font-bold">{mainContent}</p>
            </div>
            <div className="exp-tabs_tabs-visual md:w-1/2 flex justify-center items-center relative">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        srcSet={imageSrcSet}
                        sizes="100vw"
                        loading="lazy"
                        alt={imageAlt}
                        className="max-w-full h-auto rounded-lg shadow-lg object-contain"
                    />
                )}
                {/* Placeholder for Lottie animation. If you had 'lottie-react', you'd use it here */}
                {lottieSrc && !imageUrl && (
                    <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-md w-full h-[300px]">
                        <p className="text-gray-500">Lottie Animation Placeholder (JSON: {lottieSrc.split('/').pop()})</p>
                        {/* Example if using lottie-react: */}
                        {/* <Lottie animationData={animationData1} loop={true} autoplay={true} className="w-full h-full" /> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentPane;