const database = require("../../config/database");

async function buscarJogoPorPlataformaRepository(fk_plataforma) {
  try {
    const rows = await database.query(
      `SELECT * FROM jogo WHERE fk_plataforma = ?`,
      [fk_plataforma]
    );

    return rows;
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    throw error;
  }
}


module.exports = buscarJogoPorPlataformaRepository;