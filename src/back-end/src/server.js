const express = require("express");
const createDatabase = require("./config/init-database").createDatabase;
const createTables = require("./config/init-database").createTables;
const env = require("./config/env-database-config");
const usuarioRoutes = require("./routes/usuario-router");
const categoriaRoutes = require("./routes/categoria-router");
const plataformaRoutes = require("./routes/plataforma-router");
const jogoRoutes = require("./routes/jogo-router");
const cors = require("cors");

require("dotenv").config();

(async () => {
  if (env.synchronize === true) {
    await createDatabase();
    await createTables();
  }
})();
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(usuarioRoutes);
server.use(categoriaRoutes);
server.use(plataformaRoutes);
server.use(jogoRoutes);

const PORT = process.env.APP_PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
