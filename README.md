# 🐾 Caninorte  

## 📘 Sobre o Projeto  
**Caninorte** é um e-commerce de produtos pet desenvolvido com foco em performance, usabilidade e escalabilidade.  
O objetivo é oferecer uma plataforma completa para compra de produtos voltados a animais de estimação, como rações, brinquedos, acessórios e medicamentos.  

O projeto busca simular uma loja virtual profissional, semelhante à **Cobasi**, com funcionalidades de carrinho, autenticação de usuário, e integração com banco de dados.  

## 🎯 Objetivos  
- Oferecer uma experiência de compra fluida e responsiva  
- Implementar um backend robusto e seguro para controle de pedidos e usuários  
- Facilitar a busca e filtragem de produtos  
- Integrar funcionalidades de carrinho e checkout  

## 💻 Tecnologias Utilizadas  

### Frontend  
- **HTML5**, **CSS3**, **JavaScript**  
- Design responsivo com **Flexbox** e **Grid**  
- **Animações** e **interatividade** com JS puro  

### Backend  
- **Node.js** + **Express** — API RESTful  
- **MySQL** — Banco de dados relacional  
- **Sequelize** — ORM para manipulação de dados  

## ⚙️ Funcionalidades  
- Cadastro e login de usuários  
- Listagem e busca de produtos  
- Carrinho de compras e cálculo de total  
- Controle de estoque e gerenciamento de pedidos  
- Painel administrativo para gestão de produtos  

## 📦 Como Executar o Projeto  
```bash
# Clone o repositório
git clone https://github.com/teuusuario/caninorte.git

# Acesse a pasta do projeto
cd caninorte

# Instale as dependências
npm install

# Configure o banco de dados
npx sequelize db:migrate

# Inicie o servidor
npm start
