const express = require("express");
const plataformaRoutes = express();
const criarPlataformaUseCase = require("../use-case/plataforma-use-cases/criar-plataforma-use-case");
const buscarPlataformaUseCase = require("../use-case/plataforma-use-cases/buscar-plataforma-use-case");
const listarPlataformasUseCase = require("../use-case/plataforma-use-cases/listar-plataforma-use-case");
const excluirPlataformaUseCase = require("../use-case/plataforma-use-cases/excluir-plataforma-use-case");
const alterarPlataformaUseCase = require("../use-case/plataforma-use-cases/alterar-plataforma-use-case");
const validarCamposCriarPlataforma =
  require("../controllers/plataforma-controller").validarCamposCriarPlataforma;
const validarCampoBuscarPlataforma =
  require("../controllers/plataforma-controller").validarCampoBuscarPlataforma;
const validarCamposAlterarPlataforma =
  require("../controllers/plataforma-controller").validarCamposAlterarPlataforma;

plataformaRoutes.post("/plataforma", async (request, response) => {
  try {
    const input = request.body;

    const inputValido = validarCamposCriarPlataforma(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const plataforma = await criarPlataformaUseCase(input);

    return response.status(201).json({
      data: plataforma,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

plataformaRoutes.get("/plataforma", async (request, response) => {
  try {
    const categorias = await listarPlataformasUseCase();

    return response.status(200).json({
      data: categorias,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

plataformaRoutes.get("/plataforma/:id", async (request, response) => {
  try {
    const input = request.params;

    const inputValido = validarCampoBuscarPlataforma(input.id);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const categoria = await buscarPlataformaUseCase(input);

    return response.status(200).json({
      data: categoria,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

plataformaRoutes.put("/plataforma/:id", async (request, response) => {
  try {
    const params = request.params;
    const body = request.body;

    const input = {
      id: params.id,
      nome: body.nome,
      descricao: body.descricao,
    };

    const inputValido = validarCamposAlterarPlataforma(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const plataformaAtualizada = await alterarPlataformaUseCase(input);

    return response.status(200).json({
      data: plataformaAtualizada,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

plataformaRoutes.delete("/plataforma/:id", async (request, response) => {
  try {
    const input = request.params;

    const inputValido = validarCampoBuscarPlataforma(input.id);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    await excluirPlataformaUseCase(input);

    return response.status(204).send();
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

module.exports = plataformaRoutes;
