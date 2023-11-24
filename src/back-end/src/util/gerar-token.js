const jwt = require("jsonwebtoken");
require("dotenv").config();

function gerarTokenJwt(email, expiraEm) {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: expiraEm, // expires in 5min
  });

  return { message: "Usuario logado com sucesso", auth: true, token: token };
}

module.exports = gerarTokenJwt;
