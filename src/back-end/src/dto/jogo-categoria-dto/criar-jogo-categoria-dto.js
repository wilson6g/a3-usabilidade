const crypto = require("crypto");

function criarJogoCategoriaDTO({ fk_jogo, fk_categoria }) {
  return {
    id: crypto.randomUUID(),
    fk_jogo,
    fk_categoria,
  };
}

module.exports = criarJogoCategoriaDTO;
