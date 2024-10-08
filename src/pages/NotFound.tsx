import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
    <p className="mb-4">The page you are looking for does not exist.</p>
    <Link to="/" className="text-purple-500 hover:text-purple-700">
      Go back to Home
    </Link>
  </div>
);

export default NotFound;
