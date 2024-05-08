import React from 'react';
import Skills from 'components/molecule/Skills';
import Experience from 'components/molecule/Experience';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';

function Resume() {
  return (
    <div
      className="flex flex-col p-5 gap-16 items-center min-h-screen"
      id="resume">
      <Title title="_resume()" />
      <div className="flex flex-col gap-40">
        <Skills />
        <Experience />
      </div>
      <Button buttonText="">
        <a href="/Mohammed_Reda_Oulmadou.pdf" target="_blank" rel="noreferrer">
          _resume.get()
        </a>
      </Button>
    </div>
  );
}

export default Resume;
