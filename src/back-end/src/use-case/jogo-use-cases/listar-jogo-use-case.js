const listarJogosRepository = require("../../repository/jogo-repository/listar-jogos-repository");

async function listarJogoUseCase() {
  try {
    const plataformas = await listarJogosRepository();

    return plataformas;
  } catch (error) {
    throw new Error(`Erro ao listar os jogos: ${error.message}`);
  }
}

module.exports = listarJogoUseCase;
