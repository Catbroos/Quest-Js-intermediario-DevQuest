const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll(".input");
const entradas = document.querySelectorAll(".entrada");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((input, indice) => {
        if (input.value !== "") {
            entradas[indice].classList.remove("invalido");
            entradas[indice].classList.add("valido");
        } else if (input.value === "") {
            entradas[indice].classList.remove("valido");
            entradas[indice].classList.add("invalido");
        };
    });
});