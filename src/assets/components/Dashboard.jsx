import About from "../Pages/About";
import Home from "../Pages/Home";
import Location from "../Pages/location";
import Services from "../Pages/services";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function Dashboard({ setIsAuthenticated }) {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user?.name}!</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      
      <main>
        <Home/>
        <About/>
      </main>
    </div>
  );
}

export default Dashboard;