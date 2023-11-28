import { instance } from "../../axios/axios";

async function loginService(input) {
  const output = await instance.post("/login", input);

  return output.data;
}

async function registrarUsuarioService(input) {
  const output = await instance.post("/registrar", input);

  return output.data;
}

export { loginService, registrarUsuarioService };
