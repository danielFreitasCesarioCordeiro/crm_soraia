import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">CRM Soraia</h1>
          <p className="hero-subtitle">
            Sistema completo de gestão de relacionamento com clientes
          </p>
          <p className="hero-description">
            Gerencie seus clientes, leads, negócios e tarefas em um só lugar.
            Open-source e totalmente gratuito.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-hero btn-primary">
              Começar Grátis
            </Link>
            <Link to="/login" className="btn-hero btn-secondary">
              Fazer Login
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <div className="floating-card card-1">📊</div>
            <div className="floating-card card-2">👥</div>
            <div className="floating-card card-3">💼</div>
            <div className="floating-card card-4">✅</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Funcionalidades Principais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Gestão de Clientes</h3>
              <p>
                Organize e gerencie todos os seus clientes em um só lugar.
                Mantenha histórico completo de interações.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Pipeline de Leads</h3>
              <p>
                Acompanhe seus leads desde o primeiro contato até a conversão.
                Visualize todo o funil de vendas.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Gestão de Negócios</h3>
              <p>
                Controle suas oportunidades de negócio com estágios customizáveis
                e previsão de receita.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Tarefas & Atividades</h3>
              <p>
                Organize suas tarefas por prioridade, defina prazos e
                acompanhe o progresso.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Dashboard Inteligente</h3>
              <p>
                Visualize métricas importantes em tempo real. Tome decisões
                baseadas em dados.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Segurança & Privacidade</h3>
              <p>
                Seus dados protegidos com autenticação JWT e criptografia.
                Total controle e privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Por que escolher o CRM Soraia?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">🆓</span>
              <h4>100% Gratuito</h4>
              <p>Open-source e sem custos ocultos</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <h4>Rápido & Eficiente</h4>
              <p>Interface moderna e responsiva</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎨</span>
              <h4>Fácil de Usar</h4>
              <p>Interface intuitiva e amigável</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🔧</span>
              <h4>Personalizável</h4>
              <p>Adapte às suas necessidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Pronto para começar?</h2>
          <p>Crie sua conta gratuitamente e comece a gerenciar seus clientes agora mesmo.</p>
          <Link to="/register" className="btn-cta">
            Criar Conta Grátis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CRM Soraia</h3>
              <p>Sistema de gestão de relacionamento com clientes open-source.</p>
            </div>
            <div className="footer-section">
              <h4>Produto</h4>
              <ul>
                <li><a href="#features">Funcionalidades</a></li>
                <li><a href="#benefits">Benefícios</a></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Registro</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Recursos</h4>
              <ul>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="#docs">Documentação</a></li>
                <li><a href="#api">API</a></li>
                <li><a href="#support">Suporte</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CRM Soraia. Open Source sob licença MIT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
