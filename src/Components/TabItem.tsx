import React from 'react';
import clsx from 'clsx';

interface TabItemProps {
    number: number;
    title: string;
    isActive: boolean;
    onClick: () => void;
    progressResetKey: number; // Used to force re-render/re-animation of the progress line
}

const TabItem: React.FC<TabItemProps> = ({ number, title, isActive, onClick, progressResetKey }) => {
    return (
        <div
            className={clsx(
                "flex-1 min-w-[200px] md:min-w-0 flex flex-col justify-end p-2 md:p-4 cursor-pointer transition-colors duration-200",
                {
                    "text-black": isActive,
                    "text-gray-400": !isActive,
                }
            )}
            onClick={onClick}
        >
            <div className="exp-tabs_tabs-item-inner flex items-center mb-2">
                <div className="opacity-20 mr-2">
                    <p className="text-h20 font-bold">{number}</p>
                </div>
                <p className="text-h20 font-medium">{title}</p>
            </div>
            {/* Progress line, reset with key prop */}
            <div className="exp-tabs_tabs-progress h-0.5 bg-gray-300">
                <div
                    // The key prop changes when the active tab changes, forcing React to re-mount this div.
                    // This is a common way to restart CSS animations.
                    key={progressResetKey}
                    className={clsx(
                        "exp-tabs_tabs-progress-line h-full bg-blue-500", // Use a distinct color for progress
                        {
                            "swiper-slide-active": isActive, // This class is critical for the CSS animation defined in global CSS
                        }
                    )}
                ></div>
            </div>
        </div>
    );
};

export default TabItem;