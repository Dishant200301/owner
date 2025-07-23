import React from 'react';
import { IconStar } from '../common/SvgIcons'; // Adjust path if needed

export const GraderMeta: React.FC = () => {
  return (
    <div className="mb-5"> {/* margin-bottom margin-20 */}
      <div className="text-xs"> {/* n_text-size-xsmall */}
        <div className="flex items-center justify-center space-x-2 text-gray-700"> {/* hp-grader_meta */}
          <p>#1 Top-Rated Restaurant Software</p>
          <div className="flex items-center space-x-1 ml-4"> {/* hp-grader_meta-inner */}
            <p className="font-semibold">4.8</p>
            <IconStar className="text-black/40" /> {/* icon_16 w-embed, using black/40 for fill */}
            <p>across 279 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};