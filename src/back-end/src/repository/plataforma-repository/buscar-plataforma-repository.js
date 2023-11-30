const database = require("../../config/database");

async function buscarPlataforma(coluna, input) {
  try {
    const [rows, fields] = await database.query(
      `SELECT * FROM plataforma WHERE ${coluna} = ?`,
      [input]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = buscarPlataforma;
