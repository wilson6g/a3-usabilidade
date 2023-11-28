import { instance } from "../../axios/axios";

async function findAllCategories() {
  const output = await instance.get("/categoria");

  return output.data;
}

export { findAllCategories };
