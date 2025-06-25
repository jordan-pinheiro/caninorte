CREATE DATABASE petshop;
USE petshop;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  preco DECIMAL(10,2),
  imagem VARCHAR(255),
  marca VARCHAR(50),
  peso VARCHAR(50)
);

INSERT INTO produtos (nome, preco, imagem, marca, peso) VALUES
('Ração Patê Pedigree Adulto', 9.36, 'pedigree-adulto.jpg', 'Pedigree', '280g'),
('Ração Patê Pedigree Filhote', 9.36, 'pedigree-filhote.jpg', 'Pedigree', '280g'),
('Ração Patê Joy Adulto', 8.01, 'joy-adulto.jpg', 'Joy', '280g');
