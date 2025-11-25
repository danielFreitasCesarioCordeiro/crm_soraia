import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './DataPage.css';

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    value: 0,
    customer: '',
    lead: '',
    stage: 'prospecção',
    probability: 10,
    expectedCloseDate: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [dealsRes, customersRes, leadsRes] = await Promise.all([
        api.get('/deals'),
        api.get('/customers'),
        api.get('/leads')
      ]);
      setDeals(dealsRes.data);
      setCustomers(customersRes.data);
      setLeads(leadsRes.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        customer: formData.customer || undefined,
        lead: formData.lead || undefined
      };
      
      if (editingId) {
        await api.put(`/deals/${editingId}`, dataToSend);
      } else {
        await api.post('/deals', dataToSend);
      }
      fetchData();
      resetForm();
    } catch (error) {
      console.error('Erro ao salvar negócio:', error);
    }
  };

  const handleEdit = (deal) => {
    setFormData({
      ...deal,
      customer: deal.customer?._id || '',
      lead: deal.lead?._id || '',
      expectedCloseDate: deal.expectedCloseDate ? new Date(deal.expectedCloseDate).toISOString().split('T')[0] : ''
    });
    setEditingId(deal._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este negócio?')) {
      try {
        await api.delete(`/deals/${id}`);
        fetchData();
      } catch (error) {
        console.error('Erro ao deletar negócio:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      value: 0,
      customer: '',
      lead: '',
      stage: 'prospecção',
      probability: 10,
      expectedCloseDate: '',
      description: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  const getStageColor = (stage) => {
    const colors = {
      'prospecção': '#3498db',
      'qualificação': '#9b59b6',
      'proposta': '#f39c12',
      'negociação': '#e67e22',
      'fechamento': '#1abc9c',
      'ganho': '#27ae60',
      'perdido': '#95a5a6'
    };
    return colors[stage] || '#95a5a6';
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="data-page">
      <div className="page-header">
        <h1>Negócios</h1>
        <button onClick={() => setShowForm(!showForm)} className="btn-add">
          {showForm ? 'Cancelar' : '+ Novo Negócio'}
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h2>{editingId ? 'Editar Negócio' : 'Novo Negócio'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Título *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Valor (R$) *</label>
                <input
                  type="number"
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: parseFloat(e.target.value) })}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Cliente</label>
                <select
                  value={formData.customer}
                  onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                >
                  <option value="">Selecione um cliente</option>
                  {customers.map((customer) => (
                    <option key={customer._id} value={customer._id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Lead</label>
                <select
                  value={formData.lead}
                  onChange={(e) => setFormData({ ...formData, lead: e.target.value })}
                >
                  <option value="">Selecione um lead</option>
                  {leads.map((lead) => (
                    <option key={lead._id} value={lead._id}>
                      {lead.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Estágio</label>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                >
                  <option value="prospecção">Prospecção</option>
                  <option value="qualificação">Qualificação</option>
                  <option value="proposta">Proposta</option>
                  <option value="negociação">Negociação</option>
                  <option value="fechamento">Fechamento</option>
                  <option value="ganho">Ganho</option>
                  <option value="perdido">Perdido</option>
                </select>
              </div>
              <div className="form-group">
                <label>Probabilidade (%)</label>
                <input
                  type="number"
                  value={formData.probability}
                  onChange={(e) => setFormData({ ...formData, probability: parseInt(e.target.value) })}
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Data Esperada de Fechamento</label>
                <input
                  type="date"
                  value={formData.expectedCloseDate}
                  onChange={(e) => setFormData({ ...formData, expectedCloseDate: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Descrição</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
              />
            </div>
            <div className="form-actions">
              <button type="button" onClick={resetForm} className="btn-secondary">
                Cancelar
              </button>
              <button type="submit" className="btn-primary">
                {editingId ? 'Atualizar' : 'Criar'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        {deals.length === 0 ? (
          <p className="empty-state">Nenhum negócio cadastrado ainda.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Cliente/Lead</th>
                <th>Estágio</th>
                <th>Probabilidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal._id}>
                  <td>{deal.title}</td>
                  <td>R$ {deal.value.toFixed(2)}</td>
                  <td>{deal.customer?.name || deal.lead?.name || '-'}</td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStageColor(deal.stage) }}
                    >
                      {deal.stage}
                    </span>
                  </td>
                  <td>{deal.probability}%</td>
                  <td>
                    <button onClick={() => handleEdit(deal)} className="btn-edit">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(deal._id)} className="btn-delete">
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Deals;
