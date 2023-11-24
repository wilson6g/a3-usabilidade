const bcrypt = require("bcrypt");

async function criptografarSenha(senha) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(senha, 10, (error, hash) => {
      if (error) {
        reject(error);
      } else {
        resolve(hash);
      }
    });
  });
}

module.exports = criptografarSenha;
