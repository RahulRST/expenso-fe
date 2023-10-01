import axios from 'axios';
import React, { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try
    {
      e.preventDefault();
      if(username === '' || password === '' || name === '' || address === '' || contact === '')
      {
        setError('Please fill all the fields')
      }
      else
      {
        const data = {
          username,
          password,
          name,
          address,
          contact,
        };
        const request = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/register', data);
        if(request.status === 200) {
          navigate('/');
        }
        else{
          console.log(request.data)
          setError(request.data.message)
        }
      }

    }
    catch(err: any)
    {
      console.log(err.response.data.message)
      setError(err.response.data.message)
    }
    finally
    {
      setUsername('');
      setPassword('');
      setName('');
      setAddress('');
      setContact('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 text-orange-500">Expenso</h2>
      <h2 className="text-xl font-bold mb-4 text-white">Register</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
      
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1 text-white">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
              placeholder="Enter address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block mb-1 text-white">
              Contact
            </label>
            <input
              type="number"
              id="contact"
              value={contact}
              onChange={handleContactChange}
              className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
              placeholder="Enter contact"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
              placeholder="Enter username"
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
          <div className='flex flex-row justify-between items-center'>
            <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-orange-500 rounded text-white hover:bg-orange-600 focus:outline-none"
            >
                Register
            </button>
            <Link
                className="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800 cursor-pointer"
                to="/"
                >
                Login
            </Link>
          </div>
        </form>
      </div>
      <p className="text-center my-4 text-gray-500 text-xs">
          &copy;2023 Expenso. All rights reserved.
      </p>
    </div>
  );
};

export default Register;
