const validarUUID = require("../util/validar-uuid");

function validarCamposCriarMeuJogoCategoria({ fk_jogo, fk_categoria }) {
  const todasCategoriasValidas = fk_categoria.every((categoria) => {
    return validarUUID(categoria);
  });

  if (!validarUUID(fk_jogo)) {
    throw {
      message: `O campo 'fk_jogo' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  } else if (!todasCategoriasValidas) {
    throw {
      message: `O campo 'fk_categoria' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  }
  return true;
}

function validarCampoBuscarMeuJogoCategoria(fk_categoria, fk_jogo) {
  const uuidEValido = validarUUID(fk_categoria);
  const uuidEValido2 = validarUUID(fk_jogo);

  if (!uuidEValido2) {
    throw {
      message: `O campo 'fk_jogo' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  } else if (!uuidEValido) {
    throw {
      message: `O campo 'fk_categoria' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  }
  return true;
}

function validarCamposAlterarMeuJogosCategoria({ id, fk_jogo, fk_categoria }) {
  const uuidEValido1 = validarUUID(id);
  const uuidEValido2 = validarUUID(fk_categoria);
  const uuidEValido3 = validarUUID(fk_jogo);

  if (!uuidEValido2) {
    throw {
      message: `O campo 'fk_categoria' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  } else if (!uuidEValido1) {
    throw {
      message: `O campo 'id' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  } else if (!uuidEValido3) {
    throw {
      message: `O campo 'fk_jogo' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  }
  return true;
}

module.exports = {
  validarCamposCriarMeuJogoCategoria,
  validarCampoBuscarMeuJogoCategoria,
  validarCamposAlterarMeuJogosCategoria,
};
