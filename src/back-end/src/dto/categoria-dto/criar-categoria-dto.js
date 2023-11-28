const crypto = require("crypto");

function criarCategoriaDTO({ nome }) {
  return {
    id: crypto.randomUUID(),
    nome,
  };
}

module.exports = criarCategoriaDTO;
