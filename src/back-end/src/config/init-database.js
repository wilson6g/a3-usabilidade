const database = require("./database");
const env = require("../config/env-database-config");
const mysql = require("mysql2/promise");
const criptografarSenha = require("../util/criptografar-senha");
const crypto = require("crypto");

async function executeSQL(sql) {
  try {
    const rows = await database.query(sql);

    console.log("Script SQL executado com sucesso.");

    return rows;
  } catch (error) {
    console.error("Erro ao executar script SQL:", error);
    throw error;
  }
}

async function createDatabase() {
  const poolWithoutDB = mysql.createPool({
    connectionLimit: 10,
    host: env.host,
    user: env.user,
    password: env.password,
  });

  try {
    // Create a connection without specifying a database
    const connection = await poolWithoutDB.getConnection();

    // Create the database
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${env.database}\`;`
    );

    // Release the connection
    connection.release();

    console.log(`Database '${env.database}' created successfully.`);
  } catch (error) {
    console.error("Error creating database:", error);
  }
}

async function createTables() {
  const sqlScripts = [
    `CREATE TABLE ${env.database}.usuario (
      usuario VARCHAR(12) UNIQUE,
      nome VARCHAR(36) NOT NULL,
      email VARCHAR(120) UNIQUE PRIMARY KEY,
      senha VARCHAR(120) NOT NULL
    )`,
    `CREATE TABLE ${env.database}.plataforma (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(32) NOT NULL,
      descricao TEXT
    )`,
    `CREATE TABLE ${env.database}.categoria (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(32) NOT NULL
    )`,
    `CREATE TABLE ${env.database}.jogo (
      id VARCHAR(36) PRIMARY KEY,
      nome VARCHAR(120) NOT NULL,
      descricao TEXT,
      nota INT NOT NULL,
      fk_plataforma VARCHAR(36) NOT NULL,
      fk_usuario varchar(120) NOT NULL,
      FOREIGN KEY (fk_usuario) REFERENCES usuario(email),
      FOREIGN KEY (fk_plataforma) REFERENCES plataforma(id)
    )`,
    `CREATE TABLE ${env.database}.jogo_categoria (
      id VARCHAR(36) PRIMARY KEY,
      fk_jogo VARCHAR(36) NOT NULL,
      fk_categoria VARCHAR(36) NOT NULL,
      FOREIGN KEY (fk_jogo) REFERENCES jogo(id),
      FOREIGN KEY (fk_categoria) REFERENCES categoria(id)
    )`,
  ];

  try {
    for (const script of sqlScripts) {
      await executeSQL(script);
    }
    console.log("Todas as tabelas foram criadas com sucesso.");
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  }
}

async function createUsers() {
  const password = "123456789";

  const encryptedPassword = await criptografarSenha(password);

  const sqlScripts = [
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario1', 'nome1', 'email1@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario2', 'nome2', 'email2@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario3', 'nome3', 'email3@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario4', 'nome4', 'email4@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario5', 'nome5', 'email5@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario6', 'nome6', 'email6@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario7', 'nome7', 'email7@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario8', 'nome8', 'email8@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario9', 'nome9', 'email9@gmail.com', '${encryptedPassword}')`,
    `INSERT INTO ${env.database}.usuario (usuario, nome, email, senha) VALUES('usuario10', 'nome10', 'email10@gmail.com', '${encryptedPassword}')`,
  ];

  try {
    for (const script of sqlScripts) {
      await executeSQL(script);
    }
    console.log("Usuários criados com sucesso.");
  } catch (error) {
    console.error("Erro ao criar os usuários:", error);
  }
}

