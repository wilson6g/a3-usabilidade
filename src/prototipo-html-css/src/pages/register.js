const users = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: "root",
  },
  {
    name: "mod",
    email: "mod@gmail.com",
    password: "root",
  },
];

const validateFields = () => {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeat-password").value;

  if (!email || !name || !password || !repeatPassword) {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  return true;
};

const cleanFields = () => {
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("repeat-password").value = "";
};

const isDuplicateUser = (inputUser) => {
  return !!users.find(
    (user) => user.email === inputUser.email || user.name === inputUser.name
  );
};

const register = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeat-password").value;

  const isValidFields = validateFields();

  if (!isValidFields) {
    return;
  }

  const isEqualsPassword = samePassword(password, repeatPassword);

  if (!isEqualsPassword) {
    alert("As senhas devem ser iguais.");
    return;
  }

  const user = {
    email,
    name,
    password,
  };

  const isDuplicatedUser = isDuplicateUser(user);

  if (isDuplicatedUser) {
    alert("Usuário já existe na base de dados!");
    return;
  } else {
    users.push(user);
    window.location.href = "/src/pages/login.html";
  }

  cleanFields();
};
