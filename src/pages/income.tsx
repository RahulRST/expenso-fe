import React, { useState } from 'react';
import { IncomeCat } from '../data';
import axios from 'axios';

const IncomeTracker: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSource(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.valueAsDate!);
  };

  const handleIncomeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const income = await axios.post(import.meta.env.VITE_BACKEND_URL+"/track/addincome", {
      amount,
      source,
      description,
      date,
      },
      {
        headers: {
          "Authorization": "Bearer " + sessionStorage.getItem("expenso_token")
        }
      }
    )
    if(income.data.success){
      console.log("Income added successfully")
    }
    else{
      console.log("Error adding income")
    }
    setAmount(0);
    setSource('');
    setDescription('');
    setDate(new Date());
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Income Tracker</h2>
        <form onSubmit={handleIncomeSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1 text-gray-200">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white"
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="source" className="block mb-1 text-gray-200">
              Source
            </label>
            <select
              value={source}
              onChange={handleSourceChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white"
              required
            >
              <option value="">Select income source</option>
              {IncomeCat.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 text-gray-200">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white"
              placeholder="Enter description"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-1 text-gray-200">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date.toISOString().slice(0, 10)}
              onChange={handleDateChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium bg-orange-500 rounded text-white hover:bg-orange-600 focus:outline-none"
          >
            Log Income
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncomeTracker;
