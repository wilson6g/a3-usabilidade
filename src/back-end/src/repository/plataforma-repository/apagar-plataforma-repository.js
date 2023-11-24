const database = require("../../config/database");

async function apagarPlataforma(id) {
  try {
    const rows = await database.query(
      "DELETE FROM plataforma WHERE id = ?",
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = apagarPlataforma;
