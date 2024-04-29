import React from 'react';
import Skills from 'components/molecule/Skills';
import Experience from 'components/molecule/Experience';

function Resume() {
  return (
    <div className="flex flex-col p-5 gap-16 items-center min-h-screen">
      <h1 className="text-4xl font-extrabold text-center">_resume()</h1>
      <div className="flex flex-col gap-40">
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default Resume;
