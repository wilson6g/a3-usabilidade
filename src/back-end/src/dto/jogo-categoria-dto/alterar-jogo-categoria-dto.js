function alterarJogoCategoriaDTO(input) {
  return {
    id: input.jogo_categoria.map(
      (jogo_categoria) => jogo_categoria.jogo_categoria_id
    ),
    fk_jogo: input.id,
    fk_categoria: input.categorias.map((categoria) => categoria.categoria_id),
  };
}

module.exports = alterarJogoCategoriaDTO;
