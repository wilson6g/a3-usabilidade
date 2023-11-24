const alterarPlataformaDTO = require("../../dto/plataforma-dto/alterar-plataforma-dto");
const buscarJogoPorPlataformaRepository = require("../../repository/jogo-repository/buscar-jogo-por-plataforma");
const alterarPlataformaRepository = require("../../repository/plataforma-repository/atualizar-plataforma-repository");
const buscarPlataformaRepository = require("../../repository/plataforma-repository/buscar-plataforma-repository");

async function alterarPlataformaUseCase(input) {
  try {
    const plataforma = alterarPlataformaDTO(input);

    const plataformaPorIdExistente = await buscarPlataformaRepository(
      "id",
      plataforma.id
    );

    const plataformaPorNomeExistente = await buscarPlataformaRepository(
      "nome",
      plataforma.nome
    );

    if (!plataformaPorIdExistente) {
      const error = new Error("A plataforma não existe.");
      error.statusCode = 404;
      throw error;
    } else if (plataformaPorNomeExistente) {
      const error = new Error("A plataforma já existe.");
      error.statusCode = 400;
      throw error;
    }

    const jogoComPlataforma = await buscarJogoPorPlataformaRepository(
      plataforma.id
    );

    if (jogoComPlataforma.length > 0) {
      const error = new Error(
        "Não é possível alterar uma plataforma que tenha jogos vinculados."
      );
      error.statusCode = 400;
      throw error;
    }

    const plataformaAtualizada = await alterarPlataformaRepository(
      plataforma.id,
      plataforma
    );

    return plataformaAtualizada;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao alterar a plataforma: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = alterarPlataformaUseCase;
