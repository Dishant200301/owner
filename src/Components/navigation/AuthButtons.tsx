import React from 'react';

export const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-6 ml-auto"> {/* ml-auto pushes it to the right */}
      <a href="/login" className="text-base font-medium text-gray-700 hover:text-gray-900">
        Login
      </a>
      <a href="/demo" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        Get a free demo
      </a>
    </div>
  );
};