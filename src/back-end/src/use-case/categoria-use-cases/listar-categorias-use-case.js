const listarCategoriasRepository = require("../../repository/categoria-repository/listar-categorias-repository");

async function listarCategoriasUseCase() {
  try {
    const categorias = await listarCategoriasRepository();

    return categorias;
  } catch (error) {
    throw new Error(`Erro ao criar o usuário: ${error.message}`);
  }
}

module.exports = listarCategoriasUseCase;
