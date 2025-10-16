🐾 Caninorte

📋 Sobre o Projeto

Caninorte é uma plataforma de e-commerce voltada para o setor pet shop, oferecendo produtos para cães, gatos e outros animais domésticos.
Inspirado em modelos como Cobasi e Petz, o site tem como objetivo proporcionar uma experiência de compra simples, intuitiva e responsiva, permitindo que o usuário encontre produtos facilmente e conclua suas compras com rapidez e segurança.

🎯 Objetivos

Facilitar a compra de produtos pet de forma online e acessível

Proporcionar uma experiência de usuário moderna e intuitiva

Integrar catálogo, carrinho e sistema de pagamentos

Gerenciar produtos, categorias e estoque com segurança

🚀 Tecnologias Utilizadas
Backend

Node.js – Ambiente de execução JavaScript

Express – Framework para criação da API

MySQL – Banco de dados relacional

Sequelize – ORM para integração com o MySQL

JWT – Autenticação de usuários

Bcrypt – Criptografia de senhas

Axios – Requisições entre serviços

Frontend

HTML5 / CSS3 / JavaScript (ES6)

React (opcional) – Para páginas dinâmicas e SPA

Bootstrap / Tailwind – Design responsivo e moderno

SweetAlert2 – Alertas e notificações amigáveis

🏗️ Estrutura do Projeto
caninorte/
├── backend/
│   ├── config/          # Configurações do banco e ambiente
│   ├── controllers/     # Controladores das rotas
│   ├── models/          # Modelos do Sequelize
│   ├── routes/          # Rotas da API
│   ├── middleware/      # Autenticação e validações
│   └── server.js        # Ponto de entrada do servidor
│
└── frontend/
    ├── assets/          # Imagens e ícones
    ├── css/             # Estilos da aplicação
    ├── js/              # Scripts e funções
    ├── pages/           # Páginas (home, produtos, carrinho)
    └── index.html       # Página principal

🌟 Funcionalidades
👤 Usuário

Cadastro e login com autenticação JWT

Edição de perfil e histórico de compras

Carrinho de compras e finalização de pedido

🛒 Produtos

Catálogo dinâmico com categorias e filtros

Página de detalhes de produtos

Sistema de busca e recomendação

⚙️ Administração

CRUD de produtos, categorias e estoque

Controle de pedidos e usuários

Painel administrativo seguro

💳 Pagamentos

Integração com API de pagamentos (ex: Stripe / Mercado Pago)

Cálculo de frete e descontos

🔧 Instalação
Backend
cd caninorte/backend
npm install
npm run dev

Frontend

Abra o index.html no navegador ou use Live Server (VSCode).

📱 Telas Principais

Home: destaque de produtos e promoções

Categorias: listagem filtrada por tipo de produto

Carrinho: resumo e finalização da compra

Dashboard Admin: gestão de estoque, pedidos e usuários

📊 Fluxo de Dados

O usuário interage com o frontend

As requisições são enviadas via Axios à API Node.js

A API manipula os dados no MySQL através do Sequelize

O frontend exibe as respostas (produtos, pedidos, etc.)
