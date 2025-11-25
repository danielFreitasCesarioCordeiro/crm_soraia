# CRM Soraia - Open Source 🚀

Um sistema CRM (Customer Relationship Management) completo e open-source construído com Node.js, Express, MongoDB e React. Interface moderna tipo site profissional.

## ✨ Funcionalidades

- 🏠 **Landing Page Profissional** - Página inicial estilo site moderno
- 👥 **Gestão de Clientes** - CRUD completo com informações detalhadas
- 🎯 **Gestão de Leads** - Pipeline de vendas com status e origem
- 💼 **Gestão de Negócios** - Controle de oportunidades e previsões
- ✅ **Gestão de Tarefas** - Organize atividades com prioridades
- 📊 **Dashboard Inteligente** - Métricas e estatísticas em tempo real
- 🔐 **Autenticação JWT** - Sistema seguro de login e registro
- 📱 **Design Responsivo** - Interface adaptável a qualquer dispositivo
- 🎨 **UI Moderna** - Gradientes, animações e componentes elegantes

## 🛠️ Tecnologias

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication

### Frontend
- React
- React Router
- Axios
- CSS Modules

## 📦 Instalação

### Pré-requisitos
- Node.js (v14 ou superior)
- MongoDB (local ou Atlas)

### Passos

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd crm_soraia
```

2. Instale as dependências:
```bash
npm run install-all
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações.

4. Inicie o MongoDB localmente (se não estiver usando Atlas)

5. Execute o projeto em modo desenvolvimento:
```bash
npm run dev
```

O backend estará rodando em `http://localhost:5000` e o frontend em `http://localhost:3000`.

## 🎨 Interface

O sistema possui uma interface moderna tipo site profissional:

- **Landing Page** (`/`) - Página inicial com apresentação do produto
- **Login** (`/login`) - Página de autenticação
- **Registro** (`/register`) - Página de cadastro de novos usuários
- **Dashboard** (`/dashboard`) - Painel principal com estatísticas
- **Clientes** (`/customers`) - Gestão de clientes
- **Leads** (`/leads`) - Gestão de leads
- **Negócios** (`/deals`) - Gestão de negócios
- **Tarefas** (`/tasks`) - Gestão de tarefas

## 📖 Uso

### Criar primeiro usuário

Faça uma requisição POST para `/api/auth/register`:
```json
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "senha123"
}
```

### Endpoints da API

- **Auth**
  - POST `/api/auth/register` - Registrar usuário
  - POST `/api/auth/login` - Login

- **Clientes**
  - GET `/api/customers` - Listar clientes
  - POST `/api/customers` - Criar cliente
  - PUT `/api/customers/:id` - Atualizar cliente
  - DELETE `/api/customers/:id` - Deletar cliente

- **Leads**
  - GET `/api/leads` - Listar leads
  - POST `/api/leads` - Criar lead
  - PUT `/api/leads/:id` - Atualizar lead
  - DELETE `/api/leads/:id` - Deletar lead

- **Negócios**
  - GET `/api/deals` - Listar negócios
  - POST `/api/deals` - Criar negócio
  - PUT `/api/deals/:id` - Atualizar negócio
  - DELETE `/api/deals/:id` - Deletar negócio

- **Tarefas**
  - GET `/api/tasks` - Listar tarefas
  - POST `/api/tasks` - Criar tarefa
  - PUT `/api/tasks/:id` - Atualizar tarefa
  - DELETE `/api/tasks/:id` - Deletar tarefa

## 📝 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.
