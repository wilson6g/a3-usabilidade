const validarUUID = require("../util/validar-uuid");

function validarCamposCriarJogo({
  nome,
  descricao,
  nota,
  fk_plataforma,
  fk_usuario,
}) {
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
  } else if (!validarUUID(fk_plataforma)) {
    throw {
      message: `O campo 'fk_plataforma' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  } else if (!(nota <= 5)) {
    throw {
      message: `O campo 'nota' deve ser menor ou igual a 5.`,
      status: 422,
    };
  } else if (fk_usuario.length === 0) {
    throw { message: `O campo do usuário não deve ser vazio.`, status: 422 };
  } else if (fk_usuario.length > 120) {
    throw {
      message: `O campo do usuário não pode ter mais de 120 caracteres.`,
      status: 422,
    };
  } else if (typeof fk_usuario != "string") {
    throw {
      message: `O campo do usuário deve ser do tipo string.`,
      status: 422,
    };
  }

  return true;
}

function validarCampoBuscarJogo(id) {
  if (!validarUUID(id)) {
    throw {
      message: `O campo 'id' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  }

  return true;
}

function validarCampoBuscarJogoUsuario(fk_usuario) {
  if (fk_usuario.length === 0) {
    throw { message: `O campo do usuário não deve ser vazio.`, status: 422 };
  } else if (fk_usuario.length > 120) {
    throw {
      message: `O campo do usuário não pode ter mais de 120 caracteres.`,
      status: 422,
    };
  } else if (typeof fk_usuario != "string") {
    throw {
      message: `O campo do usuário deve ser do tipo string.`,
      status: 422,
    };
  }

  return true;
}

function validarCamposAlterarJogo({
  id,
  nome,
  descricao,
  fk_plataforma,
  nota,
}) {
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
  } else if (!validarUUID(fk_plataforma)) {
    throw {
      message: `O campo 'fk_plataforma' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  } else if (!(nota <= 5)) {
    throw {
      message: `O campo 'nota' deve ser menor ou igual a 5.`,
      status: 422,
    };
  } else if (!validarUUID(id)) {
    throw {
      message: `O campo 'id' não é do tipo uuid, portanto, não é válido.`,
      status: 422,
    };
  }

  return true;
}

module.exports = {
  validarCamposCriarJogo,
  validarCamposAlterarJogo,
  validarCampoBuscarJogo,
  validarCampoBuscarJogoUsuario,
};
