import axios from "axios";
import { useEffect, useState } from "react";
import { Chart, BarElement, LinearScale, CategoryScale } from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import { ExpenseCat, IncomeCat } from "../data";
import { useNavigate } from "react-router-dom";

Chart.register(BarElement, LinearScale, CategoryScale);


const Expense: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date>(new Date());

  const [ info, setInfo ] = useState<any>([]);

  const navigate = useNavigate();


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
    try
    {
      e.preventDefault();
      if(amount === 0 || category === '' || description === '')
      {
        setInfo('Please fill all the fields')
      }
      else
      {
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
          setInfo("Refresh the page to see the changes")
          navigate("/home")
        }
        else{
          setInfo("Error adding expense")
        }
      }
    }
    catch(err: any)
    {
      console.log(err)
      setInfo(err.response.data.message)
    }
    finally
    {
      setAmount(0);
      setCategory('');
      setDescription('');
      setDate(new Date());
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900">
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
            />
          </div>
          <div className="mb-4">
            <p className="text-red-500">{info}</p>
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

const Income: React.FC = () => {
  const [ amount, setAmount ] = useState(0);
  const [ source, setSource ] = useState('');
  const [ description, setDescription ] = useState('');
  const [date, setDate] = useState(new Date());
  const [ info, setInfo ] = useState<any>([]);
  const navigate = useNavigate();

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
    try
    {
      e.preventDefault();
      if(amount === 0 || source === '' || description === '')
      {
        setInfo('Please fill all the fields')
      }
      else
      {
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
          setInfo("Refresh the page to see the changes")
          navigate("/home")
        }
        else{
          setInfo("Error adding income")
        }
      }
    }
    catch(err: any)
    {
      console.log(err)
      setInfo(err.response.data.message)
    }
    finally
    {
      setAmount(0);
      setSource('');
      setDescription('');
      setDate(new Date());
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#42a2a5]">Income Tracker</h2>
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
            />
          </div>
          <div className="mb-4">
            <p className="text-red-500">{info}</p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium bg-[#42a2a5] rounded text-white hover:bg-[#2f8285] focus:outline-none"
          >
            Log Income
          </button>
        </form>
      </div>
    </div>
  );
};

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
      let totalExpense = 0;
      let maxAmount = 0;

      expenseData.forEach((expense: any) => {
        if(expense.amount > maxAmount){
          maxAmount = expense.amount
        }
        totalExpense = totalExpense + expense.amount
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
        <div className="w-96">
          <Bar data={data} options={options} />
          <h2 className="text-lg text-center font-bold mb-4 text-orange-500">Total Expense: {totalExpense}</h2>
        </div>
      );
    }

    const IncomeChart = () => {

      let categories: any = [];
      let amounts: any = [];
      let maxAmount = 0;
      let totalIncome = 0;

      incomeData.forEach((income: any) => {
        if(income.amount > maxAmount){
          maxAmount = income.amount
        }
        totalIncome = totalIncome + income.amount
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
        <div className="w-96">
          <Bar data={data} options={options} />
          <h2 className="text-lg font-bold text-center text-[#42a2a5] mt-4">Total Income: {totalIncome}</h2>
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
          <h3 className="text-2xl font-bold mb-4 text-[#42a2a5]">Income Analytics</h3>
          <IncomeChart />
        </div>
      );
    };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto items-center py-8 px-4">
        <h2 className="text-4xl text-center font-bold text-white mb-4">Welcome to Your Dashboard</h2>
        <p className="text-gray-300 text-center mb-8">
          This gives you the graphical representation of your budget and expenses.
        </p>
        <div className="flex flex-col items-center justify-around flex-wrap gap-10">
          <div className="flex flex-row flex-wrap gap-10">
            {/* <h2 className="text-2xl text-center font-bold text-white mb-4">Analytics</h2> */}
            <ExpenseAnalytics />
            <IncomeAnalytics />
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap gap-4">
            <Expense />
            <Income />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
