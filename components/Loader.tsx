'use client';

import React from 'react';
import clsx from 'clsx';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loader = ({ size = 'md' }: LoaderProps) => {
  const sizeStyles = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          'animate-spin rounded-full border-4 border-gray-300 border-t-brand-primary',
          sizeStyles[size]
        )}
      ></div>
    </div>
  );
};

export default Loader;
