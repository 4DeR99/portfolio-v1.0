import React from 'react';
import ScrollIndicator from 'components/atoms/ScrollIndicator';

function Hero() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto my-auto flex w-11/12 flex-col lg:m-auto lg:w-3/6">
        <div className="flex flex-row items-center text-primary">
          <div className="bottom-[-12px] w-8 border-t border-quaternary" />
          <span className="ml-2 text-quaternary">Hi</span>
        </div>
        <h1 className="my-4 text-4xl font-extrabold">
          I'm <span className="text-primary">4DeR</span>
        </h1>
        <div className="text-lg text-secondaryText">
          My name is{' '}
          <span className="text-primaryText">Mohammed Reda Oulmadou</span> and
          I'm a <span className="text-primaryText">software engineer</span>{' '}
          specializing in <span className="text-primaryText">mobile</span> and{' '}
          <span className="text-primaryText">web development</span>. I'm a
          passionate problem solver and a fast learner and I enjoy competitive
          programming.
        </div>
      </div>
      <ScrollIndicator className="mb-[6rem] self-center lg:mb-8" />
    </div>
  );
}

export default Hero;
