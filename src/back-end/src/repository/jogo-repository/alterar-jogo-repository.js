const database = require("../../config/database");

async function alterarJogoRepository(
  id,
  { nome, descricao, nota, fk_plataforma }
) {
  try {
    await database.query(
      "UPDATE jogo SET nome = ?, descricao = ?, nota = ?, fk_plataforma = ? WHERE id = ?",
      [nome, descricao, nota, fk_plataforma, id]
    );

    const rows = await database.query(
      `SELECT jogo.id, jogo.nome, jogo.nota,  jogo.descricao, plataforma.nome as plataforma_nome, plataforma.descricao as plataforma_descricao from jogo INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id WHERE jogo.id = ? `,
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = alterarJogoRepository;
