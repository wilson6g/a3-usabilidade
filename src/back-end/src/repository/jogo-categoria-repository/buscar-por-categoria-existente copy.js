const database = require("../../config/database");

async function buscarJogoPorCategoriaExistenteRepository(input) {
  try {
    const rows = await database.query(
      `SELECT * FROM jogo_categoria
      WHERE fk_categoria = ?`,
      [input.fk_categoria]
    );

    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = buscarJogoPorCategoriaExistenteRepository;
