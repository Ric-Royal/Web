import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <NavLink to="/" className="text-2xl font-bold text-purple-500 hover:text-purple-400 transition-colors" aria-label="Ric-Royal - Home">
            Ric-Royal
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem to="/" label="Home" description="Homepage and introduction" />
            <NavItem to="/about" label="About" description="Professional background and experience" />
            <NavItem to="/portfolio" label="Projects" description="Portfolio of completed projects" />
            <NavItem to="/blog" label="Blog" description="Articles and insights" />
            <NavItem to="/contact" label="Contact" description="Get in touch" />
            <NavItem to="/resume" label="Resume" description="Download resume" />
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/contact"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors duration-200"
              aria-label="Start a project - Contact form"
            >
              Start Project
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu} 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
            <div className="container mx-auto py-2">
              <NavItem to="/" label="Home" description="Homepage" onClick={toggleMobileMenu} />
              <NavItem to="/about" label="About" description="Background" onClick={toggleMobileMenu} />
              <NavItem to="/portfolio" label="Projects" description="Portfolio" onClick={toggleMobileMenu} />
              <NavItem to="/blog" label="Blog" description="Articles" onClick={toggleMobileMenu} />
              <NavItem to="/contact" label="Contact" description="Get in touch" onClick={toggleMobileMenu} />
              <NavItem to="/resume" label="Resume" description="Download CV" onClick={toggleMobileMenu} />
              <div className="px-4 py-2">
                <a
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors duration-200"
                  onClick={toggleMobileMenu}
                  aria-label="Start a project - Contact form"
                >
                  Start Project
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20" role="main">
        <Outlet />
      </main>
      
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Quick contact - Open contact form"
          title="Contact me"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  description?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, description, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) =>
      isActive
        ? 'text-purple-500 font-bold block px-4 py-2 transition-colors'
        : 'text-gray-300 hover:text-purple-400 block px-4 py-2 transition-colors'
    }
    aria-label={description ? `${label} - ${description}` : label}
    title={description}
  >
    {label}
  </NavLink>
);

export default Layout; 