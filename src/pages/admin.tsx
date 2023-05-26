import React, { useEffect, useState } from 'react';
import { fetchExpenses, fetchUsers, approveExpense } from '../api'; // Assuming you have API functions for fetching expenses, users, and approving expenses

const Admin: React.FC = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Fetch expenses and users from the API
    const fetchData = async () => {
      const fetchedExpenses = await fetchExpenses();
      setExpenses(fetchedExpenses);

      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    fetchData();
  }, []);

  const handleExpenseApproval = async (expenseId: string) => {
    // Approve the expense by calling the API function
    await approveExpense(expenseId);

    // Update the expenses state to reflect the approved expense
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => {
        if (expense.id === expenseId) {
          return { ...expense, approved: true };
        }
        return expense;
      })
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Admin Dashboard</h2>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-orange-500">Expenses</h3>
          {expenses.length > 0 ? (
            <ul className="space-y-4">
              {expenses.map((expense) => (
                <li key={expense.id} className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-300">{expense.title}</p>
                    <p className="text-gray-400">{expense.amount}</p>
                    <p className="text-gray-400">{expense.date}</p>
                  </div>
                  {!expense.approved && (
                    <button
                      className="px-4 py-2 text-sm font-medium bg-blue-500 rounded text-white hover:bg-blue-600 focus:outline-none"
                      onClick={() => handleExpenseApproval(expense.id)}
                    >
                      Approve
                    </button>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">No expenses to approve.</p>
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 text-orange-500">User Management</h3>
          {users.length > 0 ? (
            <ul className="space-y-4">
              {users.map((user) => (
                <li key={user.id} className="flex items-start">
                  <p className="text-gray-300">{user.name}</p>
                  <p className="text-gray-400">{user.email}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
