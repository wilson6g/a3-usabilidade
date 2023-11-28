const buscarJogosUsuarioRepository = require("../../repository/jogo-repository/buscar-jogos-usuario-repository");

async function buscarJogoUsuarioUseCase(input) {
  try {
    const jogoExistente = await buscarJogosUsuarioRepository(input.fk_usuario);

    if (!jogoExistente) {
      const error = new Error("O jogo não existe.");
      error.statusCode = 400;
      throw error;
    }

    const combinedData = jogoExistente.reduce((acc, item) => {
      if (!acc[item.nome]) {
        acc[item.nome] = {
          id: item.id,
          nome: item.nome,
          nota: item.nota,
          descricao: item.descricao,
          plataforma_id: item.plataforma_id,
          plataforma_nome: item.plataforma_nome,
          plataforma_descricao: item.plataforma_descricao,
          categorias: []
        };
      }
      
      acc[item.nome].categorias.push({
        categoria_id: item.categoria_id,
        categoria_nome: item.categoria_nome
      });
    
      return acc;
    }, {});

    return Object.values(combinedData);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao buscar o jogo: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = buscarJogoUsuarioUseCase;
