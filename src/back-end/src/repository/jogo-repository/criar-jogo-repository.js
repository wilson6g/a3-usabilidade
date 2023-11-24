const database = require("../../config/database");

async function criarJogo({
  id,
  nome,
  descricao,
  nota,
  fk_plataforma,
  fk_usuario,
}) {
  try {
    await database.query(
      `INSERT INTO jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES (?, ?, ?, ?, ?, ?)`,
      [id, nome, descricao, nota, fk_plataforma, fk_usuario]
    );

    const [rows] = await database.query(
      "SELECT jogo.id, jogo.nome, jogo.nota, jogo.fk_usuario, jogo.descricao, plataforma.id as plataforma_id, plataforma.nome as plataforma_nome, plataforma.descricao as plataforma_descricao FROM jogo INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id WHERE jogo.id = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = criarJogo;
