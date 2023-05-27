import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/home">
                <img className="h-20 w-20" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link
                  to="/expense"
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Expense Tracker
                </Link>
                <Link
                  to="/income"
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Income Tracker
                </Link>
                <Link
                  to="/notifications"
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Notifications
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-300 hover:text-white px-4 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white px-4"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/expense"
              className="text-gray-300 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Expense Tracker
            </Link>
            <Link
              to="/income"
              className="text-gray-300 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Income Tracker
            </Link>
            <Link
              to="/notifications"
              className="text-gray-300 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Notifications
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
