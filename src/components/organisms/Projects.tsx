import React from 'react';
import { projects } from 'assets/consts';
import ProjectItem from 'components/atoms/ProjectItem';
import Title from 'components/atoms/Title';

function Projects() {
  return (
    <div className="flex flex-col p-5 gap-16 items-center justify-center min-h-screen mt-[7rem]">
      <div className="flex flex-col items-center gap-8 w-11/12 mx-auto lg:w-10/12 2xl:w-[1200px] lg:mx-auto">
        <Title title="_projects()" />
        <div className="flex flex-wrap w-full justify-center lg:justify-between">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
