const button = document.querySelector(".btn");

function clicar(e) {
    e.preventDefault();

    if(button.className == "btn"){
        button.className = "btn clicado";
    }

}

button.addEventListener('click', clicar);