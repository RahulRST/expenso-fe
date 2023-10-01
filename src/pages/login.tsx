import axios from 'axios';
import React, { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [ error, setError ] = useState<string>('');

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (e: any) => {
    try
    {
      if(username === '' || password === '')
      {
        setError('Please fill all the fields')
      }
      else
      {
        e.preventDefault();
        
        const data = {
          username,
          password,
        };
        const request: any = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/login', data);
        
        if(request.data.success) {
          sessionStorage.setItem('expenso_token', request.data.token);
          navigate('/home');
        }
        else{
          console.log(request.data)
          setError(request.data.message)
          console.log(error)
        }
      }
    }
    catch(err: any)
    {
      setError(err.response.data.message)
      console.log(err)
    }
    finally
    {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm">
        <h2 className="text-3xl text-center font-bold mb-4 text-orange-500">Expenso</h2>
        <h2 className='text-xl text-center font-bold mb-4 text-white'>Login</h2>
        <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
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
                className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
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
                {showPassword ? ( <BsFillEyeSlashFill className="text-gray-300 cursor-pointer" />
                ) : (
                  <BsFillEyeFill className="text-gray-300 cursor-pointer" />  
                )}
              </div>
            </div>
            {error?<p className='text-red-500 text-xs italic'>{error}</p>:null}
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
