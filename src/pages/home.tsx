
const ExpenseTracker = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <h3 className="text-2xl font-bold mb-4 text-orange-500">Expense Tracker</h3>
      {/* Add your expense tracking components and functionality here */}
    </div>
  );
};

const BudgetSummary = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <h3 className="text-2xl font-bold mb-4 text-orange-500">Budget Summary</h3>
      {/* Add your budget summary components and functionality here */}
    </div>
  );
};

const FinancialReports = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <h3 className="text-2xl font-bold mb-4 text-orange-500">Financial Reports</h3>
      {/* Add your financial reports components and functionality here */}
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">Welcome to Your Dashboard</h2>
        <p className="text-gray-300 mb-8">
          Here, you can track your expenses, set budgets, and manage your financial activities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ExpenseTracker />
          <BudgetSummary />
          <FinancialReports />
        </div>
      </div>
    </div>
  );
};

export default Home;
