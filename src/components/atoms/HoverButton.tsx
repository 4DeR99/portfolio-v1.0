import React from 'react';

interface HoverButtonProps {
  hoverBg: string;
  buttonTitle: string;
  minWidth?: string;
}

function HoverButton({ hoverBg, buttonTitle, minWidth }: HoverButtonProps) {
  minWidth = minWidth || 'min-w-[100px]';
  const className = `flex justify-center ${hoverBg} text-white px-4 py-2 rounded-md ${minWidth} text-sm hover:cursor-pointer hover:shadow-md hover:transform hover:scale-105 hover:transition-transform hover:duration-300`;
  return <div className={className}>{buttonTitle}</div>;
}

export default HoverButton;
