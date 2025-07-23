import React from 'react';

interface SVGIconProps {
  svgContent: string;
  className?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({ svgContent, className }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SVGIcon;