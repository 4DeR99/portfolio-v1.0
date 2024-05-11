import React from 'react';

interface SkillItemProps {
  src: string;
  alt: string;
}

function SkillItem({ src, alt }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center gap-1 hover:scale-125 hover:transform hover:cursor-pointer hover:shadow-md hover:transition-transform hover:duration-300">
      <img
        src={src}
        alt={alt}
        className="h-[40px] w-[70px] object-contain md:h-[50px] md:w-[85px] xl:h-[70px] xl:w-[100px]"
      />
      <div className="hidden">{alt}</div>
    </div>
  );
}

export default SkillItem;