async function createPlatforms() {
  const uuids = [
    "6e9b4627-5d23-4225-998e-48e0314a9d56",
    "e6b67137-dfb5-4f57-bd8c-fbdaed341a93",
    "52a8a21e-3c05-48f2-83b1-bd5804c58049",
    "8cb5b3e1-34c7-47fb-b246-b32a44d89472",
    "04e8e4bb-95cb-4d97-8ad5-91c6f07b7491",
    "4d9d92d4-8f6a-4ef5-8fa1-0cd1d453fc98",
    "2a74e6d4-ff24-4b5e-b4b6-0678c3b7fe2c",
    "f95d29c5-b09a-4b7a-8b9d-7ac3f63ff92f",
    "31c56d0e-f951-4757-a8a0-9a5f6c7be88a",
    "3ab5c34d-8492-4e4d-9ed2-bc449ab1be9c",
  ];

  const plataformaScripts = [
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[0]}', 'PlayStation 5', 'Console de última geração da Sony com gráficos poderosos.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[1]}', 'Xbox Series X', 'Console de alta performance da Microsoft para jogos intensos.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[2]}', 'Nintendo Switch', 'Híbrido entre console de mesa e portátil com jogos exclusivos.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[3]}', 'PC', 'Plataforma versátil para uma variedade de jogos e personalização.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[4]}', 'PlayStation 4', 'Console anterior da Sony com uma grande biblioteca de jogos.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[5]}', 'Xbox One', 'Console da Microsoft com grande variedade de jogos e entretenimento.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[6]}', 'Android', 'Plataforma móvel com uma vasta seleção de jogos disponíveis.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[7]}', 'iOS', 'Sistema operacional móvel com uma variedade de jogos e aplicativos.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[8]}', 'PlayStation Portable (PSP)', 'Console portátil da Sony com uma coleção de jogos exclusivos.')`,
    `INSERT INTO ${env.database}.plataforma (id, nome, descricao) VALUES ('${uuids[9]}', 'Xbox 360', 'Console anterior da Microsoft com uma biblioteca diversificada de jogos.')`,
  ];

  try {
    for (const script of plataformaScripts) {
      await executeSQL(script);
    }
    console.log("Plataformas criados com sucesso.");
  } catch (error) {
    console.error("Erro ao criar as plataformas:", error);
  }
}

