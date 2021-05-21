






let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let profile = document.querySelector('#profile')
let sm1 = document.querySelector('#sm1')
let sm2 = document.querySelector('#sm2')
let sm1c = document.querySelector('#sm1c')
let sm2c = document.querySelector('#sm2c')


/*script da página index.html*/

function zoomPic() {
    profile.style.width = '450px'
    profile.style.height = '450px'
}

function outPic() {
    profile.style.width = '350px'
    profile.style.height = '350px'
}

function zoomSm1() {
    sm1.style.width = '100px'
    sm1.style.height = '100px'
}

function outSm1() {
    sm1.style.width = '50px'
    sm1.style.height = '50px'
}

function zoomSm2() {
    sm2.style.width = '100px'
    sm2.style.height = '100px'
}

function outSm2() {
    sm2.style.width = '50px'
    sm2.style.height = '50px'
}


/*script da página contato.html*/
nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
    } else {
        txtNome.innerHTML = ''
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail inválido'
    } else {
        txtEmail.innerHTML = ''
    }
}

function validaAss() {
    let txtAss = document.querySelector('#txtAss')

    if (assunto.value.length <= 100) {
        txtAss.innerHTML = "Mínimo de 100 carácteres"
        txtAssunto.style.display = 'block'
    } else {
        txtAss.innerHTML = ''
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Mensagem enviada com sucesso! Obrigade pelo contato.')
    }
    else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}

function zoomSm1c() {
    sm1c.style.width = '150px'
    sm1c.style.height = '150px'
}

function outSm1c() {
    sm1c.style.width = '100px'
    sm1c.style.height = '100px'
}

function zoomSm2c() {
    sm2c.style.width = '150px'
    sm2c.style.height = '150px'
}

function outSm2c() {
    sm2c.style.width = '100px'
    sm2c.style.height = '100px'
}

