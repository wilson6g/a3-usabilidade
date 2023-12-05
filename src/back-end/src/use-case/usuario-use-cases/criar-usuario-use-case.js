const criarUsuarioDto = require("../../dto/usuario-dto/criar-usuario-dto");
const criarUsuarioRepository = require("../../repository/usuario-repository/criar-usuario-repository");
const buscarUsuarioRepository = require("../../repository/usuario-repository/buscar-usuario-repository");

async function criarUsuarioUseCase(input) {
  try {
    const usuario = await criarUsuarioDto(input);

    const usuarioExistente = await buscarUsuarioRepository('usuario', usuario.usuario);

    if (usuarioExistente) {
      const error = new Error("O usuário já existe.");
      error.statusCode = 400;
      throw error;
    }

    const emailExistente = await buscarUsuarioRepository('email', usuario.email);

    if (emailExistente) {
      const error = new Error("O email já existe.");
      error.statusCode = 400;
      throw error;
    }

    const novoUsuario = await criarUsuarioRepository(usuario);

    return novoUsuario;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao criar o usuário: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = criarUsuarioUseCase;
