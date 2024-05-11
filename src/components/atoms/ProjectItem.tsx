import React from 'react';
import Container from './Container';
import HoverButton from './HoverButton';
import { Project } from 'assets/consts';
import github from 'assets/icons/github.svg';
import link from 'assets/icons/link.svg';

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Container
      borderColor="border-secondaryBackground hover:border-primary"
      width="lg:w-[47%] xl:w-[32%] w-[80%]"
      padding="p-6"
      height="min-h-[300px]"
      margin="my-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-2xl font-medium">{project.title}</h1>
            <div className="flex gap-2">
              {project.github && (
                <img
                  src={github}
                  alt={project.title}
                  className="h-[20px] w-[20px] object-contain hover:cursor-pointer"
                  onClick={() => window.open(project.github, '_blank')}
                />
              )}
              {project.demo && (
                <img
                  src={link}
                  alt={project.title}
                  className="h-[20px] w-[20px] object-contain hover:cursor-pointer"
                  onClick={() => window.open(project.demo, '_blank')}
                />
              )}
            </div>
          </div>
          <p className="text-base text-secondaryText">{project.description}</p>
        </div>
        <div className="flex">
          <div className="mt-2 flex flex-wrap justify-start gap-1">
            {project.technologies.map((tech, index) => (
              <HoverButton
                key={index}
                buttonTitle={tech}
                hoverBg="hover:bg-primary"
                minWidth="min-w-[50px]"
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectItem;
