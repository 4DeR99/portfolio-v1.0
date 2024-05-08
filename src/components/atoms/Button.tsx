import React from 'react';

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({ buttonText, onClick, children }: ButtonProps) {
  if (children) {
    return (
      <button
        onClick={onClick}
        className="px-6 py-3 border-primary border-[2px] hover:bg-primary rounded-lg">
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 border-primary border-[2px] hover:bg-primary rounded-lg">
      {buttonText}
    </button>
  );
}

export default Button;
