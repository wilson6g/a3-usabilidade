function alterarJogoDTO({
  id,
  nome,
  nota,
  descricao,
  fk_plataforma,
  fk_categoria,
  fk_usuario,
}) {
  return {
    id,
    nome,
    descricao,
    nota,
    fk_plataforma,
    fk_categoria,
    fk_usuario,
  };
}

module.exports = alterarJogoDTO;