async function createGame() {
  const uuids = [
    "f95f2570-208b-4b9a-936a-79effb16a8d1",
    "e822426a-ed1a-4592-a822-22f01a982efb",
    "12b021bc-3e5a-40ca-b656-013b1aca1bfd",
    "121d4ad3-2a9d-485e-961e-1442b6e1b1e9",
    "a37beede-f97e-4f4f-a17f-48540694a852",
    "7408ef5d-c1ca-4338-94b8-4b78f2f6b900",
    "95a8ecfa-49c4-4436-b7fb-4eeb4ee8e3cf",
    "1b7f16a9-9429-4907-b7a0-51a97ef22de5",
    "0e25e9a7-7d6d-46b2-ba3f-63c4165a54b7",
    "1ce69f95-9eed-41a6-8f9a-0a40748cb4a1",
  ];

  const plataformaUuids = [
    "6e9b4627-5d23-4225-998e-48e0314a9d56",
    "e6b67137-dfb5-4f57-bd8c-fbdaed341a93",
    "52a8a21e-3c05-48f2-83b1-bd5804c58049",
    "8cb5b3e1-34c7-47fb-b246-b32a44d89472",
    "04e8e4bb-95cb-4d97-8ad5-91c6f07b7491",
    "4d9d92d4-8f6a-4ef5-8fa1-0cd1d453fc98",
    "2a74e6d4-ff24-4b5e-b4b6-0678c3b7fe2c",
    "f95d29c5-b09a-4b7a-8b9d-7ac3f63ff92f",
    "31c56d0e-f951-4757-a8a0-9a5f6c7be88a",
    "3ab5c34d-8492-4e4d-9ed2-bc449ab1be9c",
  ];

  const userEmails = [
    "email1@gmail.com",
    "email2@gmail.com",
    "email3@gmail.com",
    "email4@gmail.com",
    "email5@gmail.com",
    "email6@gmail.com",
    "email7@gmail.com",
    "email8@gmail.com",
    "email9@gmail.com",
    "email10@gmail.com",
  ];

  const jogoScripts = [
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[0]}', 'The Legend of Zelda: Breath of the Wild', 'Um jogo de aventura incrível com gráficos impressionantes e uma história envolvente.', 5, '${plataformaUuids[0]}', '${userEmails[0]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[1]}', 'Red Dead Redemption 2', 'Um épico de ação no velho oeste, com um mundo aberto vasto e detalhado.', 1, '${plataformaUuids[1]}', '${userEmails[1]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[2]}', 'The Witcher 3: Wild Hunt', 'Um RPG com uma história profunda, missões envolventes e belos gráficos.', 4, '${plataformaUuids[2]}', '${userEmails[2]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[3]}', 'God of War', 'Ação intensa com gráficos impressionantes e uma narrativa emocionante.', 2, '${plataformaUuids[3]}', '${userEmails[3]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[4]}', 'Fortnite', 'Um jogo de batalha real muito popular com uma comunidade vasta.', 3, '${plataformaUuids[4]}', '${userEmails[4]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[5]}', 'Minecraft', 'Um jogo de construção com infinitas possibilidades e criatividade.', 4, '${plataformaUuids[5]}', '${userEmails[5]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[6]}', 'Overwatch', 'Um shooter online com personagens únicos e mecânicas de jogo competitivas.', 5, '${plataformaUuids[6]}', '${userEmails[6]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[7]}', 'FIFA 22', 'Um simulador de futebol com gráficos realistas e jogabilidade imersiva.', 1, '${plataformaUuids[7]}', '${userEmails[7]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[8]}', 'Animal Crossing: New Horizons', 'Um jogo relaxante onde você pode construir sua própria ilha e interagir com amigos.', 3, '${plataformaUuids[8]}', '${userEmails[8]}')`,
    `INSERT INTO ${env.database}.jogo (id, nome, descricao, nota, fk_plataforma, fk_usuario) VALUES ('${uuids[9]}', 'Call of Duty: Warzone', 'Um jogo de tiro gratuito com modos de batalha e ação intensa.', 2, '${plataformaUuids[9]}', '${userEmails[9]}')`,
  ];

  try {
    for (const script of jogoScripts) {
      await executeSQL(script);
    }
    console.log("Todos os jogos foram criadas com sucesso.");
  } catch (error) {
    console.error("Erro ao criar os jogos:", error);
  }
}

async function createCategory() {
  const uuids = [
    "0e76353d-6790-46fc-8023-60e873c3f70f",
    "91619b26-946f-4c91-8c34-dc5775706247",
    "d8495879-f891-4201-a536-46a3dd71042b",
    "dc23e754-1f4d-4236-b7e5-2e6fc49ee8c1",
    "c8568fac-ae26-44a8-a68a-2017f364feb8",
    "06767304-9894-4c4c-93c4-87bd211717b2",
    "00665351-f520-4cd8-879f-eed8e47dc704",
    "f57cb3ee-cefe-402a-87fc-d1775be8c499",
    "70a50c01-b360-46be-9d2f-e3f864b541f9",
    "b81f7daf-fca1-4072-910e-61180a0dc1c2",
  ];

  const categoriaScripts = [
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[0]}', 'jogando')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[1]}', 'jogado')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[2]}', 'zerado')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[3]}', 'favorito')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[4]}', 'pendente')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[5]}', 'abandonado')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[6]}', 'colecionável')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[7]}', 'multiplayer')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[8]}', 'single player')`,
    `INSERT INTO ${env.database}.categoria (id, nome) VALUES ('${uuids[9]}', 'coop')`,
  ];

  try {
    for (const script of categoriaScripts) {
      await executeSQL(script);
    }
    console.log("Todos os jogos foram criadas com sucesso.");
  } catch (error) {
    console.error("Erro ao criar os jogos:", error);
  }
}

