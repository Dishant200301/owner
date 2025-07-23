// src/types.ts
import React from 'react';

// From previous sections:
export interface ReviewPlatform {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

export interface Review {
  id: string;
  text: string;
  avatarSrc: string;
  author: string;
}

// New type for Testimonials
export interface Testimonial {
  id: string;
  owners: string;
  restaurant: string;
  quote: string;
  stats: { value: string; description: string }[];
  imageSrc: string;
  imageSrcset?: string; // Optional for responsive images
  vimeoUrl?: string; // Optional if you have a video story
  previousRestaurant?: string;
  nextRestaurant?: string;
}