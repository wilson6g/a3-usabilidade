const database = require("../../config/database");

async function criarJogoCategoriaRepository({ id, fk_jogo, fk_categoria }) {
  try {
    return await database.query(
      `INSERT INTO jogo_categoria (id, fk_jogo, fk_categoria) VALUES (?, ?, ?)`,
      [id, fk_jogo, fk_categoria]
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = criarJogoCategoriaRepository;
