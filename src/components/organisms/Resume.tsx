import Skills from 'components/molecule/Skills';
import React from 'react';

function Resume() {
  return (
    <div className="flex flex-col p-5 gap-16">
      <h1 className="text-4xl font-extrabold text-center">_resume()</h1>
      <Skills />
    </div>
  );
}

export default Resume;
