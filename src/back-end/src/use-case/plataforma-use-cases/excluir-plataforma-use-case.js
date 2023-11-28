const buscarPlataformasRepository = require("../../repository/plataforma-repository/buscar-plataforma-repository");
const apagarPlataformasRepository = require("../../repository/plataforma-repository/apagar-plataforma-repository");
const buscarJogoPorCategoriaExistenteRepository = require("../../repository/jogo-categoria-repository/buscar-por-categoria-existente copy");
const buscarJogoPorPlataformaRepository = require("../../repository/jogo-repository/buscar-jogo-por-plataforma");

async function excluirPlataformaUseCase(input) {
  try {
    const plataformaExistente = await buscarPlataformasRepository(
      "id",
      input.id
    );

    if (!plataformaExistente) {
      const error = new Error("A plataforma não existe.");
      error.statusCode = 404;
      throw error;
    }

    const jogoComPlataforma = await buscarJogoPorPlataformaRepository(
      input.id
    );

    if (jogoComPlataforma.length > 0) {
      const error = new Error(
        "Não é possível apagar uma plataforma que tenha jogos vinculados."
      );
      error.statusCode = 400;
      throw error;
    }

    return await apagarPlataformasRepository(plataformaExistente.id);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao apagar a plataforma: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = excluirPlataformaUseCase;
