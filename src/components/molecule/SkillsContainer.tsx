import { Skill } from 'assets/skills';
import Container from 'components/atoms/Container';
import SkillItem from 'components/atoms/SkillItem';
import React from 'react';

interface SkillsContainerProps {
  skills: Skill[];
}

function SkillsContainer({ skills }: SkillsContainerProps) {
  return (
    <Container
      borderColor="border-tertiary"
      height="h-[136px]"
      padding="px-[30px]">
      <ul className="flex grow items-center justify-evenly lg:justify-between lg:gap-6 xl:gap-8">
        {skills.map((skill, index) => (
          <SkillItem key={index} src={skill.icon} alt={skill.name} />
        ))}
      </ul>
    </Container>
  );
}

export default SkillsContainer;
