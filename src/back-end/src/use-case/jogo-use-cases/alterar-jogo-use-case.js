const alterarJogoDTO = require("../../dto/jogo-dto/alterar-jogo-dto");
const alterarJogoRepository = require("../../repository/jogo-repository/alterar-jogo-repository");
const buscarJogoPorNomeEUsuarioRepository = require("../../repository/jogo-repository/buscar-jogo-por-nome-e-usuario-repository");
const alterarJogoCategoriaUseCase = require("../jogo-categoria-use-cases/alterar-jogo-categoria-use-case");
const buscarJogoPorIdUseCase = require("./buscar-jogo-id-use-case");

async function alterarJogoUseCase(input) {
  try {
    const jogo = alterarJogoDTO(input);

    const jogoExistente = await buscarJogoPorIdUseCase(input);

    const jogoExistenteNome = await buscarJogoPorNomeEUsuarioRepository(
      jogo.nome,
      jogo.fk_usuario
    );

    if (!jogoExistente) {
      const error = new Error("O jogo não existe.");
      error.statusCode = 404;
      throw error;
    } else if (jogoExistenteNome && jogo.id != jogoExistenteNome?.id) {
      const error = new Error("O jogo já existe.");
      error.statusCode = 400;
      throw error;
    }

    await alterarJogoCategoriaUseCase(jogoExistente, jogo);

    const jogoAtualizado = await alterarJogoRepository(jogo.id, jogo);

    return jogoAtualizado;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao atualizar o jogo: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = alterarJogoUseCase;
