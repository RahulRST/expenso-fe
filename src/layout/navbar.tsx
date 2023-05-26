import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg"

const Navbar: React.FC = () => {
    const navigate = useNavigate();
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <Link to="/home">
              <img
                className="h-20 w-20"
                src={Logo}
                alt="Logo"
              />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
                  to="/reports" 
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reports
                </Link>
                <Link
                  to="/notifications" 
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Notifications
                </Link>
                <Link
                  to="/reminder" 
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reminder
                </Link>
                <Link
                  to="/budget" 
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Budget
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a
              onClick={() => {navigate("/")}}
              className="text-gray-300 hover:text-white px-4"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
