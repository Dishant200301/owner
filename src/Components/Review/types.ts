// src/types.ts
import React from 'react';

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