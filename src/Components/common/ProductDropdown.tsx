import React from 'react';
import { Dropdown } from './Dropdown';
import { DropdownLink } from './DropdownLink';
import { DropdownArticleCard } from './DropdownArticleCard';
import {
  IconLaptop,
  IconDelivery,
  IconBasket,
  IconMarketing,
  IconMobile,
  IconLoyalty,
} from './SvgIcons';

export const ProductDropdown: React.FC = () => {
  return (
    <Dropdown title="Product">
      <div className="p-6 flex gap-8"> {/* Adjust padding and gap */}
        <div className="flex flex-col flex-grow">
          <div>
            <div className="text-gray-400 mb-2">
              <p className="text-sm">Product</p>
            </div>
          </div>
          <div className="flex gap-4">
            <ul className="flex-1 space-y-1">
              <DropdownLink
                href="/restaurant-website-ai"
                icon={<IconLaptop />}
                title="Website Builder"
                description="Convert more visitors into customers with an AI-powered website."
              />
              <DropdownLink
                href="/delivery"
                icon={<IconDelivery />}
                title="Zero-Commission Delivery"
                description="Profitable delivery by top-rated drivers at a fair price."
              />
              <DropdownLink
                href="/online-ordering"
                icon={<IconBasket />}
                title="Online Ordering"
                description="Get more orders with online ordering that feels familiar and easy."
              />
            </ul>
            <ul className="flex-1 space-y-1">
              <DropdownLink
                href="/automatic-marketing"
                icon={<IconMarketing />}
                title="Automated Marketing"
                description="Drive sales from customers with proven, automated campaigns."
              />
              <DropdownLink
                href="/branded-apps"
                icon={<IconMobile />}
                title="Custom Mobile App"
                description="Grow repeat orders with a 5-star mobile app."
              />
              <DropdownLink
                href="/loyalty-rewards"
                icon={<IconLoyalty />}
                title="Loyalty Program"
                description="Build loyalty with a rewards program inspired by the big brands."
              />
            </ul>
          </div>
        </div>
        <div className="hidden lg:block w-72 flex-shrink-0"> {/* Equivalent to _2 hide-tablet */}
          <div className="flex flex-col gap-4">
            <DropdownArticleCard
              href="/case-studies/talkin-tacos"
              imageUrl="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1).jpg"
              altText="Talkin Tacos Case Study"
              title="How Talkin Tacos increased direct online sales to $120,000/m by using Owner.com"
            />
          </div>
        </div>
      </div>
    </Dropdown>
  );
};