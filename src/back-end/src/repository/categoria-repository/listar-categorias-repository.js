const database = require("../../config/database");

async function listarCategorias() {
  try {
    const rows = await database.query("SELECT * FROM categoria");

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = listarCategorias;
