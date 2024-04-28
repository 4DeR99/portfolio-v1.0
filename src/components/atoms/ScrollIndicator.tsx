import React from 'react';
import 'assets/styles/ScrollIndicator.css';

interface ScrollIndicatorProps {
  className?: string;
}

function ScrollIndicator({ className }: ScrollIndicatorProps) {
  return <div className={`mouse-scroll ${className}`} />;
}

export default ScrollIndicator;
