const games = [
  {
    name: "Ragnarok",
    description:
      "Ragnarök Online é um MMORPG desenvolvido pela empresa sul-coreana Gravity Corp. Os cenários do jogo foram baseados, inicialmente, no manhwa Ragnarök de Lee Myung-Jin. Ragnarök Online foi o primeiro jogo online coreano a ser exportado com sucesso a outros países.",
    platforms: ["Steam"],
  },
];

const validateFields = () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const platforms = document.getElementById("platforms").value;

  if (!description || !name || !platforms) {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  return true;
};

const cleanFields = () => {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("platforms").value = "";
};

const isDuplicateGame = (inputGame) => {
  return !!games.find((game) => game.name === inputGame.name);
};

const backPage = () => {
  document.getElementById("cancel").onclick = function () {
    window.history.back();
  };
};

const update = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const platforms = document.getElementById("platforms").value;
  const isValidFields = validateFields();

  if (!isValidFields) {
    return;
  }

  const game = {
    name,
    description,
    platforms,
  };

  const isDuplicatedGame = isDuplicateGame(game);

  if (!isDuplicatedGame) {
    games.push(game);
    window.location.href = "/src/pages/games-management.html";
  } else {
    alert("O jogo já existe na base de dados!");
    cleanFields();
    return;
  }

  cleanFields();
};
