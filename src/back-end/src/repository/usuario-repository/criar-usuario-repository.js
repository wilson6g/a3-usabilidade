const database = require("../../config/database");

async function criarUsuario({ usuario, nome, email, senha }) {
  try {
    await database.query(
      "INSERT INTO usuario (usuario, nome, email, senha) VALUES (?, ?, ? ,?)",
      [usuario, nome, email, senha]
    );

    // Consultar o banco de dados para retornar os dados do usuário inserido
    const [rows] = await database.query(
      "SELECT * FROM usuario WHERE usuario = ?",
      [usuario]
    );

    // Retornar o usuário inserido
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = criarUsuario;
