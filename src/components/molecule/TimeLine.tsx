import { oraTech } from 'assets/consts';
import React from 'react';

function TimeLine() {
  const [begin, end] = oraTech.date.split(' - ');
  return (
    <div className="justify-center gap-4 grow hidden lg:flex">
      <div className="flex flex-col items-center h-full">
        <div className="w-8 h-8 rounded-full bg-secondary" />
        <div className="grow w-0 border-secondary border-[3px]" />
        <div className="w-8 h-8 rounded-full bg-secondary" />
      </div>
      <div className="flex flex-col justify-between my-1 text-primaryText">
        <p>{begin}</p>
        <p>{end}</p>
      </div>
    </div>
  );
}

export default TimeLine;
