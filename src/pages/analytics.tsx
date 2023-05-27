import React, { useState, useEffect } from 'react';
import { Chart, BarElement, LinearScale, CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

Chart.register(BarElement, LinearScale, CategoryScale);

const Analytics: React.FC = () => {
  
  const [categories, setCategories] = useState<string[]>([]);
  const [amounts, setAmounts] = useState<number[]>([]);

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

  useEffect(() => {
    const getBudget = async () => {
      const budget = await axios.get(import.meta.env.VITE_BACKEND_URL+"/budget/getbudget", {
        headers: {
          "Authorization": "Bearer " + sessionStorage.getItem("expenso_token")
        }
      })
      if(budget.data.success){
        console.log("Budget fetched successfully",budget.data)
        setCategories(budget.data.budget.categories)
        setAmounts(budget.data.budget.amounts)
      }
      else{
        console.log("Error fetching budget")
      }
    }
    getBudget()
  }, [])


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
