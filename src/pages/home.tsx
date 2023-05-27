import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Home = () => {
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

    const ExpenseAnalytics = () => {
      return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">Expense Analytics</h3>
          <ExpenseChart />
        </div>
      );
    };
    
    const IncomeAnalytics = () => {
      return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">Income Analytics</h3>
          <IncomeChart />
        </div>
      );
    };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">Welcome to Your Dashboard</h2>
        <p className="text-gray-300 mb-8">
          This gives you the graphical representation of your budget and expenses.
        </p>
        <div className="flex flex-row flex-wrap gap-4">
          <ExpenseAnalytics />
          <IncomeAnalytics />
        </div>
      </div>
    </div>
  );
};

export default Home;
