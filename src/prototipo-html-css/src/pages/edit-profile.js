const users = [
  {
    name: "admin",
    email: "admin@gmail.com",
  },
  {
    name: "mod",
    email: "mod@gmail.com",
  },
];

const validateFields = () => {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  if (!email || !name) {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  return true;
};

const cleanFields = () => {
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
};

const isDuplicateUser = (inputUser) => {
  return !!users.find(
    (user) => user.email === inputUser.email || user.name === inputUser.name
  );
};

const backPage = () => {
  document.getElementById("cancel").onclick = function () {
    window.history.back();
  };
};

const update = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const isValidFields = validateFields();

  if (!isValidFields) {
    return;
  }

  const user = {
    email,
    name,
  };

  const isDuplicatedUser = isDuplicateUser(user);

  if (isDuplicatedUser) {
    users.push(user);
    window.location.href = "/src/pages/profile.html";
  } else {
    alert("Usuário não existe na base de dados!");
    cleanFields();
    return;
  }

  cleanFields();
};
