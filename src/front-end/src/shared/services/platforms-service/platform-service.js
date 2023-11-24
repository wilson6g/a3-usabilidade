import { instance } from "../../axios/axios";

async function findAllPlatforms() {
  const output = await instance.get("/plataforma");

  return output.data;
}

async function createPlatform(input) {
  const output = await instance.post("/plataforma", input);

  return output.data;
}

async function getPlatformById(id) {
  const output = await instance.get(`/plataforma/${id}`);

  return output.data;
}

async function updatePlatformById(id, input) {
  const output = await instance.put(`/plataforma/${id}`, input);

  return output.data;
}

async function deletePlatformById(id) {
  const output = await instance.delete(`/plataforma/${id}`);

  return output.data;
}

export {
  createPlatform,
  deletePlatformById,
  findAllPlatforms,
  getPlatformById,
  updatePlatformById,
};
