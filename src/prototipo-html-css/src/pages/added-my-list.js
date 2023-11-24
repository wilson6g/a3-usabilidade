const myGameList = [
  {
    name: "Ragnarok",
    grade:
      "Ragnarök Online é um MMORPG desenvolvido pela empresa sul-coreana Gravity Corp. Os cenários do jogo foram baseados, inicialmente, no manhwa Ragnarök de Lee Myung-Jin. Ragnarök Online foi o primeiro jogo online coreano a ser exportado com sucesso a outros países.",
    category: ["Jogado", "Zerado"],
  },
];

const validateFields = () => {
  const game = document.getElementById("game").value;
  const grade = document.getElementById("grade").value;
  const category = document.getElementById("category").value;

  if (!game || !grade || !category) {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  return true;
};

const cleanFields = () => {
  document.getElementById("game").value = "";
  document.getElementById("grade").value = "";
  document.getElementById("category").value = "";
};

const isDuplicateGame = (inputGame) => {
  return !!myGameList.find((game) => game.name === inputGame.name);
};

const backPage = () => {
  document.getElementById("cancel").onclick = function () {
    window.history.back();
  };
};

const create = (event) => {
  event.preventDefault();

  const game = document.getElementById("game").value;
  const grade = document.getElementById("grade").value;
  const category = document.getElementById("category").value;

  const isValidFields = validateFields();

  if (!isValidFields) {
    return;
  }

  const addGameToList = {
    game,
    grade,
    category,
  };

  const isDuplicatedGame = isDuplicateGame(addGameToList);

  if (!isDuplicatedGame) {
    myGameList.push(addGameToList);
    // window.location.href = "/src/pages/games.html";
  } else {
    alert("Esse jogo já existe na sua lista de jogos!");
    cleanFields();
    return;
  }

  cleanFields();
};
