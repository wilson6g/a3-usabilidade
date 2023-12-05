const listarJogosRepository = require("../../repository/jogo-repository/listar-jogos-repository");

async function listarJogoUseCase() {
  try {
    const jogos = await listarJogosRepository();

    return jogos;
  } catch (error) {
    throw new Error(`Erro ao listar os jogos: ${error.message}`);
  }
}

module.exports = listarJogoUseCase;
