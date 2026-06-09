import React from 'react';
import radiuzLogo from '../../assets/radiuz-logo.png';

interface LogoProps {
  className?: string;
  iconSize?: string;
  textSize?: string;
}

export default function Logo({ 
  className = "flex items-center gap-2", 
  iconSize = "h-6"
}: LogoProps) {
  return (
    <div className={`${className} select-none items-center`}>
      <img
        src={radiuzLogo}
        alt="Radiuz"
        className={`${iconSize} w-auto shrink-0`}
      />
    </div>
  );
}
