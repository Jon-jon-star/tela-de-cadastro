const containerLogin = document.querySelector(".container");
const cadastroContainer = document.querySelector(".cadastro-Container");
const criarConta = document.querySelector("#semConta");
const btnVoltar = document.querySelector("#back");

function fazerCadastro() {
    containerLogin.setAttribute("style", "display: none")
    cadastroContainer.setAttribute("style", "display: block")
}

criarConta.addEventListener('click', fazerCadastro);

function voltarTela(){
    containerLogin.setAttribute("style", "display: block");
    cadastroContainer.setAttribute("style", "display: none")
}

btnVoltar.addEventListener('click', voltarTela);