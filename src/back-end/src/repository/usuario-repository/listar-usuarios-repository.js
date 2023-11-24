const database = require("../../config/database");

async function listarUsuarios() {
  try {
    const rows = await database.query("SELECT * FROM usuario");

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = listarUsuarios;
