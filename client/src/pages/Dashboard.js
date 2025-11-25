import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    customers: 0,
    leads: 0,
    deals: 0,
    tasks: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [customers, leads, deals, tasks] = await Promise.all([
        api.get('/customers'),
        api.get('/leads'),
        api.get('/deals'),
        api.get('/tasks')
      ]);

      setStats({
        customers: customers.data.length,
        leads: leads.data.length,
        deals: deals.data.length,
        tasks: tasks.data.filter(t => t.status !== 'concluída').length
      });
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card customers">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>Clientes</h3>
            <p className="stat-number">{stats.customers}</p>
          </div>
        </div>
        <div className="stat-card leads">
          <div className="stat-icon">🎯</div>
          <div className="stat-info">
            <h3>Leads</h3>
            <p className="stat-number">{stats.leads}</p>
          </div>
        </div>
        <div className="stat-card deals">
          <div className="stat-icon">💼</div>
          <div className="stat-info">
            <h3>Negócios</h3>
            <p className="stat-number">{stats.deals}</p>
          </div>
        </div>
        <div className="stat-card tasks">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>Tarefas Pendentes</h3>
            <p className="stat-number">{stats.tasks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
