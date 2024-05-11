import React from 'react';
import SkillsContainer from './SkillsContainer';
import { skills } from 'assets/skills';

function Skills() {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center gap-8 lg:mx-auto xl:w-[1000px]">
      <h2 className="text-2xl font-medium lg:self-start">.skills()</h2>
      <div className="flex w-full flex-col gap-2 lg:flex-row lg:flex-wrap">
        <SkillsContainer skills={skills.frontend} />
        <SkillsContainer skills={skills.mobile} />
        <SkillsContainer skills={skills.backend} />
        <SkillsContainer skills={skills.languages} />
      </div>
    </div>
  );
}

export default Skills;
