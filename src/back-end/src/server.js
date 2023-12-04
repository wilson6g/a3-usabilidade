const express = require("express");
const env = require("./config/env-database-config");
const usuarioRoutes = require("./routes/usuario-router");
const categoriaRoutes = require("./routes/categoria-router");
const plataformaRoutes = require("./routes/plataforma-router");
const jogoRoutes = require("./routes/jogo-router");
const cors = require("cors");
const {
  initDatabase
} = require("./config/init-database");

require("dotenv").config();

(async () => {
  if (env.synchronize === true) {
    await initDatabase();
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
