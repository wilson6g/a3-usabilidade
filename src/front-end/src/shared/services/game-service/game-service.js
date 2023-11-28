import { instance } from "../../axios/axios";

async function findAllGame() {
  const output = await instance.get("/jogo");

  return output.data;
}

async function createGame(input) {
  const output = await instance.post("/jogo", input);

  return output.data;
}

async function getGameById(id) {
  const output = await instance.get(`/jogo/${id}`);

  return output.data;
}

async function getAllGamesByUser(fk_usuario) {
  const output = await instance.get(`/jogo/usuario/${fk_usuario}`);

  return output.data;
}

async function updateGameById(id, input) {
  const output = await instance.put(`/jogo/${id}`, input);

  return output.data;
}

async function deleteGameById(id) {
  const output = await instance.delete(`/jogo/${id}`);

  return output.data;
}

export {
  createGame,
  deleteGameById,
  findAllGame,
  getAllGamesByUser,
  getGameById,
  updateGameById,
};
