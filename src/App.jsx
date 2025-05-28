import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./assets/components/Login";
import Signup from "./assets/components/Signup";
import Dashboard from "./assets/components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on app load
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user && user.token) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
      <MantineProvider>
        {
          <Router>
            <Routes>
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />
                }
              />
              <Route
                path="/dashboard"
                element={
                  isAuthenticated ? (
                    <Dashboard setIsAuthenticated={setIsAuthenticated} />

                    
                  ) : (<div>
                  
                    <Navigate to="/login" />
                    
              
                  </div>
                  )
                }
              />
              <Route
                path="/"
                element={
                  <Navigate to={isAuthenticated ? "/dashboard" : "/login"} />
                }
              />
            </Routes>
          </Router>
        }
      </MantineProvider>
    </>
  );
}

export default App;
