import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm">
        <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={handleShowPasswordToggle}
              >
                {showPassword ? (
                  <svg
                    className="fill-current h-4 w-4 text-gray-300 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a7 7 0 00-7 7c0 2.727 1.567 5.724 3.704 7.77a.5.5 0 00.792 0C11.433 15.724 13 12.727 13 10a7 7 0 00-7-7zm5.146 7.146a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 13.586l4.146-4.147a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 5a5 5 0 100 10 5 5 0 000-10zm0 9a4 4 0 100-8 4 4 0 000 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current h-4 w-4 text-gray-300 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.364 9.8a1.5 1.5 0 01.636.2l1.537-1.538a9.95 9.95 0 01-2.941-4.263A9.992 9.992 0 0110 2a9.992 9.992 0 01-3.596.198 9.95 9.95 0 01-2.942 4.263l1.537 1.538a1.5 1.5 0 01.635-.2A7.982 7.982 0 0110 6c1.943 0 3.78.705 5.182 1.98zM10 14a7.982 7.982 0 01-5.182-1.98A6.5 6.5 0 0010 17.5a6.5 6.5 0 005.182-3.48A7.982 7.982 0 0110 14z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M9.865 7.865a2 2 0 112.828 2.828 2 2 0 01-2.828-2.828zM10 10a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleFormSubmit}
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800 cursor-pointer"
              to="register"
            >
              Register
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Expenso. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
