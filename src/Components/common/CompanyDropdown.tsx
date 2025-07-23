import React from 'react';
import { Dropdown } from './Dropdown';
import { DropdownArticleCard } from './DropdownArticleCard';
import { DropdownBannerCard } from './DropdownBannerCard';

export const CompanyDropdown: React.FC = () => {
  return (
    <Dropdown title="Company">
      <div className="p-6 flex gap-8">
        <div className="flex flex-col flex-grow">
          <div className="text-gray-400 mb-2">
            <p className="text-sm">Company</p>
          </div>
          <ul className="space-y-1">
            <li><a href="/our-story" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Our Story</a></li>
            <li><a href="/careers" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Careers</a></li>
            <li><a href="/leadership" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Leadership</a></li>
            <li><a href="/press" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Press</a></li>
            <li><a href="/reviews" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Reviews</a></li>
            <li><a href="/releases" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Product Releases</a></li>
          </ul>
        </div>
        <div className="hidden lg:block w-72 flex-shrink-0">
          <div className="flex flex-col gap-4">
            <DropdownArticleCard
              href="https://www.forbes.com/sites/amyfeldman/2024/08/13/next-billion-dollar-startups-2024/"
              imageUrl="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups.jpg"
              altText="Forbes Billion Dollar Startups"
              title="Owner named to Forbes Next Billion‑Dollar Startups 2024"
              external={true}
            />
            <DropdownBannerCard
              href="/careers"
              title="We’re Hiring"
              subtitle="View our openings"
              dark={true}
            />
          </div>
        </div>
      </div>
    </Dropdown>
  );
};