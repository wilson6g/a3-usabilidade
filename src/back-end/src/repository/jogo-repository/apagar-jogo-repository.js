const database = require("../../config/database");

async function apagarJogo(id) {
  try {
    const rows = await database.query(
      "DELETE FROM jogo WHERE id = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = apagarJogo;
