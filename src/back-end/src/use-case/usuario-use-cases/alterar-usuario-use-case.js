const alterarUsuarioDTO = require("../../dto/alterar-usuario-dto");
const validarCamposAlterarUsuario =
  require("../../controllers/usuario-controller").validarCamposAlterarUsuario;
const alterarUsuarioRepository = require("../repository/usuario-repository/alterar-usuario-repository");
const buscarUsuarioRepository = require("../../repository/usuario-repository/buscar-usuario-repository");

async function alterarUsuarioUseCase(input) {
  try {
    const inputValido = validarCamposAlterarUsuario(input);

    if (!inputValido) {
      throw new Error("Os dados de entrada não são válidos.");
    }

    const usuario = alterarUsuarioDTO(input);

    const usuarioExistente = await buscarUsuarioRepository('usuario', usuario.usuario);

    if (!usuarioExistente) {
      throw new Error("O usuário não existe.");
    }
    
    const usuarioAtualizado = await alterarUsuarioRepository(
      usuario.usuario,
      usuario
    );

    return usuarioAtualizado;
  } catch (error) {
    throw new Error(`Erro ao criar o usuário: ${error.message}`);
  }
}

module.exports = alterarUsuarioUseCase;
