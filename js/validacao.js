export function valida(input) {

    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
         input.parentElement.classList.remove('contato__input--invalido')
         input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    }else{
        input.parentElement.classList.add('contato__input--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    } 
}


const tiposDeErro = [
    "valueMissing",
    "typeMismatch"
]


/* Mensagens de erro exibidas na página - ADD no HTML usando data-tipo=""*/
const mensagensDeErro = {
     nome: {
        valueMissing: "O campo de nome não pode estar vazio."
    },
     email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "O email digitado não é válido."
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        patternMismatch: "A senha deve conter de 6 a 12 caracteres, 1 letra minúscula, 1 letra maiúscula e um número."
    },
}

/* validadores de função */
const validadores = {
   
}

function mostraMensagemDeErro(tipoDeInput, input) {

    let mensagem = ''

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro
            [tipoDeInput][erro]
        }
    })

    return mensagem
}



