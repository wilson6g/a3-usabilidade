const bcrypt = require("bcrypt");

async function descriptografarSenha(loginPassword, storedHash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(loginPassword, storedHash, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = descriptografarSenha;
