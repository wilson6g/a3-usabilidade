const database = require("../../config/database");

async function criarCategoria({ id, nome }) {
  try {
    await database.query(`INSERT INTO categoria (id, nome) VALUES (?, ?)`, [
      id,
      nome,
    ]);

    const rows = await database.query(
      "SELECT * FROM categoria WHERE id = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = criarCategoria;
