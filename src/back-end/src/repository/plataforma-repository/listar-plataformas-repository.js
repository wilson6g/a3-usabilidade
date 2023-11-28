const database = require("../../config/database");

async function listarPlataformas() {
  try {
    const rows = await database.query("SELECT * FROM plataforma");

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = listarPlataformas;
