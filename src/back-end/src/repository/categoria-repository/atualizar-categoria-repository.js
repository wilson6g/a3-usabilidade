const database = require("../../config/database");

async function atualizarCategoria(id, { nome }) {
  try {
    await database.query("UPDATE categoria SET nome = ? WHERE id = ?", [
      nome,
      id,
    ]);

    const rows = await database.query(
      `SELECT * from categoria WHERE id = ?`,
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = atualizarCategoria;
