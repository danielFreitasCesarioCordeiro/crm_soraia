import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Leads from './pages/Leads';
import Deals from './pages/Deals';
import Tasks from './pages/Tasks';
import Layout from './components/Layout';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? <Navigate to="/dashboard" /> : children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/login" 
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />
          <Route 
            path="/register" 
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } 
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Layout>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/leads" element={<Leads />} />
                    <Route path="/deals" element={<Deals />} />
                    <Route path="/tasks" element={<Tasks />} />
                  </Routes>
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
