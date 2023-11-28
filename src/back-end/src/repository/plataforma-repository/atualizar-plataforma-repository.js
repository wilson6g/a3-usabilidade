const database = require("../../config/database");

async function atualizarPlataforma(id, { nome, descricao }) {
  try {
    await database.query(
      `UPDATE plataforma SET nome = ?, descricao = ? WHERE id = ?`,
      [nome, descricao, id]
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

module.exports = atualizarPlataforma;
