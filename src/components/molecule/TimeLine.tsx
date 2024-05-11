import { oraTech } from 'assets/consts';
import React from 'react';

function TimeLine() {
  const [begin, end] = oraTech.date.split(' - ');
  return (
    <div className="hidden grow justify-center gap-4 lg:flex">
      <div className="flex h-full flex-col items-center">
        <div className="h-8 w-8 rounded-full bg-secondary" />
        <div className="w-0 grow border-[3px] border-secondary" />
        <div className="h-8 w-8 rounded-full bg-secondary" />
      </div>
      <div className="my-1 flex flex-col justify-between text-primaryText">
        <p>{begin}</p>
        <p>{end}</p>
      </div>
    </div>
  );
}

export default TimeLine;
