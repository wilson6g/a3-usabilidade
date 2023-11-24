-- Criação da tabela Usuario
-- CREATE TABLE usuario (
--   usuario_nome VARCHAR(36) UNIQUE PRIMARY KEY,
--   nome VARCHAR(36) NOT NULL,
--   email VARCHAR(120) NOT NULL,
--   senha VARCHAR(16) NOT NULL
-- );

-- Criação da tabela Plataforma
CREATE TABLE plataforma (
  id VARCHAR(36) PRIMARY KEY,
  nome VARCHAR(32) NOT NULL,
  descricao VARCHAR(255)
);

-- Criação da tabela Categoria
CREATE TABLE categoria (
  id VARCHAR(36) PRIMARY KEY,
  nome VARCHAR(32) NOT NULL,
  descricao VARCHAR(255)
);

-- Criação da tabela Jogo
CREATE TABLE jogo (
  id VARCHAR(36) PRIMARY KEY,
  nome VARCHAR(120) NOT NULL
);

-- -- Criação da tabela jogo_plataforma
CREATE TABLE jogo_plataforma (
  id VARCHAR(36) PRIMARY KEY,
  fk_jogo VARCHAR(36) NOT NULL,
  fk_plataforma VARCHAR(36) NOT NULL,
  FOREIGN KEY (fk_jogo) REFERENCES jogo(id),
  FOREIGN KEY (fk_plataforma) REFERENCES plataforma(id)
);

-- -- Criação da tabela jogo_categoria
CREATE TABLE jogo_categoria (
  id VARCHAR(36) PRIMARY KEY,
  fk_jogo VARCHAR(36) NOT NULL,
  fk_categoria VARCHAR(36) NOT NULL,
  FOREIGN KEY (fk_jogo) REFERENCES jogo(id),
  FOREIGN KEY (fk_categoria) REFERENCES categoria(id)
);

-- Criação da tabela Biblioteca
CREATE TABLE biblioteca (
  id VARCHAR(36) PRIMARY KEY,
  fk_jogo VARCHAR(36) NOT NULL,
  FOREIGN KEY (fk_jogo) REFERENCES jogo(id)
);

-- Criação da tabela meus_jogos
CREATE TABLE meus_jogos (
  id VARCHAR(36) PRIMARY KEY,
  id_usuario VARCHAR(36) NOT NULL,
  fk_biblioteca VARCHAR(36) NOT NULL,
  nota INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(usuario),
  FOREIGN KEY (fk_biblioteca) REFERENCES biblioteca(id)
);
