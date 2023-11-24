const crypto = require("crypto");

function criarPlataformaDTO({ nome, descricao }) {
  return {
    id: crypto.randomUUID(),
    nome,
    descricao,
  };
}

module.exports = criarPlataformaDTO;
