import React, { useState } from 'react';
import { Chart, BarElement, LinearScale, CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

Chart.register(BarElement, LinearScale, CategoryScale);

const Budget: React.FC = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        label: 'Budget Progress',
        data: [75, 50, 100, 80, 60],
        backgroundColor: 'rgba(255, 159, 64, 0.8)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Budget Management</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="period" className="block mb-2">
              Period
            </label>
            <select
              id="period"
              value={period}
              onChange={handlePeriodChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none"
              required
            >
              <option value="">Select Period</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium bg-orange-500 rounded text-white hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          >
            Add Budget
          </button>
        </form>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Budget Progress</h3>
          <div className="w-full">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
