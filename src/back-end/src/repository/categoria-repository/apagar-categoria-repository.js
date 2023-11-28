const database = require("../../config/database");

async function apagarCategoria(id) {
  try {
    const rows = await database.query(
      "DELETE FROM categoria WHERE id = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = apagarCategoria;
