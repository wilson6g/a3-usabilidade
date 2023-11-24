const validarUUID = require("../util/validar-uuid");

function validarCamposCriarUsuario(input) {
  if (!input.usuario || !input.nome || !input.email || !input.senha) {
    throw { message: `Todos os campos são obrigatórios.`, status: 422 };
  } else if (input.usuario.length === 0) {
    throw { message: `O campo 'usuario' não deve ser vazio.`, status: 422 };
  } else if (input.usuario.length > 36) {
    throw {
      message: `O campo 'usuario' não pode ter mais de 36 caracteres.`,
      status: 422,
    };
  } else if (typeof input.usuario != "string") {
    throw {
      message: `O campo 'usuario' deve ser do tipo string.`,
      status: 422,
    };
  } else if (input.nome.length === 0) {
    throw { message: `O campo 'nome' não deve ser vazio.`, status: 422 };
  } else if (input.nome.length > 36) {
    throw {
      message: `O campo 'nome' não pode ter mais de 36 caracteres.`,
      status: 422,
    };
  } else if (typeof input.nome != "string") {
    throw { message: `O campo 'nome' deve ser do tipo string.`, status: 422 };
  } else if (input.email.length === 0) {
    throw { message: `O campo 'email' não deve ser vazio.`, status: 422 };
  } else if (input.email.length > 120) {
    throw {
      message: `O campo 'email' não pode ter mais de 120 caracteres.`,
      status: 422,
    };
  } else if (typeof input.email != "string") {
    throw { message: `O campo 'email' deve ser do tipo string.`, status: 422 };
  } else if (input.senha.length === 0) {
    throw { message: `O campo 'senha' não deve ser vazia.`, status: 422 };
  } else if (input.senha.length > 16) {
    throw {
      message: `O campo 'senha' não pode ter mais de 16 caracteres.`,
      status: 422,
    };
  } else if (typeof input.senha != "string") {
    throw { message: `O campo 'senha' deve ser do tipo string.`, status: 422 };
  }
  return true;
}

function validarCamposAlterarUsuario({ usuario, nome, email }) {
  if (usuario.length === 0) {
    throw new Error(`O campo 'usuario' não deve ser vazio.`, 422);
  } else if (usuario.length > 12) {
    throw new Error(
      `O campo 'usuario' não pode ter mais de 12 caracteres.`,
      422
    );
  } else if (typeof usuario != "string") {
    throw new Error(`O campo 'usuario' deve ser do tipo string.`, 422);
  } else if (nome.length === 0) {
    throw new Error(`O campo 'nome' não deve ser vazio.`, 422);
  } else if (nome.length > 36) {
    throw new Error(`O campo 'nome' não pode ter mais de 36 caracteres.`, 422);
  } else if (typeof nome != "string") {
    throw new Error(`O campo 'nome' deve ser do tipo string.`, 422);
  } else if (email.length === 0) {
    throw new Error(`O campo 'email' não deve ser vazio.`, 422);
  } else if (email.length > 120) {
    throw new Error(
      `O campo 'email' não pode ter mais de 120 caracteres.`,
      422
    );
  } else if (typeof email != "string") {
    throw new Error(`O campo 'email' deve ser do tipo string.`, 422);
  }
  return true;
}

function validarCampoBuscarUsuario(usuario) {
  if (usuario.length === 0) {
    throw new Error(`O campo 'usuario' não deve ser vazio.`, 422);
  } else if (usuario.length > 36) {
    throw new Error(
      `O campo 'usuario' não pode ter mais de 36 caracteres.`,
      422
    );
  } else if (typeof usuario != "string") {
    throw new Error(`O campo 'usuario' deve ser do tipo string.`, 422);
  }
  return true;
}

function validarCampoLoginUsuario(input) {
  if (input.email.length === 0) {
    throw new Error(`O campo 'email' não deve ser vazio.`, 422);
  } else if (input.email.length > 36) {
    throw new Error(
      `O campo 'email' não pode ter mais de 36 caracteres.`,
      422
    );
  } else if (typeof input.email != "string") {
    throw new Error(`O campo 'email' deve ser do tipo string.`, 422);
  } else if (input.senha.length === 0) {
    throw new Error(`O campo 'senha' não deve ser vazio.`, 422);
  } else if (input.senha.length > 36) {
    throw new Error(
      `O campo 'senha' não pode ter mais de 36 caracteres.`,
      422
    );
  } else if (typeof input.senha != "string") {
    throw new Error(`O campo 'senha' deve ser do tipo string.`, 422);
  }
  return true;
}

module.exports = {
  validarCamposCriarUsuario,
  validarCamposAlterarUsuario,
  validarCampoBuscarUsuario,
  validarCampoLoginUsuario,
};
