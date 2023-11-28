const database = require("../../config/database");

async function buscarMeusJogosCategoriaExistenteRepository(input) {
  try {
    const rows = await database.query(
      `SELECT * FROM jogo_categoria
      WHERE fk_jogo = ? AND fk_categoria = ?`,
      [input.fk_jogo, input.fk_categoria]
    );

    return rows[0];
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    throw error;
  }
}

module.exports = buscarMeusJogosCategoriaExistenteRepository;
