const database = require("../../config/database");

async function apagarJogoCategoriaRepository(id) {
  try {
    const rows = await database.query(
      "DELETE FROM jogo_categoria WHERE fk_jogo = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = apagarJogoCategoriaRepository;
