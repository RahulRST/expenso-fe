import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="/logo.png" // Replace with your app logo path
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/dashboard" // Replace with the appropriate link for your app
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="/expenses" // Replace with the appropriate link for your app
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Expenses
                </a>
                <a
                  href="/income" // Replace with the appropriate link for your app
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Income
                </a>
                <a
                  href="/reports" // Replace with the appropriate link for your app
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reports
                </a>
                <a
                  href="/notifications" // Replace with the appropriate link for your app
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Notifications
                </a>
                <a
                  href="/admin" // Replace with the appropriate link for your app
                  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Admin
                </a>
              </div>
            </div>
          </div>
          {/* Add additional elements like user profile, notifications, etc. */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
