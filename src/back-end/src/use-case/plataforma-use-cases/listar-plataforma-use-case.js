const listarPlataformasRepository = require("../../repository/plataforma-repository/listar-plataformas-repository");

async function listarPlataformaUseCase() {
  try {
    const plataformas = await listarPlataformasRepository();

    return plataformas;
  } catch (error) {
    throw new Error(`Erro ao listar a plataforma: ${error.message}`);
  }
}

module.exports = listarPlataformaUseCase;
