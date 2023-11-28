const database = require("../../config/database");

async function listarJogosRepository() {
  try {
    const rows = await database.query(
      "SELECT jogo.id, jogo.nome, jogo.nota, jogo.descricao, plataforma.id as plataforma_id, plataforma.nome as plataforma_nome, plataforma.descricao as plataforma_descricao FROM jogo INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id"
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = listarJogosRepository;
