const validarUUID = require("../util/validar-uuid");

function validarCamposCriarPlataforma({ nome, descricao }) {
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
  } else if (descricao.length === 0) {
    throw {
      message: `O campo 'descricao' não deve ser vazio.`,
      status: 422,
    };
  } else if (descricao.length > 360) {
    throw {
      message: `O campo 'descricao' não pode ter mais de 360 caracteres.`,
      status: 422,
    };
  } else if (typeof descricao != "string") {
    throw {
      message: `O campo 'descricao' deve ser do tipo string.`,
      status: 422,
    };
  }
  return true;
}

function validarCamposAlterarPlataforma({ id, nome, descricao }) {
  const uuidEValido = validarUUID(id);

  if (!uuidEValido) {
    throw {
      message: `O campo 'id' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  } else if (nome.length === 0) {
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
  } else if (descricao.length === 0) {
    throw {
      message: `O campo 'descricao' não deve ser vazio.`,
      status: 422,
    };
  } else if (descricao.length > 360) {
    throw {
      message: `O campo 'descricao' não pode ter mais de 360 caracteres.`,
      status: 422,
    };
  } else if (typeof descricao != "string") {
    throw {
      message: `O campo 'descricao' deve ser do tipo string.`,
      status: 422,
    };
  }
  return true;
}

function validarCampoBuscarPlataforma(id) {
  const uuidEValido = validarUUID(id);

  if (!uuidEValido) {
    throw {
      message: `O campo 'id' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  }

  return true;
}

module.exports = {
  validarCamposCriarPlataforma,
  validarCamposAlterarPlataforma,
  validarCampoBuscarPlataforma,
};
