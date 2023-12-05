const loginUsuarioDTO = require("../../dto/usuario-dto/login-usuario.dto");
const buscarUsuarioRepository = require("../../repository/usuario-repository/buscar-usuario-repository");
const descriptografarSenha = require("../../util/descriptografar-senha");
const gerarTokenJwt = require("../../util/gerar-token");

async function loginUsuarioUseCase(input) {
  try {
    const usuario = loginUsuarioDTO(input);

    const usuarioExistente = await buscarUsuarioRepository("email", usuario.email);

    if (!usuarioExistente) {
      const error = new Error("O usuário não existe.");
      error.statusCode = 400;
      throw error;
    }

    const senhaDescriptografada = await descriptografarSenha(
      usuario.senha,
      usuarioExistente.senha,
    );

    if (!senhaDescriptografada) {
      const error = new Error("E-mail ou senha inválido");
      error.statusCode = 401;
      throw error;
    }

    const token = gerarTokenJwt(usuarioExistente.email, 86400);

    return token;
  } catch (error) {
    console.error('Erro no use-case:', error);
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao fazer login: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = loginUsuarioUseCase;
