import React from 'react';

function Title({ title }: { title: string }) {
  return (
    <h1 className="text-3xl lg:text-5xl font-semibold text-center">{title}</h1>
  );
}

export default Title;
