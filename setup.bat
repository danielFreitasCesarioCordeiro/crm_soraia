@echo off
echo 🚀 Iniciando setup do CRM Soraia...
echo.

REM Verificar Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js não está instalado. Por favor, instale o Node.js primeiro.
    pause
    exit /b 1
)

echo ✅ Node.js encontrado
node -v
echo.

REM Instalar dependências do backend
echo 📦 Instalando dependências do backend...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro ao instalar dependências do backend
    pause
    exit /b 1
)

REM Instalar dependências do frontend
echo.
echo 📦 Instalando dependências do frontend...
cd client
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro ao instalar dependências do frontend
    cd ..
    pause
    exit /b 1
)
cd ..

REM Criar arquivo .env
if not exist .env (
    echo.
    echo 📝 Criando arquivo .env...
    copy .env.example .env
    echo ⚠️  ATENÇÃO: Configure o arquivo .env com suas credenciais!
)

echo.
echo ✅ Setup concluído!
echo.
echo 📋 Próximos passos:
echo    1. Configure o arquivo .env com suas credenciais
echo    2. Inicie o MongoDB (se local) ou use MongoDB Atlas
echo    3. Execute: npm run dev
echo.
echo 🌐 Acesse: http://localhost:3000
echo.
pause
