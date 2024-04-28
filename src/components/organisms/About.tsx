import { constants } from 'assets/consts';
import React from 'react';

function About() {
  console.log(constants);
  return (
    <div className="flex flex-col p-5 gap-8">
      <div className="flex flex-col items-center w-11/12 mx-auto my-auto lg:w-3/6 lg:m-auto gap-[5em]">
        <h1 className="text-4xl font-extrabold">
          _about(<span className="text-primary">"ME"</span>)
        </h1>
        <div className="flex flex-col gap-10">
          <p>{constants.leet}</p>
          <p>{constants.oraTech}</p>
          <p>{constants.leavingOra}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
