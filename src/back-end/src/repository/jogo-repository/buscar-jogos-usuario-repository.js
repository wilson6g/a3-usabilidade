const database = require("../../config/database");

async function buscarJogosUsuarioRepository(fk_usuario) {
  try {
    const rows = await database.query(
      `SELECT jogo.id, categoria.id as categoria_id, categoria.nome as categoria_nome, jogo.nome,jogo.nota,  jogo.descricao, plataforma.id as plataforma_id, plataforma.nome as plataforma_nome, plataforma.descricao as plataforma_descricao FROM jogo INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id INNER JOIN jogo_categoria ON jogo_categoria.fk_jogo = jogo.id INNER JOIN categoria ON jogo_categoria.fk_categoria = categoria.id WHERE jogo.fk_usuario = ?`,
      [fk_usuario]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = buscarJogosUsuarioRepository;
