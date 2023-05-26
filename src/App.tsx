import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Login from "./pages/login";
import Tracker from "./pages/tracker";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/dashboard" />
      </Routes>
    </Router>
  )
}

export default App
