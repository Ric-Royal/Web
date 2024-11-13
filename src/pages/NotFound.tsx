import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome } from 'react-icons/fa';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4">
    <h2 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h2>
    <p className="mb-8 text-gray-400">The page you are looking for does not exist.</p>
    
    {/* Search Form */}
    <form className="flex mb-6 w-full max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Search"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Search"
      >
        <FaSearch />
      </button>
    </form>

    {/* Suggested Links */}
    <div className="space-x-4">
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-300"
      >
        <FaHome className="mr-2" />
        Go Home
      </Link>
      <Link
        to="/about"
        className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-300"
      >
        About
      </Link>
    </div>
  </div>
);

export default NotFound; 