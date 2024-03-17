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
const elementosInput = [nome, dataNasc, email, rg, opcao];

addEventListener("submit", (form) => {
  form.preventDefault();
  if (!nome.value) {
    alert("Por favor insira seu nome");
    return;
  }

  if (!dataNasc.value) {
    alert("insira sua data de nascimento");
    return;
  }
  if (!email.value.trim()) {
    alert("Por favor insira seu email");
    return;
  } else if (!validaEmail(email.value)) {
    alert("Digite seu email corretamente");
    return;
  }
  if (!rg.value.trim()) {
    alert("Por favor insira seu RG");
    return;
  }
  if (!testaRG(rg.value)) {
    alert("Insira seu RG corretamente");
    return;
  }
  if (!opcao.value) {
    alert("Escolha sua área de atuação");
    return;
  }
  alert("Formulário enviado com sucesso!");
  limparFormulario();
  modal.style.display = "none";
});

const validaEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};
//formatação/validação do rg
const testaRG = (v) => {
  const regexRG = /^(\d{1,2})\.?(\d{3})\.?(\d{3})-?(\d{1})$/;
  return regexRG.test(v);
};

const Rg = (v) => {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
  return v;
};

document.getElementById("rg").addEventListener("input", function (e) {
  var rg = e.target.value;
  e.target.value = Rg(rg);
});

const limparFormulario = () => {
  nome.value = "";
  dataNasc.value = "";
  email.value = "";
  rg.value = "";
  opcao.value = "";
};