async function createGameCategory() {
  const uuids = [
    "ab718859-829b-47c1-bb17-ab37c1211aa3",
    "a327af7c-a38b-4477-a268-43e7db5b89f8",
    "4931afed-72ca-4542-bc90-88b5bfb5ffd4",
    "01c1c76d-a72a-4ee4-8241-93ccf30a79d7",
    "84600109-97cc-4668-a340-18119e15997e",
    "a037d851-c4d4-447c-b869-436e44298d7d",
    "42861deb-f4c3-43c0-af75-9749993e856e",
    "f50a3996-0059-4edf-85d6-7dae70ba0605",
    "3051e48c-94f8-4641-94d1-47f11f0f4b2e",
    "69e564de-d2b3-47a7-a36f-e88b7d52a3c0",
  ];

  const uuidsJogos = [
    "f95f2570-208b-4b9a-936a-79effb16a8d1",
    "e822426a-ed1a-4592-a822-22f01a982efb",
    "12b021bc-3e5a-40ca-b656-013b1aca1bfd",
    "121d4ad3-2a9d-485e-961e-1442b6e1b1e9",
    "a37beede-f97e-4f4f-a17f-48540694a852",
    "7408ef5d-c1ca-4338-94b8-4b78f2f6b900",
    "95a8ecfa-49c4-4436-b7fb-4eeb4ee8e3cf",
    "1b7f16a9-9429-4907-b7a0-51a97ef22de5",
    "0e25e9a7-7d6d-46b2-ba3f-63c4165a54b7",
    "1ce69f95-9eed-41a6-8f9a-0a40748cb4a1",
  ];

  const uuidsCategorias = [
    "0e76353d-6790-46fc-8023-60e873c3f70f",
    "91619b26-946f-4c91-8c34-dc5775706247",
    "d8495879-f891-4201-a536-46a3dd71042b",
    "dc23e754-1f4d-4236-b7e5-2e6fc49ee8c1",
    "c8568fac-ae26-44a8-a68a-2017f364feb8",
    "06767304-9894-4c4c-93c4-87bd211717b2",
    "00665351-f520-4cd8-879f-eed8e47dc704",
    "f57cb3ee-cefe-402a-87fc-d1775be8c499",
    "70a50c01-b360-46be-9d2f-e3f864b541f9",
    "b81f7daf-fca1-4072-910e-61180a0dc1c2",
  ];

  const categoriaScripts = [
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[0]}', '${uuidsJogos[0]}', '${uuidsCategorias[0]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[1]}', '${uuidsJogos[1]}', '${uuidsCategorias[1]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[2]}', '${uuidsJogos[2]}', '${uuidsCategorias[2]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[3]}', '${uuidsJogos[3]}', '${uuidsCategorias[3]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[4]}', '${uuidsJogos[4]}', '${uuidsCategorias[4]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[5]}', '${uuidsJogos[5]}', '${uuidsCategorias[5]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[6]}', '${uuidsJogos[6]}', '${uuidsCategorias[6]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[7]}', '${uuidsJogos[7]}', '${uuidsCategorias[7]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[8]}', '${uuidsJogos[8]}', '${uuidsCategorias[8]}')`,
    `INSERT INTO ${env.database}.jogo_categoria (id, fk_jogo, fk_categoria) VALUES ('${uuids[9]}', '${uuidsJogos[9]}', '${uuidsCategorias[9]}')`,
  ];

  try {
    for (const script of categoriaScripts) {
      await executeSQL(script);
    }
    console.log("Todos os jogos foram criadas com sucesso.");
  } catch (error) {
    console.error("Erro ao criar os jogos:", error);
  }
}

async function initDatabaseData() {
  await createUsers();
  await createPlatforms();
  await createCategory();
  await createGame();
  await createGameCategory();
}

module.exports = {
  createDatabase,
  createTables,
  initDatabaseData,
};
