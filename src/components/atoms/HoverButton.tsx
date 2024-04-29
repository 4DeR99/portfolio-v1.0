import React from 'react';

interface HoverButtonProps {
  hoverColor: string;
  buttonTitle: string;
}

function HoverButton({ hoverColor, buttonTitle }: HoverButtonProps) {
  const className = `hover:bg-${hoverColor} text-white px-4 py-2 rounded-md min-w-[100px]`;
  return <div className={className}>{buttonTitle}</div>;
}

export default HoverButton;
