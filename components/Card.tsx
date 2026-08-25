'use client';

import React from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={clsx('bg-white rounded-lg shadow-elevation-1 p-6', className)}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children }: CardProps) => {
  return (
    <div className={clsx('mb-4 pb-4 border-b border-gray-200', className)}>
      {children}
    </div>
  );
};

const CardContent = ({ className, children }: CardProps) => {
  return <div className={className}>{children}</div>;
};

const CardFooter = ({ className, children }: CardProps) => {
  return (
    <div className={clsx('mt-6 pt-4 border-t border-gray-200', className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };
