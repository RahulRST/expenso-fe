import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Login from "./pages/login";
import Tracker from "./pages/tracker";
import Budget from "./pages/budget";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  )
}

export default App
