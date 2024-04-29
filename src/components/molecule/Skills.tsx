import React from 'react';
import SkillsContainer from './SkillsContainer';
import { skills } from 'assets/skills';

function Skills() {
  return (
    <div className="flex flex-col items-center gap-8 w-11/12 mx-auto xl:w-[1000px] lg:mx-auto">
      <h2 className="text-2xl font-medium lg:self-start">.skills()</h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 w-full">
        <SkillsContainer skills={skills.frontend} />
        <SkillsContainer skills={skills.mobile} />
        <SkillsContainer skills={skills.backend} />
        <SkillsContainer skills={skills.languages} />
      </div>
    </div>
  );
}

export default Skills;
