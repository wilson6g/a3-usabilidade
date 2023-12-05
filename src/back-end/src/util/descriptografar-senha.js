const bcrypt = require("bcrypt");

async function descriptografarSenha(loginPassword, storedHash) {
  try {
    const resultado = await bcrypt.compare(loginPassword, storedHash);
    return resultado;
  } catch (error) {
    console.error("Erro ao comparar senhas:", error);
    throw error;
  }
}

module.exports = descriptografarSenha;
