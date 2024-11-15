import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, href, className }) => (
  <a
    href={href}
    className={`inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 ${className}`}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <span className="ml-2">{label}</span>
  </a>
);

export default IconButton; 