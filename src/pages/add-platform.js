const backPage = () => {
  const cancelButton = document.getElementById("cancel-platform");
  if (cancelButton) {
    cancelButton.onclick = function () {
      location.href = 'platform-management.html';
    };
  } else {
    console.error("Elemento com ID 'cancel' não encontrado.");
  }
};