import { useState } from 'react';

const Tracker = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };

  const handleExpenseSubmit = (e: any) => {
    e.preventDefault();

    setAmount('');
    setCategory('');
    setDescription('');
    setDate('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Expense Tracker</h2>
        <form onSubmit={handleExpenseSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1 text-gray-900">
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
            <label htmlFor="category" className="block mb-1 text-gray-900">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white"
              placeholder="Enter category"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 text-gray-900">
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
            <label htmlFor="date" className="block mb-1 text-gray-900">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium bg-blue-500 rounded text-white hover:bg-blue-600 focus:outline-none"
          >
            Log Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tracker;
