const listarUsuariosRepository = require("../../repository/usuario-repository/listar-usuarios-repository");

async function listarUsuariosUseCase() {
  try {
    const usuarios = await listarUsuariosRepository();

    return usuarios;
  } catch (error) {
    throw new Error(`Erro ao criar o usuário: ${error.message}`);
  }
}

module.exports = listarUsuariosUseCase;
