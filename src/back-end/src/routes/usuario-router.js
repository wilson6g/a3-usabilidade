const express = require("express");
const usuarioRoutes = express();
const criarUsuarioUseCase = require("../use-case/usuario-use-cases/criar-usuario-use-case");
const loginUsuarioUseCase = require('../use-case/usuario-use-cases/login-usuario-use-case');
const { validarCamposCriarUsuario, validarCampoLoginUsuario } = require("../controllers/usuario-controller");

usuarioRoutes.post("/registrar", async (request, response) => {
  try {
    const input = request.body;

    const inputValido = validarCamposCriarUsuario(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const usuario = await criarUsuarioUseCase(input);

    response.status(201).json({
      data: usuario,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

usuarioRoutes.post("/login", async (request, response) => {
  try {
    const input = request.body;

    const inputValido = validarCampoLoginUsuario(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const usuario = await loginUsuarioUseCase(input);

    response.status(201).json({
      data: usuario,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

usuarioRoutes.get("/usuario/:id", (request, response) => {});

module.exports = usuarioRoutes;
