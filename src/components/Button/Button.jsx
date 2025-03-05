import React from 'react';
import './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'rounded-md font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-[#224b7a] text-white hover:bg-[#1b3e66]',
    secondary: 'border border-[#224b7a] text-[#224b7a] hover:bg-[#e6f0fa]',
    text: 'text-blue-600 hover:text-blue-800'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;