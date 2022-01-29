const button = document.querySelector(".btn");

function clicar(e) {
    button.className = "btn clicado";
}

button.addEventListener('click', clicar);