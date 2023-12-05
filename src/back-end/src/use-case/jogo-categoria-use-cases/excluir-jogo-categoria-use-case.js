const apagarJogoCategoriaDTO = require("../../dto/jogo-categoria-dto/apagar-jogo-categoria-dto");
const apagarJogoCategoriaRepository = require("../../repository/jogo-categoria-repository/apagar-jogo-categoria-repository");
const buscarMeusJogosCategoriaExistenteRepository = require("../../repository/jogo-categoria-repository/buscar-jogo-categoria-existente");

async function excluirJogoCategoriaUseCase(input) {
  try {
    const meusJogosCategoria = apagarJogoCategoriaDTO(input);

    const promisesBuscaCategoria = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente =
          await buscarMeusJogosCategoriaExistenteRepository({
            fk_jogo: meusJogosCategoria.fk_jogo,
            fk_categoria: categoria.categoria_id,
          });
        return categoriaExistente;
      }
    );

    const categoriasExistenteResultados = await Promise.all(
      promisesBuscaCategoria
    );

    const existeCategoriaExistente = categoriasExistenteResultados.some(
      (categoria) => categoria
    );

    if (!existeCategoriaExistente) {
      const error = new Error("Esse jogo não existe.");
      error.statusCode = 404;
      throw error;
    }

    const promisesApagarJogoCategoria = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente = await apagarJogoCategoriaRepository(
          meusJogosCategoria.fk_jogo
        );
        return categoriaExistente;
      }
    );

    const promisesApagarJogoCategoriaAguardar = await Promise.all(
      promisesApagarJogoCategoria
    );

    return promisesApagarJogoCategoriaAguardar;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao apagar as categorias dos jogos: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = excluirJogoCategoriaUseCase;
