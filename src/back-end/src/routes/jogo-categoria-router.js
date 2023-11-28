const express = require("express");
const jogoCategoriaRoutes = express();
const validarCampoBuscarMeuJogo =
  require("../controllers/meus-jogos-controller").validarCampoBuscarMeuJogo;
const validarCamposAlterarMeuJogos =
  require("../controllers/meus-jogos-controller").validarCamposAlterarMeuJogos;
const validarCamposCriarMeuJogo =
  require("../controllers/meus-jogos-controller").validarCamposCriarMeuJogo;

const criarMeusJogosCategoriaUseCase = require("")

const buscarMeuJogoUseCase = require("../use-case/meus-jogos-use-cases/buscar-meus-jogos-use-case");
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

    response.status(201).json({
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

    response.status(200).json({
      data: meusJogo,
    });
  } catch (error) {
    response.status(error.status).json({
      error: error.message,
    });
  }
});

// jogoCategoriaRoutes.put("/meus-jogos/:id", async (request, response) => {
//   try {
//     const params = request.params;
//     const body = request.body;

//     const input = {
//       id: params.id,
//       nome: body.nome,
//       descricao: body.descricao,
//       fk_plataforma: body.fk_plataforma,
//     };

//     const inputValido = validarCamposAlterarJogo(input);

//     if (!inputValido) {
//       throw {
//         message: "Os dados de entrada não são válidos.",
//         status: 422,
//       };
//     }

//     const jogoAtualizado = await alterarJogoUseCase(input);

//     response.status(200).json({
//       data: jogoAtualizado,
//     });
//   } catch (error) {
//     response.status(error.status).json({
//       error: error.message,
//     });
//   }
// });

// jogoCategoriaRoutes.delete("/meus-jogos/:id", async (request, response) => {
//   try {
//     const input = request.params;

//     const inputValido = validarCampoBuscarJogo(input.id);

//     if (!inputValido) {
//       throw {
//         message: "Os dados de entrada não são válidos.",
//         status: 422,
//       };
//     }

//     await excluirJogoUseCase(input);

//     response.status(204).send();
//   } catch (error) {
//     response.status(error.status).json({
//       error: error.message,
//     });
//   }
// });

module.exports = jogoCategoriaRoutes;
