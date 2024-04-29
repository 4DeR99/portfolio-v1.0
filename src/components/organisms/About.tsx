import { constants } from 'assets/consts';
import React from 'react';

function About() {
  return (
    <div className="flex flex-col p-5 gap-8 min-h-screen">
      <div className="flex flex-col items-center w-11/12 mx-auto my-auto lg:w-3/6 lg:m-auto gap-[4em]">
        <h1 className="text-4xl font-extrabold">
          _about(<span className="text-primary">"ME"</span>)
        </h1>
        <div className="flex flex-col gap-4">
          {constants.about.split('-').map((paragraph, index) => (
            <p key={index} className="">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
