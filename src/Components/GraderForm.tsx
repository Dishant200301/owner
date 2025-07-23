
import React from 'react';
import { AiIcon, ArrowUpIcon } from '../icons/MiscIcons';

const GraderForm: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-200">
      <form>
        <div className="flex items-center space-x-2 text-gray-800 mb-4">
          <AiIcon className="h-5 w-5" />
          <p className="font-semibold text-sm">Compare yourself with your local competition</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Find your restaurant name"
            className="flex-grow w-full px-4 py-3 border-none rounded-lg focus:ring-0 text-base placeholder-gray-400"
            autoComplete="off"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors flex items-center space-x-2 text-sm font-medium"
          >
            <span>Get my report</span>
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GraderForm;
