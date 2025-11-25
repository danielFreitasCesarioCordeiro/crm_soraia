import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './DataPage.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pendente',
    priority: 'média',
    dueDate: '',
    relatedTo: 'none',
    relatedId: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        relatedId: formData.relatedId || undefined
      };
      
      if (editingId) {
        await api.put(`/tasks/${editingId}`, dataToSend);
      } else {
        await api.post('/tasks', dataToSend);
      }
      fetchTasks();
      resetForm();
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
    }
  };

  const handleEdit = (task) => {
    setFormData({
      ...task,
      dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : ''
    });
    setEditingId(task._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar esta tarefa?')) {
      try {
        await api.delete(`/tasks/${id}`);
        fetchTasks();
      } catch (error) {
        console.error('Erro ao deletar tarefa:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      status: 'pendente',
      priority: 'média',
      dueDate: '',
      relatedTo: 'none',
      relatedId: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    const colors = {
      'pendente': '#3498db',
      'em progresso': '#f39c12',
      'concluída': '#27ae60',
      'cancelada': '#95a5a6'
    };
    return colors[status] || '#95a5a6';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'baixa': '#95a5a6',
      'média': '#3498db',
      'alta': '#e67e22',
      'urgente': '#e74c3c'
    };
    return colors[priority] || '#95a5a6';
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="data-page">
      <div className="page-header">
        <h1>Tarefas</h1>
        <button onClick={() => setShowForm(!showForm)} className="btn-add">
          {showForm ? 'Cancelar' : '+ Nova Tarefa'}
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h2>{editingId ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
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
                <label>Data de Vencimento</label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="pendente">Pendente</option>
                  <option value="em progresso">Em Progresso</option>
                  <option value="concluída">Concluída</option>
                  <option value="cancelada">Cancelada</option>
                </select>
              </div>
              <div className="form-group">
                <label>Prioridade</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                >
                  <option value="baixa">Baixa</option>
                  <option value="média">Média</option>
                  <option value="alta">Alta</option>
                  <option value="urgente">Urgente</option>
                </select>
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
        {tasks.length === 0 ? (
          <p className="empty-state">Nenhuma tarefa cadastrada ainda.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Vencimento</th>
                <th>Prioridade</th>
                <th>Status</th>
                <th>Atribuído a</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.title}</td>
                  <td>
                    {task.dueDate 
                      ? new Date(task.dueDate).toLocaleDateString('pt-BR')
                      : '-'
                    }
                  </td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getPriorityColor(task.priority) }}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(task.status) }}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td>{task.assignedTo?.name || '-'}</td>
                  <td>
                    <button onClick={() => handleEdit(task)} className="btn-edit">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(task._id)} className="btn-delete">
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

export default Tasks;
