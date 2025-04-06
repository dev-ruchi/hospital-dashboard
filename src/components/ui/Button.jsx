import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = ''
}) => {
  const baseClasses = 'button';
  const variantClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    outline: 'button-outline',
    ghost: 'button-ghost',
  };
  
  const sizeClasses = {
    sm: 'button-sm',
    md: 'button-md',
    lg: 'button-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${className}
  `;
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
