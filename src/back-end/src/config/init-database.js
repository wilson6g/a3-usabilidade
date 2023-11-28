const database = require("./database");

async function executeSQL(sql) {
  try {
    const [rows, fields] = await database.query(sql);

    console.log("Script SQL executado com sucesso.");

    return rows;
  } catch (error) {
    console.error("Erro ao executar script SQL:", error);
    throw error;
  }
}

async function createDatabase(databaseName) {
  const sqlScript = `CREATE DATABASE ${databaseName}`;

  await executeSQL(sqlScript);
}

async function createTables(databaseName) {
  const sqlScripts = [
    `CREATE TABLE ${databaseName}.usuario (
      usuario VARCHAR(12) UNIQUE,
      nome VARCHAR(36) NOT NULL,
      email VARCHAR(120) UNIQUE PRIMARY KEY,
      senha VARCHAR(120) NOT NULL
    )`,
    `CREATE TABLE ${databaseName}.plataforma (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(32) NOT NULL,
      descricao TEXT
    )`,
    `CREATE TABLE ${databaseName}.categoria (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(32) NOT NULL
    )`,
    `CREATE TABLE ${databaseName}.jogo (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(120) NOT NULL,
      descricao TEXT,
      nota INT NOT NULL,
      fk_plataforma VARCHAR(36) NOT NULL,
      fk_usuario varchar(120) NOT NULL,
      FOREIGN KEY (fk_usuario) REFERENCES usuario(email),
      FOREIGN KEY (fk_plataforma) REFERENCES plataforma(id)
    )`,
    `CREATE TABLE ${databaseName}.jogo_categoria (
      id VARCHAR(36) PRIMARY KEY,
      fk_jogo VARCHAR(36) NOT NULL,
      fk_categoria VARCHAR(36) NOT NULL,
      FOREIGN KEY (fk_jogo) REFERENCES jogo(id),
      FOREIGN KEY (fk_categoria) REFERENCES categoria(id)
    )`,
  ];

  const promises = sqlScripts.map(async (script) => {
    try {
      await executeSQL(script);
    } catch (error) {
      console.error(`Erro ao executar script SQL: ${error}`);
      throw error;
    }
  });

  try {
    await Promise.all(promises);
    console.log("Todas as tabelas foram criadas com sucesso.");
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  }
}

module.exports = { createDatabase, createTables };
