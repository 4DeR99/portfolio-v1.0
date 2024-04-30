import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: string;
  borderColor: string;
  padding?: string;
  margin?: string;
}

function Container({
  children,
  height,
  width,
  borderColor,
  padding,
  margin,
}: ContainerProps) {
  const className = `bg-secondaryBackground flex ${padding} ${margin} ${height} ${width} ${borderColor} border-[2px]`;

  return <div className={className}>{children}</div>;
}

export default Container;
