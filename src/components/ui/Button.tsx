import React from 'react';
import { CONTACT } from '../../utils/constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon, 
  children, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg flex items-center gap-3 transition-all";
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
    secondary: "border border-gray-700 text-gray-300 hover:bg-gray-800"
  };

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        <span className="flex-1">{children}</span>
        {icon && <span className="flex-shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="flex-1">{children}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};