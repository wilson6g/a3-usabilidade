const buscarPlataformasRepository = require("../../repository/plataforma-repository/buscar-plataforma-repository");

async function buscarPlataformaUseCase(input) {
  try {
    const plataformaExistente = await buscarPlataformasRepository(
      "id",
      input.id
    );

    if (!plataformaExistente) {
      const error = new Error("A plataforma não existe.");
      error.statusCode = 400;
      throw error;
    }

    return plataformaExistente;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao buscar a plataforma: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = buscarPlataformaUseCase;
