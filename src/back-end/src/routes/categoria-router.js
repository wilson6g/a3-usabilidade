const express = require("express");
const categoriaRoutes = express();
const validarCamposCriarCategoria =
  require("../controllers/categoria-controller").validarCamposCriarCategoria;
const criarCategoriaUseCase = require("../use-case/categoria-use-cases/criar-categoria-use-case");
const listarCategoriasUseCase = require("../use-case/categoria-use-cases/listar-categorias-use-case");

categoriaRoutes.post("/categoria", async (request, response) => {
  try {
    const input = request.body;

    const inputValido = validarCamposCriarCategoria(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const categoria = await criarCategoriaUseCase(input);

    return response.status(201).json({
      data: categoria,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

categoriaRoutes.get("/categoria", async (request, response) => {
  try {
    const categorias = await listarCategoriasUseCase();

    return response.status(200).json({
      data: categorias,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

module.exports = categoriaRoutes;
