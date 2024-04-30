import React from 'react';

function Button({ buttonText }: { buttonText: string }) {
  return (
    <button className="px-6 py-3 border-primary border-[2px] hover:bg-primary rounded-lg">
      {buttonText}
    </button>
  );
}

export default Button;
