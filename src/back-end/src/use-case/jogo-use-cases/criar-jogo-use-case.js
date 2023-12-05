const criarJogoDto = require("../../dto/jogo-dto/criar-jogo-dto");
const criarJogoRepository = require("../../repository/jogo-repository/criar-jogo-repository");
const buscarJogoPorNomeEUsuarioRepository = require("../../repository/jogo-repository/buscar-jogo-por-nome-e-usuario-repository");
const criarJogoCategoriaUseCase = require("../jogo-categoria-use-cases/criar-jogo-categoria-use-case");
const criarJogoCategoriaDTO = require("../../dto/jogo-categoria-dto/criar-jogo-categoria-dto");

async function criarJogoUseCase(input) {
  try {
    const jogo = criarJogoDto(input);

    const jogoExistente = await buscarJogoPorNomeEUsuarioRepository(
      jogo.nome,
      jogo.fk_usuario
    );

    if (jogoExistente) {
      const error = new Error("O jogo já existe.");
      error.statusCode = 400;
      throw error;
    }

    const novoJogo = await criarJogoRepository(jogo);

    const jogoCategoria = criarJogoCategoriaDTO({
      ...input,
      fk_jogo: novoJogo.id,
    });

    await criarJogoCategoriaUseCase(jogoCategoria);

    return jogoCategoria;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao criar o jogo: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = criarJogoUseCase;
