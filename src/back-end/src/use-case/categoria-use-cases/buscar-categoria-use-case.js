const buscarCategoriaRepository = require("../../repository/categoria-repository/buscar-categoria-repository");
const validarCampoBuscarCategoria =
  require("../../controllers/categoria-controller").validarCampoBuscarCategoria;

async function buscarJogoUseCase(input) {
  try {
    const inputValido = validarCampoBuscarCategoria(input.id);

    if (!inputValido) {
      throw new Error("Os dados de entrada não são válidos.");
    }

    const categoriaExistente = await buscarCategoriaRepository(input.id);

    if (!categoriaExistente) {
      throw new Error("O jogo não existe.");
    }

    return categoriaExistente;
  } catch (error) {
    const statusCode =  500;
    throw {
      message: `Erro ao criar o usuário: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = buscarJogoUseCase;
