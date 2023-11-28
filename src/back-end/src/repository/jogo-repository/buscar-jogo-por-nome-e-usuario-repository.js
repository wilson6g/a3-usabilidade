const database = require("../../config/database");

async function buscarJogoPorNomeEUsuarioRepository(nome, fk_usuario) {
  try {
    const [rows, fields] = await database.query(
      `SELECT jogo.id, jogo.nome,jogo.nota,  jogo.descricao, plataforma.id as plataforma_id, plataforma.nome as plataforma_nome, plataforma.descricao as plataforma_descricao FROM jogo INNER JOIN plataforma ON jogo.fk_plataforma = plataforma.id WHERE jogo.nome = ? AND jogo.fk_usuario = ?`,
      [nome, fk_usuario]
    );

    return rows;
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    throw error;
  }
}

module.exports = buscarJogoPorNomeEUsuarioRepository;