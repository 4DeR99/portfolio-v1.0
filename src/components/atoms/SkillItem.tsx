import React from 'react';

interface SkillItemProps {
  src: string;
  alt: string;
}

function SkillItem({ src, alt }: SkillItemProps) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={src} alt={alt} className="h-[70px] w-[100px]" />
      <div className="hidden">{alt}</div>
    </div>
  );
}

export default SkillItem;
