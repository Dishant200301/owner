import React from 'react';
import { IconOwnerLogo } from '../common/SvgIcons'; // Adjust path if needed

export const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 mr-8"> {/* Added mr-8 for spacing */}
      <IconOwnerLogo className="w-6 h-6 text-black" />
      <span>Owner</span>
    </a>
  );
};