import React from 'react';
import './Card.module.css';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white p-6 rounded-lg shadow-sm border border-gray-200';
  const hoverClasses = hover ? 'hover:shadow-md transition' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
