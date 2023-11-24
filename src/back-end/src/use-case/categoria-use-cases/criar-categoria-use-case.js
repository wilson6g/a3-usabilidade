const criarCategoriaDto = require("../../dto/categoria-dto/criar-categoria-dto");
const buscarCategoriaRepository = require("../../repository/categoria-repository/buscar-categoria-repository");
const criarCategoriaRepository = require("../../repository/categoria-repository/criar-categoria-repository");

async function criarCategoriaUseCase(input) {
  try {
    const categoria = criarCategoriaDto(input);

    const categoriaExistente = await buscarCategoriaRepository('nome', categoria.nome);

    if (categoriaExistente) {
      const error = new Error("A categoria já existe.");
      error.statusCode = 400;
      throw error;
    }

    const novaCategoria = await criarCategoriaRepository(categoria);

    return novaCategoria;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao criar o usuário: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = criarCategoriaUseCase;
