import React, { useState, useEffect } from 'react';
import { Chart, BarElement, LinearScale, CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

Chart.register(BarElement, LinearScale, CategoryScale);

const Analytics: React.FC = () => {
  
  const [ expenseData, setExpenseData ] = useState<any[]>([]);
  const [ incomeData, setIncomeData ] = useState<any[]>([]);

  useEffect(() => {
    const getBudget = async () => {
      const budget = await axios.get(import.meta.env.VITE_BACKEND_URL+"/fetch/analytics", {
        headers: {
          "Authorization": "Bearer " + sessionStorage.getItem("expenso_token")
        }
      })
      if(budget.data.success){
        console.log("Budget fetched successfully",budget.data)
        setExpenseData(budget.data.expenses)
        setIncomeData(budget.data.incomes)
      }
      else{
        console.log("Error fetching budget")
      }
    }
    getBudget()
  }, [])

  const ExpenseChart = () => {

    let categories: any = [];
    let amounts: any = [];
    let maxAmount = 0;

    expenseData.forEach((expense: any) => {
      if(expense.amount > maxAmount){
        maxAmount = expense.amount
      }
      categories.push(expense.description)
      amounts.push(expense.amount)
    })

    const data = {
      labels: categories,
      datasets: [
        {
          label: 'Expense Progress',
          data: amounts,
          backgroundColor: 'rgba(255, 159, 64, 0.8)',
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          max: maxAmount,
          ticks: {
            stepSize: maxAmount/10,
          },
        },
      },
    };

    return (
      <div className="w-full">
        <h3 className="text-lg font-bold mb-4">Expense Progress</h3>
        <Bar data={data} options={options} />
      </div>
    );
  }

  const IncomeChart = () => {

    let categories: any = [];
    let amounts: any = [];
    let maxAmount = 0;
    incomeData.forEach((income: any) => {
      if(income.amount > maxAmount){
        maxAmount = income.amount
      }
      categories.push(income.description)
      amounts.push(income.amount)
    })

    const data = {
      labels: categories,
      datasets: [
        {
          label: 'Income Progress',
          data: amounts,
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          max: maxAmount,
          ticks: {
            stepSize: maxAmount/10,
          },
        },
      },
    };
    
    return (
      <div className="w-full">
        <h3 className="text-lg font-bold mb-4">Income Progress</h3>
        <Bar data={data} options={options} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl text-orange-500 text-center font-bold mb-6">Budget Analytics</h2>
        <div className="mt-8">
          <ExpenseChart />
          <IncomeChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
