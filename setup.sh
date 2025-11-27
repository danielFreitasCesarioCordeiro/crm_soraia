#!/bin/bash

echo "🚀 Iniciando setup do CRM Soraia..."

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js não está instalado. Por favor, instale o Node.js primeiro."
    exit 1
fi

echo "✅ Node.js encontrado: $(node -v)"

# Instalar dependências do backend
echo "📦 Instalando dependências do backend..."
npm install

# Instalar dependências do frontend
echo "📦 Instalando dependências do frontend..."
cd client
npm install
cd ..

# Criar arquivo .env se não existir
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env..."
    cp .env.example .env
    echo "⚠️  ATENÇÃO: Configure o arquivo .env com suas credenciais!"
fi

# Verificar se MongoDB está rodando (opcional)
if command -v mongod &> /dev/null
then
    echo "✅ MongoDB encontrado no sistema"
else
    echo "⚠️  MongoDB não encontrado. Você precisará:"
    echo "   1. Instalar MongoDB localmente, ou"
    echo "   2. Usar MongoDB Atlas (cloud)"
fi

echo ""
echo "✅ Setup concluído!"
echo ""
echo "📋 Próximos passos:"
echo "   1. Configure o arquivo .env com suas credenciais"
echo "   2. Inicie o MongoDB (se local)"
echo "   3. Execute: npm run dev"
echo ""
echo "🌐 Acesse: http://localhost:3000"
