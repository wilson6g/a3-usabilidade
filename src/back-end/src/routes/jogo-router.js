const express = require("express");
const jogoRoutes = express();
const validarCamposCriarJogo =
  require("../controllers/jogo-controller").validarCamposCriarJogo;
const validarCampoBuscarJogo =
  require("../controllers/jogo-controller").validarCampoBuscarJogo;
const validarCamposAlterarJogo =
  require("../controllers/jogo-controller").validarCamposAlterarJogo;
const criarJogoUseCase = require("../use-case/jogo-use-cases/criar-jogo-use-case");
const listarJogoUseCase = require("../use-case/jogo-use-cases/listar-jogo-use-case");
const alterarJogoUseCase = require("../use-case/jogo-use-cases/alterar-jogo-use-case");
const excluirJogoUseCase = require("../use-case/jogo-use-cases/excluir-jogo-use-case");
const buscarJogoUsuarioUseCase = require("../use-case/jogo-use-cases/buscar-jogo-usuario-use-case");
const {
  validarCampoBuscarJogoUsuario,
} = require("../controllers/jogo-controller");
const buscarJogoPorIdUseCase = require("../use-case/jogo-use-cases/buscar-jogo-id-use-case");

jogoRoutes.post("/jogo", async (request, response) => {
  try {
    const input = request.body;

    const inputValido = validarCamposCriarJogo(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const jogo = await criarJogoUseCase(input);

    response.status(201).json({
      data: jogo,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

jogoRoutes.get("/jogo", async (request, response) => {
  try {
    const jogo = await listarJogoUseCase();

    response.status(200).json({
      data: jogo,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

jogoRoutes.get("/jogo/usuario/:fk_usuario", async (request, response) => {
  try {
    const input = request.params;

    const inputValido = validarCampoBuscarJogoUsuario(input.fk_usuario);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const jogo = await buscarJogoUsuarioUseCase(input);

    response.status(200).json({
      data: jogo,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

jogoRoutes.get("/jogo/:id", async (request, response) => {
  try {
    const input = request.params;

    const inputValido = validarCampoBuscarJogo(input.id);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const jogo = await buscarJogoPorIdUseCase(input);

    response.status(200).json({
      data: jogo,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

jogoRoutes.put("/jogo/:id", async (request, response) => {
  try {
    const params = request.params;
    const body = request.body;

    const input = {
      id: params.id,
      nome: body.nome,
      descricao: body.descricao,
      fk_plataforma: body.fk_plataforma,
      nota: body.nota,
      fk_categoria: body.fk_categoria,
      fk_usuario: body.fk_usuario,
    };

    const inputValido = validarCamposAlterarJogo(input);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    const jogoAtualizado = await alterarJogoUseCase(input);

    response.status(200).json({
      data: jogoAtualizado,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

jogoRoutes.delete("/jogo/:id", async (request, response) => {
  try {
    const input = request.params;

    const inputValido = validarCampoBuscarJogo(input.id);

    if (!inputValido) {
      throw {
        message: "Os dados de entrada não são válidos.",
        status: 422,
      };
    }

    await excluirJogoUseCase(input);

    response.status(204).send();
  } catch (error) {
    console.error("jogo delete", error);
    response.status(error.status).json({
      error: error.message,
    });
  }
});

module.exports = jogoRoutes;
