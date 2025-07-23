import React from 'react';
import { IconArrowRight } from './SvgIcons';

interface DropdownArticleCardProps {
  href: string;
  imageUrl: string;
  altText: string;
  title: string;
  external?: boolean;
}

export const DropdownArticleCard: React.FC<DropdownArticleCardProps> = ({ href, imageUrl, altText, title, external = false }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative block rounded-lg overflow-hidden group w-full h-48 md:h-56 lg:h-64" // Adjust height for responsiveness
    >
      <img
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        src={imageUrl}
        alt={altText}
        loading="lazy"
        sizes="100vw"
        // Note: For production, consider using an image optimization component (e.g., Next.js Image)
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 text-white">
        <p className="text-base font-semibold max-w-[350px]">{title}</p>
      </div>
      <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <IconArrowRight className="w-5 h-5" fill="white" wrapperClassName="" /> {/* Adjusted size */}
      </div>
    </a>
  );
};