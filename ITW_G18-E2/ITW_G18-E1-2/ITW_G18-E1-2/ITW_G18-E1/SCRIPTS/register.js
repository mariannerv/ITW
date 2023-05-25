// GRUPO 18

//TURMA DA PL26
//
//YANA KOTSYUBYNSKA 58637
//MARIANA VALENTE 55945
//DIOGO GUTIERRES 49297
//
//

let formulario = null;

let players = [];

const storageUtilizadores = "utilizadores";

function principal() {

    formulario = document.forms.formRegister;
    document.getElementById("registarUtilizador").addEventListener("click", trataUtilizador);
    players = JSON.parse(localStorage.getItem(storageUtilizadores)) || [];
}

function Utilizadores(nome, email, nascimento, genero, password) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.genero = genero;
    this.password = password;
    this.highScore = 0;
    this.tempoTotal = 0;
}



function trataUtilizador() {

    let registoValido = formulario.reportValidity();
    let utilizador = null;
    let inUse = false
    if (registoValido) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].email === formulario.elements.email.value) { //Para checkar se o email já está em uso.
                alert('O email submetido já se encontra em uso.');
                inUse = true;
                break;

            }
        }
        if (!inUse) {
            utilizador = new Utilizadores(
                formulario.elements.nome.value,
                formulario.elements.email.value,
                formulario.elements.nascimento.value,
                formulario.elements.genero.value,
                formulario.elements.pass.value)

            players.push(utilizador);

            localStorage.setItem(storageUtilizadores, JSON.stringify(players));
            formulario.reset();
            window.location.assign("login.html");
        }
    }
}
window.addEventListener("load", principal);