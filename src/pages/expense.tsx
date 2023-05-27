import React, { useState } from 'react';
import { ExpenseCat } from '../data';
import axios from 'axios';

const Expense: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date>(new Date());

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.valueAsDate!);
  };

  const handleExpenseSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expense = await axios.post(import.meta.env.VITE_BACKEND_URL+"/track/addexpense", {
      amount,
      category,
      description,
      date,
      },
      {
        headers: {
          "Authorization": "Bearer " + sessionStorage.getItem("expenso_token")
        }
      }
    )
    if(expense.data.success){
      console.log("Expense added successfully")
    }
    else{
      console.log("Error adding expense")
    }

    setAmount(0);
    setCategory('');
    setDescription('');
    setDate(new Date());
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Expense Tracker</h2>
        <form onSubmit={handleExpenseSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1 text-gray-300">
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
            <label htmlFor="category" className="block mb-1 text-gray-300">
              Category
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white"
              required
            >
              <option value="">Select category</option>
              {ExpenseCat.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 text-gray-300">
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
            <label htmlFor="date" className="block mb-1 text-gray-300">
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
            Log Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default Expense;
