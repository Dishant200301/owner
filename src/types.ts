import React from 'react';

// For the small SVG icons within dropdown list items
export type IconSvgContent = string;

// Base link item
export interface NavLinkItem {
  text: string;
  href: string;
  target?: '_blank';
}

// Dropdown sub-item with description and optional icon
export interface DropdownLinkItem extends NavLinkItem {
  description?: string;
  icon?: IconSvgContent;
}

// Section within a dropdown (e.g., "Product", "Company", "Learn")
export interface DropdownSection {
  heading: string;
  links: DropdownLinkItem[];
}

// Featured article or banner in the right column of a dropdown
export interface FeaturedContent {
  href: string;
  target?: '_blank';
  title: string;
  description?: string; // Used for banner type
  imageSrc?: string;
  imageSrcset?: string; // For responsive images
  imageSizes?: string;  // For responsive images
  imageAlt?: string;
  iconSvg?: IconSvgContent; // For the arrow icon in the overlay
  type: 'article' | 'banner';
  bannerClasses?: string; // e.g., 'cc-dark'
}

// Full dropdown menu structure
export interface DropdownMenuData {
  title: string;
  sections: DropdownSection[];
  featuredContent?: FeaturedContent[];
}