const criarPlataformaDto = require("../../dto/plataforma-dto/criar-plataforma-dto");
const criarPlataformaRepository = require("../../repository/plataforma-repository/criar-plataforma-repository");
const buscarPlataformaRepository = require("../../repository/plataforma-repository/buscar-plataforma-repository");

async function criarPlataformaUseCase(input) {
  try {
    const plataforma = criarPlataformaDto(input);

    const plataformaExistente = await buscarPlataformaRepository('nome', plataforma.nome);

    if (plataformaExistente) {
      const error = new Error("A plataforma já existe.");
      error.statusCode = 400;
      throw error;
    }

    const novaPlataforma = await criarPlataformaRepository(plataforma);

    return novaPlataforma;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao criar a plataforma: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = criarPlataformaUseCase;
