const database = require("../../config/database");

async function buscarUsuario(coluna, input) {
  try {
    const [rows, fields] = await database.query(
      `SELECT * FROM usuario WHERE ${coluna} = ?`,
      [input]
    );

    return rows;
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    throw error;
  }
}

module.exports = buscarUsuario;
