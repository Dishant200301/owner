// src/components/PlayButtonIcon.tsx
import React from 'react';
import { PlayButtonIcon } from './SVGIcons';

const PlayButton: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="video-play w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
        <PlayButtonIcon className="w-8 h-8 md:w-10 md:h-10 text-gray-800" />
      </div>
    </div>
  );
};

export default PlayButton;