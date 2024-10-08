import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      <HoverNav />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      isActive
        ? 'text-purple-500 font-bold'
        : 'text-gray-400 hover:text-purple-500'
    }
  >
    {label}
  </NavLink>
);

const HoverNav: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 group">
      {/* The hover area and nav bar are within the same group */}
      <div className="relative">
        {/* Hover area */}
        <div className="w-full h-4 bg-transparent"></div>
        {/* Navigation bar */}
        <nav className="absolute top-0 left-0 w-full bg-gray-900 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <div className="flex justify-center space-x-4 p-4">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/portfolio" label="Portfolio" />
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/contact" label="Contact" />
            <NavItem to="/resume" label="Resume" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
