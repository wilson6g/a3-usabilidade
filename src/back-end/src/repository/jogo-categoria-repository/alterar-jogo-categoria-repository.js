const database = require("../../config/database");

async function alterarJogoCategoriaRepository(id, { fk_jogo, fk_categoria }) {
  try {
    await database.query(
      "UPDATE jogo_categoria SET fk_jogo = ?, fk_categoria = ? WHERE id = ?",
      [fk_jogo, fk_categoria, id]
    );

    const [rows] = await database.query(
      `SELECT * FROM jogo_categoria WHERE id = ?`,
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = alterarJogoCategoriaRepository;
