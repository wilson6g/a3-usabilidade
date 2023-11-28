const alterarJogoDTO = require("../../dto/alterar-jogo-dto");
const validarCamposAlterarJogo =
  require("../../controllers/jogo-controller").validarCamposAlterarJogo;
const alterarJogoRepository = require("../repository/jogo-repository/alterar-jogo-repository");
const buscarJogoPorIdRepository = require("../../repository/jogo-repository/buscar-jogo-por-id");

async function alterarJogoUseCase(input) {
  try {
    const inputValido = validarCamposAlterarJogo(input);

    if (!inputValido) {
      throw new Error("Os dados de entrada não são válidos.");
    }

    const jogo = alterarJogoDTO(input);

    const jogoExistente = await buscarJogoPorIdRepository(jogo.id);

    if (!jogoExistente) {
      throw new Error("O jogo não existe.");
    }

    const jogoAtualizado = await alterarJogoRepository(jogo.id, jogo);

    return jogoAtualizado;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao criar o usuário: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = alterarJogoUseCase;
