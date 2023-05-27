import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Notification, AddNotification } from './notification';
import Logo from '../assets';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Link to="/home">
                <Logo />
              </Link>
            </div>
          </div>
          <div className="flex gap-x-4 justify-center items-center">
            <AddNotification />
            <Notification />
            <button
              onClick={handleLogout}
              className="hover:text-gray-300 bg-orange-500 hover:bg-transparent text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
