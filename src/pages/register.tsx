import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');


  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
    e.preventDefault();

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
    }
    setUsername('');
    setPassword('');
    setName('');
    setAddress('');
    setContact('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Register</h2>
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
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block mb-1 text-white">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={handleContactChange}
              className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
              placeholder="Enter contact"
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 bg-gray-700 rounded text-white focus:outline-none"
              placeholder="Enter password"
              required
            />
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
    </div>
  );
};

export default Register;
