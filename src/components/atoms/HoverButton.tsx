import React from 'react';

interface HoverButtonProps {
  hoverBg: string;
  buttonTitle: string;
}

function HoverButton({ hoverBg, buttonTitle }: HoverButtonProps) {
  const className = `flex justify-center ${hoverBg} text-white px-4 py-2 rounded-md min-w-[100px] text-sm`;
  return <div className={className}>{buttonTitle}</div>;
}

export default HoverButton;
