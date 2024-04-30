import React from 'react';
import OraTech from './OraTech';
import TimeLine from './TimeLine';

function Experience() {
  return (
    <div className="flex flex-col items-center gap-8 w-11/12 mx-auto xl:w-[1000px] lg:mx-auto">
      <h2 className="text-2xl font-medium lg:self-start">.workExperience()</h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 w-full ">
        <OraTech />
        <TimeLine />
      </div>
    </div>
  );
}

export default Experience;
