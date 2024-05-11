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
        className="rounded-lg border-[2px] border-primary px-6 py-3 hover:bg-primary">
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="rounded-lg border-[2px] border-primary px-6 py-3 hover:bg-primary">
      {buttonText}
    </button>
  );
}

export default Button;
