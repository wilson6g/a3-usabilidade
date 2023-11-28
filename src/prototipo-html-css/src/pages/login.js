const checkUser = (email, password) => {
  const isCanLogin = !!users.find(
    (user) => user.email === email && user.password === password
  );

  return isCanLogin;
};

const login = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const isCanLogin = checkUser(email, password);

  if (isCanLogin) {
    window.location.href = "/src/pages/library.html"; // Redirecionar para a página '/src/pages/library.html'
  } else {
    alert("E-mail ou senha inválidos.");
    return;
  }
};
