const platforms = [
  {
    name: "Steam",
    description:
      "Steam é um software de gestão de direitos digitais criado pela Valve Corporation ou Valve L.L.C., de plataformas digitais como jogos e aplicativos de programação e fornece serviços facilitados como atualização automática de jogos, e preços acessíveis aos usuários.",
  },
];

const validateFields = () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  if (!description || !name) {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  return true;
};

const cleanFields = () => {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
};

const isDuplicatePlatform = (inputPlatform) => {
  return !!platforms.find((platform) => platform.name === inputPlatform.name);
};

const backPage = () => {
  document.getElementById("cancel").onclick = function () {
    window.history.back();
  };
};

const create = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const isValidFields = validateFields();

  if (!isValidFields) {
    return;
  }

  const platform = {
    name,
    description,
  };

  const isDuplicatedPlatform = isDuplicatePlatform(platform);

  if (!isDuplicatedPlatform) {
    platforms.push(platform);
    window.location.href = "/src/pages/platform-management.html";
  } else {
    alert("A plataforma já existe na base de dados!");
    cleanFields();
    return;
  }

  cleanFields();
};
