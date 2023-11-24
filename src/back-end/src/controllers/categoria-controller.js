const validarUUID = require("../util/validar-uuid");

function validarCamposCriarCategoria({ nome }) {
  if (nome.length === 0) {
    throw {
      message: `O campo 'nome' não deve ser vazio.`,
      status: 422,
    };
  } else if (nome.length > 32) {
    throw {
      message: `O campo 'nome' não pode ter mais de 32 caracteres.`,
      status: 422,
    };
  } else if (typeof nome != "string") {
    throw {
      message: `O campo 'nome' deve ser do tipo string.`,
      status: 422,
    };
  }
  return true;
}

function validarCampoBuscarCategoria(id) {
  const uuidEValido = validarUUID(id);

  if (!uuidEValido) {
    throw {
      message: `O campo 'id' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  }

  return true;
}

module.exports = { validarCamposCriarCategoria, validarCampoBuscarCategoria };
