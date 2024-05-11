import React from 'react';
import { projects } from 'assets/consts';
import ProjectItem from 'components/atoms/ProjectItem';
import Title from 'components/atoms/Title';

function Projects() {
  return (
    <div
      className="mt-[7rem] flex min-h-screen flex-col items-center justify-center gap-16 p-5"
      id="projects">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-8 lg:mx-auto lg:w-10/12 2xl:w-[1200px]">
        <Title title="_projects()" />
        <div className="flex w-full flex-wrap justify-center gap-5 lg:justify-start">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
