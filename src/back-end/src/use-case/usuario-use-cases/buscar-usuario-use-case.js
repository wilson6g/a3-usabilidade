const validarCampoBuscarUsuario =
  require("../../controllers/usuario-controller").validarCampoBuscarUsuario;
const buscarUsuarioRepository = require("../../repository/usuario-repository/buscar-usuario-repository");

async function buscarUsuarioUseCase(input) {
  try {
    const inputValido = validarCampoBuscarUsuario(input.usuario);

    if (!inputValido) {
      const error = new Error("Os dados de entrada não são válidos.");
      error.statusCode = 422;
      throw error;
    }

    const usuarioExistente = await buscarUsuarioRepository(
      "usuario",
      input.usuario
    );

    if (!usuarioExistente) {
      const error = new Error("O usuário não existe.");
      error.statusCode = 404;
      throw error;
    }

    return usuarioExistente;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao criar o usuário: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = buscarUsuarioUseCase;
