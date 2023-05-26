import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Login from "./pages/login";
import Expense from "./pages/expense";
import Budget from "./pages/budget";
import Reminder from "./pages/reminder";
import Income from "./pages/income";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/income" element={<Income />} />
      </Routes>
    </Router>
  )
}

export default App
