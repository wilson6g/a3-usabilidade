const database = require("../../config/database");

async function criarPlataforma({ id, nome, descricao }) {
  try {
    await database.query(
      `INSERT INTO plataforma (id, nome, descricao) VALUES (?, ?, ?)`,
      [id, nome, descricao]
    );

    const rows = await database.query(
      "SELECT * FROM plataforma WHERE id = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = criarPlataforma;
