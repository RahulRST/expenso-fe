import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
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
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
