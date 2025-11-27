# 🚀 Guia de Deploy - CRM Soraia

## Formas de Acessar Sem Instalar Localmente

### 1️⃣ Deploy Gratuito na Nuvem (Recomendado)

#### **Opção A: Deploy Completo (Render + MongoDB Atlas + Vercel)**

##### Passo 1: MongoDB Atlas (Banco de Dados)
1. Acesse [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crie uma conta gratuita
3. Clique em "Build a Database" → Selecione o plano **FREE**
4. Escolha um provedor e região (recomendado: AWS - us-east-1)
5. Clique em "Create Cluster"
6. Em "Security Quickstart":
   - Crie um usuário e senha (anote!)
   - Em "IP Access List", adicione `0.0.0.0/0` (permitir de qualquer lugar)
7. Clique em "Connect" → "Connect your application"
8. Copie a string de conexão (exemplo: `mongodb+srv://usuario:senha@cluster.mongodb.net/`)
9. **Guarde esta string** para usar no backend

##### Passo 2: Backend API (Render.com)
1. Acesse [render.com](https://render.com) e crie uma conta
2. Clique em "New +" → "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Name**: `crm-soraia-api`
   - **Root Directory**: deixe vazio
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
5. Clique em "Advanced" e adicione as variáveis de ambiente:
   - `MONGODB_URI`: cole a string do MongoDB Atlas
   - `JWT_SECRET`: crie uma senha forte (ex: `MinhaSenhaSecreta123!`)
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
6. Clique em "Create Web Service"
7. Aguarde o deploy (5-10 minutos)
8. **Copie a URL da API** (exemplo: `https://crm-soraia-api.onrender.com`)

##### Passo 3: Frontend (Vercel)
1. Acesse [vercel.com](https://vercel.com) e crie uma conta
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Configure:
   - **Project Name**: `crm-soraia`
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Em "Environment Variables", adicione:
   - `REACT_APP_API_URL`: cole a URL da API do Render (ex: `https://crm-soraia-api.onrender.com`)
6. Clique em "Deploy"
7. Aguarde o deploy (3-5 minutos)
8. **Acesse seu CRM**: `https://crm-soraia.vercel.app`

✅ **Pronto! Seu CRM está online e acessível de qualquer lugar!**

---

#### **Opção B: Deploy Rápido (Railway.app)**

Railway oferece deploy mais simples em um único lugar:

1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub
3. Clique em "New Project" → "Deploy from GitHub repo"
4. Selecione o repositório `crm_soraia`
5. Railway vai detectar e criar serviços automaticamente
6. Adicione MongoDB: "New" → "Database" → "Add MongoDB"
7. Configure variáveis de ambiente no serviço backend
8. Acesse as URLs geradas

---

### 2️⃣ Docker (Local mas Automatizado)

Se você tem Docker instalado:

```bash
# Clone o repositório
git clone https://github.com/danielFreitasCesarioCordeiro/crm_soraia.git
cd crm_soraia

# Inicie tudo com Docker
docker-compose up
```

Acesse: `http://localhost:3000`

---

### 3️⃣ Setup Automatizado Local

Para Windows, execute:

```bash
# Clone o repositório
git clone https://github.com/danielFreitasCesarioCordeiro/crm_soraia.git
cd crm_soraia

# Execute o script de setup
setup.bat
```

Para Linux/Mac:

```bash
chmod +x setup.sh
./setup.sh
```

---

### 4️⃣ Ambientes Online Sem Instalar Nada

#### **Replit**
1. Acesse [replit.com](https://replit.com)
2. Clique em "Create" → "Import from GitHub"
3. Cole a URL: `https://github.com/danielFreitasCesarioCordeiro/crm_soraia`
4. Configure o `.env` no Secrets
5. Clique em "Run"

#### **CodeSandbox**
1. Acesse [codesandbox.io](https://codesandbox.io)
2. Clique em "Import" → Cole a URL do GitHub
3. Aguarde carregar
4. Execute no terminal integrado

---

## 🔗 URLs de Exemplo Após Deploy

- **Frontend**: `https://crm-soraia.vercel.app`
- **Backend API**: `https://crm-soraia-api.onrender.com`
- **Health Check**: `https://crm-soraia-api.onrender.com/api/health`

## 📊 Comparação de Opções

| Opção | Custo | Facilidade | Performance | Recomendado para |
|-------|-------|------------|-------------|------------------|
| Render + Vercel | Grátis | Média | Alta | Produção |
| Railway | Grátis* | Fácil | Alta | Desenvolvimento |
| Docker Local | Grátis | Média | Alta | Desenvolvimento |
| Replit | Grátis | Muito Fácil | Média | Testes |

*Railway: 500h grátis/mês

## 💡 Dicas Importantes

1. **MongoDB Atlas**: Use o plano gratuito (512MB)
2. **Render**: Pode demorar 1 minuto para "acordar" (plano gratuito)
3. **Vercel**: Deploy automático a cada push no GitHub
4. **Segurança**: Sempre use senhas fortes no `.env`

## 🆘 Problemas Comuns

### Backend não conecta ao MongoDB
- Verifique se a string de conexão está correta
- Confirme que liberou o IP `0.0.0.0/0` no Atlas

### Frontend não encontra a API
- Verifique a variável `REACT_APP_API_URL`
- Confirme que a URL do backend está correta
- Adicione `/api` no final se necessário

### Erro de CORS
- Certifique-se que o CORS está configurado no backend
- Adicione a URL do frontend nas origens permitidas

## 📞 Suporte

Se tiver problemas, abra uma issue no GitHub!
