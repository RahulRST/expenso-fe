import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Expense from "./pages/expense";
import Budget from "./pages/budget";
import Reminder from "./pages/reminder";
import Income from "./pages/income";
import Notifications from "./pages/notifications";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Layout from "./layout";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout><Outlet /></Layout>}>
          <Route path="/home" element={<Home />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/income" element={<Income />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
