import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Login from "./pages/login";
import Tracker from "./pages/tracker";
import Budget from "./pages/budget";
import Reminder from "./pages/reminder";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/reminder" element={<Reminder />} />
      </Routes>
    </Router>
  )
}

export default App
