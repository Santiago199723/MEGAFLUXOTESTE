console.log("Token no localStorage:", localStorage.getItem("token"));

// Verifica se há um token no localStorage
if (localStorage.getItem("token") == null) {
  console.log("Usuário não logado. Redirecionando para signin.html");
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "signin.html";
} else {
  // Se houver um token, exibe a mensagem de saudação
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));

  const logado = document.querySelector("#logado");
  logado.innerHTML = `<span style="color: #4CAF50; font-family: 'Arial', sans-serif; font-size: 1.2em;">Olá, trader!</span>`;
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "signin.html";
}
