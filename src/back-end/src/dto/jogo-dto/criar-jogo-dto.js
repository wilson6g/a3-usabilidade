const crypto = require("crypto");

function criarJogoDTO({ nome, descricao, nota, fk_plataforma, fk_usuario, fk_categoria }) {
  return {
    id: crypto.randomUUID(),
    nome,
    descricao,
    nota,
    fk_usuario,
    fk_plataforma,
    fk_categoria,
  };
}

module.exports = criarJogoDTO;
