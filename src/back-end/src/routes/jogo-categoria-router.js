const express = require("express");
const jogoCategoriaRoutes = express();
const validarCampoBuscarMeuJogo =
  require("../controllers/meus-jogos-controller").validarCampoBuscarMeuJogo;
const validarCamposCriarMeuJogo =
  require("../controllers/meus-jogos-controller").validarCamposCriarMeuJogo;
const criarMeusJogosUseCase = require("../use-case/meus-jogos-use-cases/criar-meus-jogos-use-case");
const listarMeusJogosUseCase = require("../use-case/meus-jogos-use-cases/listar-meus-jogos-use-case");

jogoCategoriaRoutes.post("/meus-jogos", async (request, response) => {
  try {
    const input = request.body;

    const inputValido = validarCamposCriarMeuJogo(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const meuJogo = await criarMeusJogosUseCase(input);

    return response.status(201).json({
      data: meuJogo,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

jogoCategoriaRoutes.get("/meus-jogos/:fk_usuario", async (request, response) => {
  try {
    const input = request.params;

    const inputValido = validarCampoBuscarMeuJogo(input.fk_usuario);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const meusJogo = await listarMeusJogosUseCase(input);

    return response.status(200).json({
      data: meusJogo,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

module.exports = jogoCategoriaRoutes;
