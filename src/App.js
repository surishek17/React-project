import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import AddSales from './pages/addSales';
import TOP from '../src/pages/top5'
import TodayRevenue from '../src/pages/todayRevenue'
import Login from '../src/pages/login'
import Register from '../src/pages/register'
import Logout from '../src/pages/logout'

function App() {
  return (
    <Router>
            <NavBar />
            <Routes>
                {/* route path for all the files */}
                <Route path="/" element={<AddSales />} />
                 <Route path="/top5" element={<TOP />} />
                <Route
                    path="/todayRevenue"
                    element={<TodayRevenue />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/logout"
                    element={<Logout />}
                />
              
            </Routes>
        </Router>
  );
}

export default App;

