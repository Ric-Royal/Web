import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-300 hover:text-white focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
};

export default ThemeToggle; 