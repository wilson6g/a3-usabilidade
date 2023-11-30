const database = require("../../config/database");

async function buscarCategoria(coluna, input) {
  try {
    const [rows, fields] = await database.query(
      `SELECT * FROM categoria WHERE ${coluna} = ?`,
      [input]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = buscarCategoria;
