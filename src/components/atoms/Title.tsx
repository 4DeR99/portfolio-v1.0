import React from 'react';

function Title({ title }: { title: string }) {
  return (
    <h1 className="text-center text-3xl font-semibold lg:text-5xl">{title}</h1>
  );
}

export default Title;
