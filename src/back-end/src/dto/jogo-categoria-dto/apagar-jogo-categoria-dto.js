function apagarJogoCategoriaDTO({ id, categorias }) {
  return {
    fk_jogo: id,
    fk_categoria: categorias,
  };
}

module.exports = apagarJogoCategoriaDTO;
