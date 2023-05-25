// GRUPO 18

//TURMA DA PL26
//
//YANA KOTSYUBYNSKA 58637
//MARIANA VALENTE 55945
//DIOGO GUTIERRES 49297
//
//

function principal() {
    let logged = JSON.parse(localStorage.getItem('login'));
    let users = JSON.parse(localStorage.getItem('utilizadores'));

    var hour = Math.floor(logged.tempoTotal / 3600);
    var minute = Math.floor((logged.tempoTotal - hour * 3600) / 60);
    var seconds = logged.tempoTotal - (hour * 3600 + minute * 60);
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (seconds < 10)
        seconds = "0" + seconds;

    document.getElementById('nomeUser').innerHTML = `${logged.nome}`;
    document.getElementById('emailUser').innerHTML = `${logged.email}`;
    document.getElementById('nascimentoUser').innerHTML = `${logged.nascimento}`;
    document.getElementById('generoUtilizador').innerHTML = `${logged.genero}`;
    document.getElementById('tempoUser').innerHTML = "Tempo total:  " + hour + ":" + minute + ":" + seconds;

    for (let i = 0; i < users.length; i++) {

        if (logged.nome === users[i].nome) {

            if (users[i].highScore !== undefined) {

                document.getElementById('pontuacaoUser').innerHTML = `Pontuação: ${users[i].highScore}`;
            }
        }
    }
}

window.addEventListener("load", principal);