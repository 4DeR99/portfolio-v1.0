import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: string;
  borderColor: string;
}

function Container({ children, height, width, borderColor }: ContainerProps) {
  const className = `bg-secondaryBackground flex p-5 gap-8 ${height} ${width} border-${borderColor} border-[2px]`;

  return <div className={className}>{children}</div>;
}

export default Container;
