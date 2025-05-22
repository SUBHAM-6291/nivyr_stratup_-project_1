'use client';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2 logo-container w-40 h-28 sm:w-44 sm:h-32 ml-6">
      <img
        src="/logo/main.png"
        alt="Main Logo"
        className="w-9 h-16 sm:w-10 sm:h-20 object-contain logo-placeholder"
      />
      <span className="text-xl sm:text-2xl font-medium font-inter not-italic text-center">
        Tala Prattoy
      </span>
    </div>
  );
};

export default Logo;