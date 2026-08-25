'use client';

import React from 'react';
import toast from 'react-hot-toast';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};

export default Form;
