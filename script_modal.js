//Eventos do Modal
const modal = document.getElementById("modal");
const botao = document.getElementById("botaoModal");
const span = document.getElementsByClassName("close")[0];
botao.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Eventos do formulário
