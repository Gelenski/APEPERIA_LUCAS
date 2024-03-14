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
const form = document.querySelector("#form");
const nome = document.querySelector("#nome");
const dataNasc = document.querySelector("#dataNasc");
const email = document.querySelector("#email");
const rg = document.querySelector("#rg");
const opcao = document.querySelector("#opcao");
form.addEventListener("submit", function (a) {
  a.preventDefault();
});
//valida se é obrigatório
const required = (value) => (value === "" ? false : true);
//valida o email
const validaEmail = (email) => {
  const RegexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RegexEmail.test(email);
};
//formata o rg
const validaRg = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
  return value;
};
function formataRgInput() {
  const RgFormatado = validaRg(rg.value);
  rg.value = RgFormatado;
}
rg.addEventListener("blur", formataRgInput);
const mostraErro = (input, mensagem) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = mensagem;
};
