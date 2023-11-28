const alterarJogoCategoriaDTO = require("../../dto/jogo-categoria-dto/alterar-jogo-categoria-dto");
const apagarJogoCategoriaRepository = require("../../repository/jogo-categoria-repository/apagar-jogo-categoria-repository");
const buscarMeusJogosCategoriaExistenteRepository = require("../../repository/jogo-categoria-repository/buscar-jogo-categoria-existente");
const criarJogoCategoriaRepository = require("../../repository/jogo-categoria-repository/criar-jogo-categoria-repository");
const crypto = require("crypto");

async function alterarJogoCategoriaUseCase(jogoCategoria, input) {
  try {
    const listaDeJogos = alterarJogoCategoriaDTO(jogoCategoria);

    const promisesApagarJogoCategoria = listaDeJogos.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente = await apagarJogoCategoriaRepository(
          listaDeJogos.fk_jogo
        );
        return categoriaExistente;
      }
    );

    // Aguarda todas as promessas serem resolvidas
    const promisesApagarJogoCategoriaAguardar = await Promise.all(
      promisesApagarJogoCategoria
    );

    const promisesBuscaCategoria = input.fk_categoria.map(async (categoria) => {
      const categoriaExistente =
        await buscarMeusJogosCategoriaExistenteRepository({
          fk_jogo: listaDeJogos.fk_jogo,
          fk_categoria: categoria,
        });
      return categoriaExistente;
    });

    // Aguarda todas as promessas serem resolvidas
    const categoriasExistenteResultados = await Promise.all(
      promisesBuscaCategoria
    );

    // Verifica se alguma categoria existente foi encontrada
    const existeCategoriaExistente = categoriasExistenteResultados.some(
      (categoria) => categoria
    );

    if (existeCategoriaExistente) {
      const error = new Error("Esse jogo não existe.");
      error.statusCode = 404;
      throw error;
    }

    const promisesCriarCategoria = input.fk_categoria.map(async (categoria) => {
      const categoriaExistente = await criarJogoCategoriaRepository({
        id: crypto.randomUUID(),
        fk_jogo: listaDeJogos.fk_jogo,
        fk_categoria: categoria,
      });
      return categoriaExistente;
    });

    // Aguarda todas as promessas serem resolvidas
    const criarCategoriasResultados = await Promise.all(promisesCriarCategoria);

    return criarCategoriasResultados;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao atualizar a meus jogos: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = alterarJogoCategoriaUseCase;
