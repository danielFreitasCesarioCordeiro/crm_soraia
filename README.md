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

## 🌐 Como Acessar Sem Instalar Localmente

### Opção 1: Deploy em Serviços Gratuitos

#### **Deploy do Backend (Render.com ou Railway.app)**

1. **Render.com** (Recomendado):
   - Crie conta em [render.com](https://render.com)
   - Conecte seu repositório GitHub
   - Crie um novo "Web Service"
   - Configure:
     - Build Command: `npm install`
     - Start Command: `npm run server`
     - Environment Variables: Adicione `MONGODB_URI` e `JWT_SECRET`
   - Deploy automático!

2. **MongoDB Atlas** (Banco de Dados Gratuito):
   - Crie conta em [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Crie um cluster gratuito
   - Copie a string de conexão
   - Use no `MONGODB_URI`

#### **Deploy do Frontend (Vercel ou Netlify)**

1. **Vercel** (Recomendado):
   - Crie conta em [vercel.com](https://vercel.com)
   - Importe o projeto do GitHub
   - Configure o diretório raiz como `client`
   - Adicione variável de ambiente apontando para sua API
   - Deploy automático!

2. **Netlify**:
   - Crie conta em [netlify.com](https://netlify.com)
   - Conecte o repositório
   - Configure build:
     - Base directory: `client`
     - Build command: `npm run build`
     - Publish directory: `client/build`

### Opção 2: Acesso Rápido Local (Sem Instalação Manual)

Se você já tem Node.js instalado, pode usar scripts automatizados:

```bash
# Clone o repositório
git clone https://github.com/danielFreitasCesarioCordeiro/crm_soraia.git
cd crm_soraia

# Execute o script de setup (instala tudo automaticamente)
npm run install-all

# Configure o .env
copy .env.example .env

# Inicie o projeto completo
npm run dev
```

Acesse: `http://localhost:3000`

### Opção 3: Docker (Containerizado)

Crie um arquivo `docker-compose.yml` na raiz do projeto:

```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/crm_soraia
      - JWT_SECRET=your_secret_key
    depends_on:
      - mongodb

  frontend:
    build: ./client
    ports:
      - "3000:3000"
    depends_on:
      - backend

volumes:
  mongodb_data:
```

Execute: `docker-compose up`

### 🔗 Exemplo de Deploy Completo

**URLs de Exemplo após Deploy:**
- Frontend: `https://seu-crm.vercel.app`
- Backend API: `https://seu-crm-api.render.com`
- Banco de Dados: MongoDB Atlas (cloud)

### 💡 Dica Rápida

Para testar rapidamente sem configurar nada:
1. Use [Replit](https://replit.com) ou [CodeSandbox](https://codesandbox.io)
2. Importe o repositório
3. Execute diretamente no navegador

## 📝 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.
