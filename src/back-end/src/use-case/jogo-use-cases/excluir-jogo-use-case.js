const apagarJogoRepository = require("../../repository/jogo-repository/apagar-jogo-repository");
const excluirJogoCategoriaUseCase = require("../jogo-categoria-use-cases/excluir-jogo-categoria-use-case");
const buscarJogoPorIdUseCase = require("./buscar-jogo-id-use-case");

async function excluirJogoUseCase(input) {
  try {
    const jogoExistente = await buscarJogoPorIdUseCase(input);

    if (!jogoExistente) {
      const error = new Error("O jogo não existe.");
      error.statusCode = 404;
      throw error;
    }

    await excluirJogoCategoriaUseCase(jogoExistente);

    return await apagarJogoRepository(jogoExistente.id);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao apagar o jogo: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = excluirJogoUseCase;
