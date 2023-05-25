// GRUPO 18

//TURMA DA PL26
//
//YANA KOTSYUBYNSKA 58637
//MARIANA VALENTE 55945
//DIOGO GUTIERRES 49297
//
//

const users = JSON.parse(localStorage.getItem('utilizadores')); //O array com os utilizadores, passwords, etc...

let user = [];


const storageLogin = 'login'



function login(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            user = users[i];
            localStorage.setItem(storageLogin, JSON.stringify(user));
            return true;
        }
    }

    return false;
}


document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const isLoggedIn = login(email, password);
        if (isLoggedIn) {
            console.log('Login foi efetuado com sucesso!');
            window.location.assign("jogo.html");
        } else {
            alert('Email ou password inválidos.');
        }
    });
});



window.addEventListener("load", login);