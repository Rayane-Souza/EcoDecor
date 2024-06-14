function mostrarSenha() {
  var inputPass = document.getElementById("senhaLo");
  var btnMostrarPass = document.getElementById("iconLo");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    btnMostrarPass.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    inputPass.setAttribute("type", "password");
    btnMostrarPass.classList.replace("fa-eye-slash", "fa-eye");
  }
}