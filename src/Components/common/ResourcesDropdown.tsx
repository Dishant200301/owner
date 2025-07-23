import React from 'react';
import { Dropdown } from './Dropdown';
import { DropdownArticleCard } from './DropdownArticleCard';
import { DropdownBannerCard } from './DropdownBannerCard';

export const ResourcesDropdown: React.FC = () => {
  return (
    <Dropdown title="Resources">
      <div className="p-6 flex gap-8">
        <div className="flex flex-col flex-grow">
          <div className="text-gray-400 mb-2">
            <p className="text-sm">Learn</p>
          </div>
          <ul className="space-y-1">
            <li><a href="/blog" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Blog</a></li>
            <li><a href="https://help.owner.com/" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Help Center</a></li>
            <li><a href="/case-studies" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Case Studies</a></li>
            <li><a href="/support" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Support Center</a></li>
            <li><a href="/comparison" className="block p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900">Compare Owner</a></li>
          </ul>
        </div>
        <div className="hidden lg:block w-72 flex-shrink-0">
          <div className="flex flex-col gap-4">
            <DropdownArticleCard
              href="/case-studies/sushi-me-rollin"
              imageUrl="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1).jpg"
              altText="Sushi Me Rollin' Case Study"
              title="How Sushi Me Rollin’ increased direct online sales by $91,000 using Owner.com"
            />
            <DropdownBannerCard
              href="/case-studies"
              title="Case Studies"
              subtitle="View all"
            />
          </div>
        </div>
      </div>
    </Dropdown>
  );
};