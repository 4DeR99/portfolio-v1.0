import React from 'react';
import OraTech from './OraTech';
import TimeLine from './TimeLine';

function Experience() {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center gap-8 lg:mx-auto xl:w-[1000px]">
      <h2 className="text-2xl font-medium lg:self-start">.workExperience()</h2>
      <div className="flex w-full flex-col gap-2 lg:flex-row lg:flex-wrap ">
        <OraTech />
        <TimeLine />
      </div>
    </div>
  );
}

export default Experience;
