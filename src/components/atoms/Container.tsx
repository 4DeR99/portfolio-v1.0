import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: string;
  borderColor: string;
  padding?: string;
}

function Container({
  children,
  height,
  width,
  borderColor,
  padding,
}: ContainerProps) {
  const className = `bg-secondaryBackground flex ${padding} ${height} ${width} ${borderColor} border-[2px]`;

  return <div className={className}>{children}</div>;
}

export default Container;
