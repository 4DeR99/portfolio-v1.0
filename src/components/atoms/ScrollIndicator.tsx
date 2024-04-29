import React, { useEffect, useRef } from 'react';
import 'assets/styles/ScrollIndicator.css';

interface ScrollIndicatorProps {
  className?: string;
}

function ScrollIndicator({ className }: ScrollIndicatorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = React.useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { top } = scrollRef.current.getBoundingClientRect();
        setHidden(top < 400);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`mouse-scroll ${className} ${hidden ? 'invisible' : ''}`}
      ref={scrollRef}
    />
  );
}

export default ScrollIndicator;
