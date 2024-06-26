import { oraTech } from 'assets/consts';
import Container from 'components/atoms/Container';
import HoverButton from 'components/atoms/HoverButton';
import React from 'react';

function OraTech() {
  return (
    <Container
      borderColor="border-secondary"
      width="lg:w-[70%] w-full"
      padding="p-4"
      margin="my-4">
      <div className="flex w-full flex-col gap-3">
        <h3 className="text-xl font-medium text-primary">{oraTech.position}</h3>
        <div className="flex justify-between">
          <p className="text-base">{oraTech.place}</p>
          <p className="text-sm lg:invisible">{oraTech.date}</p>
        </div>
        <p className="text-base text-secondaryText">{oraTech.description}</p>
        <div className="flex gap-2">
          <div className="flex flex-wrap justify-start gap-2">
            {oraTech.technologies.map((tech, index) => (
              <HoverButton
                key={index}
                buttonTitle={tech}
                hoverBg="hover:bg-primary"
                minWidth="min-w-[70px]"
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OraTech;
