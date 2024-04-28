import React from 'react';
import ScrollIndicator from 'components/atoms/ScrollIndicator';

function Hero() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col w-11/12 mx-auto my-auto lg:w-3/6 lg:m-auto">
        <div className="z-20 flex flex-row text-primary">
          <div className="w-8 border-t border-quaternary bottom-[-12px] relative" />
          <span className="ml-2 text-quaternary">Hi</span>
        </div>
        <h1 className="text-4xl my-4">
          I'm <span className="text-primary">4DeR</span>
        </h1>
        <div className="text-secondaryText text-lg">
          My name is{' '}
          <span className="text-primaryText">Mohammed Reda Oulmadou</span> and
          I'm a <span className="text-primaryText">software engineer</span>{' '}
          specialized in <span className="text-primaryText">mobile</span> and{' '}
          <span className="text-primaryText">web development</span>. I'm a
          pationate problem solver and a fast learner and I enjoy competetive
          programing.
        </div>
      </div>
      <ScrollIndicator className="self-center mb-8" />
    </div>
  );
}

export default Hero;
