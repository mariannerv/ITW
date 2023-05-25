// GRUPO 18

//TURMA DA PL26
//
//YANA KOTSYUBYNSKA 58637
//MARIANA VALENTE 55945
//DIOGO GUTIERRES 49297
//
//

const storageLogin = 'login';
let logged = JSON.parse(localStorage.getItem('login'));


function principal() {
    if (logged === null) {
        window.location.assign("login.html");
    }
};

function logOut() {
    window.location.assign("login.html")
}



addEventListener('load', principal)