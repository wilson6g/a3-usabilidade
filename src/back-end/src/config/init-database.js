const database = require("./database");
const env = require("../config/env-database-config");
const mysql = require("mysql2/promise");

console.log(env);

async function executeSQL(sql) {
  try {
    const rows = await database.query(sql);

    console.log("Script SQL executado com sucesso.");

    return rows;
  } catch (error) {
    console.error("Erro ao executar script SQL:", error);
    throw error;
  }
}

async function createDatabase() {
  const poolWithoutDB = mysql.createPool({
    connectionLimit: 10,
    host: env.host,
    user: env.user,
    password: env.password,
  });

  try {
    // Create a connection without specifying a database
    const connection = await poolWithoutDB.getConnection();

    // Create the database
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${env.database}\`;`
    );

    // Release the connection
    connection.release();

    console.log(`Database '${env.database}' created successfully.`);
  } catch (error) {
    console.error("Error creating database:", error);
  }
}

async function createTables(databaseName) {
  const sqlScripts = [
    `CREATE TABLE ${env.database}.usuario (
      usuario VARCHAR(12) UNIQUE,
      nome VARCHAR(36) NOT NULL,
      email VARCHAR(120) UNIQUE PRIMARY KEY,
      senha VARCHAR(120) NOT NULL
    )`,
    `CREATE TABLE ${env.database}.plataforma (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(32) NOT NULL,
      descricao TEXT
    )`,
    `CREATE TABLE ${env.database}.categoria (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(32) NOT NULL
    )`,
    `CREATE TABLE ${env.database}.jogo (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(120) NOT NULL,
      descricao TEXT,
      nota INT NOT NULL,
      fk_plataforma VARCHAR(36) NOT NULL,
      fk_usuario varchar(120) NOT NULL,
      FOREIGN KEY (fk_usuario) REFERENCES usuario(email),
      FOREIGN KEY (fk_plataforma) REFERENCES plataforma(id)
    )`,
    `CREATE TABLE ${env.database}.jogo_categoria (
      id VARCHAR(36) PRIMARY KEY,
      fk_jogo VARCHAR(36) NOT NULL,
      fk_categoria VARCHAR(36) NOT NULL,
      FOREIGN KEY (fk_jogo) REFERENCES jogo(id),
      FOREIGN KEY (fk_categoria) REFERENCES categoria(id)
    )`,
  ];

  try {
    for (const script of sqlScripts) {
      await executeSQL(script);
    }
    console.log("Todas as tabelas foram criadas com sucesso.");
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  }
}

module.exports = { createDatabase, createTables };
