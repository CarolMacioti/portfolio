import { valida } from "./validacao.js"

const inputs = document.querySelectorAll('input');


inputs.forEach(input => {
//fazendo um laço de repetição e add um evento
    input.addEventListener("blur", (evento) => {
        valida(evento.target)
    }) 
})