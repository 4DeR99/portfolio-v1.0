import { about } from 'assets/consts';
import React from 'react';

function About() {
  return (
    <div className="flex min-h-screen flex-col gap-8 p-5" id="about">
      <div className="mx-auto my-auto flex w-11/12 flex-col items-center gap-[4em] lg:m-auto lg:w-3/6">
        <h1 className="text-3xl font-extrabold lg:text-5xl">
          _about(<span className="text-primary">"ME"</span>)
        </h1>
        <div className="flex flex-col gap-4">
          {about.split('-').map((paragraph, index) => (
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
