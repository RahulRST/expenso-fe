import React, { useState } from 'react';
import { Chart, BarElement, LinearScale, CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

Chart.register(BarElement, LinearScale, CategoryScale);

const Analytics: React.FC = () => {
  
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState('');

  let data: any = {
    labels: [],
    datasets: [
      {
        label: 'Budget Progress',
        data: [],
        backgroundColor: 'rgba(255, 159, 64, 0.8)',
      },
    ],
  };

  const [categories, setCategories] = useState<string[]>([]);
  const [amounts, setAmounts] = useState<number[]>([]);


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
        <h2 className="text-3xl text-orange-500 font-bold mb-6">Budget Analytics</h2>
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

export default Analytics;
