document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("change", function () {
    menu.style.display = "flex";
  });

  function closeMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.checked = false;

    menu.style.display = "none";
  }

  const sairButton = document.getElementById("sair");
  sairButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

  window.addEventListener("click", function (e) {
    if (e.target.type !== "checkbox") {
      closeMenu();
    }
  });
});
