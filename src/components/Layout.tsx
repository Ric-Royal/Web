import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Ric-Royal</div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/portfolio" label="Portfolio" />
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/contact" label="Contact" />
            <NavItem to="/resume" label="Resume" />
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <NavItem to="/" label="Home" onClick={toggleMobileMenu} />
            <NavItem to="/about" label="About" onClick={toggleMobileMenu} />
            <NavItem to="/portfolio" label="Portfolio" onClick={toggleMobileMenu} />
            <NavItem to="/blog" label="Blog" onClick={toggleMobileMenu} />
            <NavItem to="/contact" label="Contact" onClick={toggleMobileMenu} />
            <NavItem to="/resume" label="Resume" onClick={toggleMobileMenu} />
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) =>
      isActive
        ? 'text-purple-500 font-bold block px-4 py-2'
        : 'text-gray-400 hover:text-purple-500 block px-4 py-2'
    }
  >
    {label}
  </NavLink>
);

export default Layout; 