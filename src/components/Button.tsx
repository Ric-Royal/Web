import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, ariaLabel }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

export default Button; 