const criarJogoCategoriaDTO = require("../../dto/jogo-categoria-dto/criar-jogo-categoria-dto");
const validarCamposCriarMeuJogoCategoria =
  require("../../controllers/jogo-categoria-controller").validarCamposCriarMeuJogoCategoria;
const crypto = require("crypto");
const criarJogoCategoriaRepository = require("../../repository/jogo-categoria-repository/criar-jogo-categoria-repository");
const buscarJogoCategoriaExistenteRepository = require("../../repository/jogo-categoria-repository/buscar-jogo-categoria-existente");

async function criarJogoCategoriaUseCase(input) {
  try {
    const inputValido = validarCamposCriarMeuJogoCategoria(input);

    if (!inputValido) {
      const error = new Error("Os dados de entrada não são válidos.");
      error.statusCode = 422;
      throw error;
    }

    const meusJogosCategoria = criarJogoCategoriaDTO(input);

    // Cria um array de promessas de busca das categorias existentes
    const promisesBuscaCategoria = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente = await buscarJogoCategoriaExistenteRepository(
          {
            fk_jogo: meusJogosCategoria.fk_jogo,
            fk_categoria: categoria,
          }
        );
        return categoriaExistente;
      }
    );

    // Aguarda todas as promessas serem resolvidas
    const categoriasExistenteResultados = await Promise.all(
      promisesBuscaCategoria
    );

    // Verifica se alguma categoria existente foi encontrada
    const existeCategoriaExistente = categoriasExistenteResultados.some(
      (categoria) => categoria
    );

    if (existeCategoriaExistente) {
      const error = new Error(
        "Esse jogo já possui essa categoria associada na sua lista de jogos."
      );
      error.statusCode = 400;
      throw error;
    }

    const promisesCriarCategorias = meusJogosCategoria.fk_categoria.map(
      async (categoria) => {
        const categoriaExistente = await criarJogoCategoriaRepository({
          id: crypto.randomUUID(),
          fk_jogo: meusJogosCategoria.fk_jogo,
          fk_categoria: categoria,
        });
        return categoriaExistente;
      }
    );

    // Aguarda todas as promessas serem resolvidas
    const promisesCriarCategoriasAguardar = await Promise.all(
      promisesCriarCategorias
    );

    return promisesCriarCategoriasAguardar;
  } catch (error) {
    const statusCode = error.statusCode || 500;
    throw {
      message: `Erro ao adicionar o jogo a sua lista de jogos: ${error.message}`,
      status: statusCode,
    };
  }
}

module.exports = criarJogoCategoriaUseCase;
