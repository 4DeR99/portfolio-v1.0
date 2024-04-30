import React from 'react';

interface SkillItemProps {
  src: string;
  alt: string;
}

function SkillItem({ src, alt }: SkillItemProps) {
  return (
    <div className="flex flex-col gap-1 items-center hover:cursor-pointer hover:shadow-md hover:transform hover:scale-125 hover:transition-transform hover:duration-300">
      <img
        src={src}
        alt={alt}
        className="xl:h-[70px] xl:w-[100px] md:h-[50px] md:w-[85px] h-[40px] w-[70px] object-contain"
      />
      <div className="hidden">{alt}</div>
    </div>
  );
}

export default SkillItem;
