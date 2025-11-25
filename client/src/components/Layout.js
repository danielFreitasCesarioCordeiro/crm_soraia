import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>CRM Soraia</h2>
          <p className="user-name">{user?.name}</p>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/dashboard" className={isActive('/dashboard')}>
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link to="/customers" className={isActive('/customers')}>
              👥 Clientes
            </Link>
          </li>
          <li>
            <Link to="/leads" className={isActive('/leads')}>
              🎯 Leads
            </Link>
          </li>
          <li>
            <Link to="/deals" className={isActive('/deals')}>
              💼 Negócios
            </Link>
          </li>
          <li>
            <Link to="/tasks" className={isActive('/tasks')}>
              ✅ Tarefas
            </Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-btn">
          🚪 Sair
        </button>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
