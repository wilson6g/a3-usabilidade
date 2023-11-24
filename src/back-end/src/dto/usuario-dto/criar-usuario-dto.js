const criptografarSenha = require("../../util/criptografar-senha");

async function criarUsuarioDTO({ usuario, nome, email, senha }) {
  try {
    const senhaCriptografada = await criptografarSenha(senha);

    return {
      usuario,
      nome,
      email,
      senha: senhaCriptografada,
    };
  } catch (error) {
    const statusCode = error.statusCode || 500; // Usar o código de status fornecido ou um padrão (500 para erro interno)
    throw { message: `Erro ao criar o usuário: ${error.message}`, statusCode };
  }
}

module.exports = criarUsuarioDTO;
