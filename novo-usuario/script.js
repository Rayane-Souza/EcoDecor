function mostrarSenha() {
    var inputPass = document.getElementById("senha");
    var btnMostrarPass = document.getElementById("btn-senha");
  
    if (inputPass.type === "password") {
      inputPass.setAttribute("type", "text");
      btnMostrarPass.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      inputPass.setAttribute("type", "password");
      btnMostrarPass.classList.replace("fa-eye-slash", "fa-eye");
    }
  }


let senha = document.getElementById('senhaC');
let senhaCR = document.getElementById('senhaCR');

function validarSenha() {
  if (senha.value != senhaCR.value) {
    senhaCR.setCustomValidity("Senhas diferentes!");
    senhaCR.reportValidity();
    return false;
  } else {
    senhaCR.setCustomValidity("");
    return true;
  }
}

senhaCR.addEventListener('input', validarSenha);