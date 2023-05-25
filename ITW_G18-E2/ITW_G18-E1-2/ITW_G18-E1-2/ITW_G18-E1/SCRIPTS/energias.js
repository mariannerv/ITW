// GRUPO 18

//TURMA DA PL26
//
//YANA KOTSYUBYNSKA 58637
//MARIANA VALENTE 55945
//DIOGO GUTIERRES 49297
//
//

var energias = ["Dark", "Water", "Electric", "Fighting", "Fire", "Grass", "Normal", "Psychic", "Steel"];
var tabela = [];
var rows = 8;
var columns = 8;
var pontuacao = 0;
var joias = 0;

var blocoAtual;
var outroBloco;
let users = JSON.parse(localStorage.getItem('utilizadores'));

function principal() {
    começaJogo();

    window.setInterval(function() {
        destruirEnergy();
        mexerEnergy();
        criarEnergy();
    }, 100);

    document.getElementById("pararJogo").addEventListener("click", desistir);
}



function energiaAleatoria() {
    return energias[Math.floor(Math.random() * energias.length)];
}

function começaJogo() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let bloco = document.createElement("img");
            bloco.id = r.toString() + "-" + c.toString();
            bloco.src = "../IMAGES/Tipos/" + energiaAleatoria() + ".png";

            bloco.addEventListener("dragstart", dragStart);
            bloco.addEventListener("dragover", dragOver);
            bloco.addEventListener("dragenter", dragEnter);
            bloco.addEventListener("dragleave", dragLeave);
            bloco.addEventListener("drop", dragDrop);
            bloco.addEventListener("dragend", dragEnd);



            document.getElementById("tabela").append(bloco);
            row.push(bloco);
        }
        tabela.push(row);
    }

    console.log(tabela);
}

function dragStart() {
    blocoAtual = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    outroBloco = this;
}

function dragEnd() {

    if (blocoAtual.src.includes("blank") || outroBloco.src.includes("blank")) {
        return;
    }

    let coordsAtuais = blocoAtual.id.split("-");
    let r = parseInt(coordsAtuais[0]);
    let c = parseInt(coordsAtuais[1]);

    let outrasCoords = outroBloco.id.split("-");
    let r2 = parseInt(outrasCoords[0]);
    let c2 = parseInt(outrasCoords[1]);

    let mexerEsquerda = c2 == c - 1 && r == r2;
    let mexerDireita = c2 == c + 1 && r == r2;

    let mexerCima = r2 == r - 1 && c == c2;
    let mexerBaixo = r2 == r + 1 && c == c2;

    let adjacente = mexerEsquerda || mexerDireita || mexerCima || mexerBaixo;

    if (adjacente) {
        let imgAtual = blocoAtual.src;
        let outraImg = outroBloco.src;
        blocoAtual.src = outraImg;
        outroBloco.src = imgAtual;

        let valido = verificaValido();
        if (!valido) {
            let imgAtual = blocoAtual.src;
            let outraImg = outroBloco.src;
            blocoAtual.src = outraImg;
            outroBloco.src = imgAtual;
        }
    }
}

function destruirEnergy() {
    destruirCinco();
    destruirQuatro();
    destruirTres();
    document.getElementById("pontuacao").innerText = pontuacao;
    document.getElementById("joias").innerText = joias;
}

function destruirTres() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r][c + 1];
            let energy3 = tabela[r][c + 2];
            if (energy1.src == energy2.src && energy2.src == energy3.src && !energy1.src.includes("blank")) {
                energy1.src = "../IMAGES/blank.png";
                energy2.src = "../IMAGES/blank.png";
                energy3.src = "../IMAGES/blank.png";
                pontuacao += 1;
                joias += 3;
            }
        }
    }
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r + 1][c];
            let energy3 = tabela[r + 2][c];
            if (energy1.src == energy2.src && energy2.src == energy3.src && !energy1.src.includes("blank")) {
                energy1.src = "../IMAGES/blank.png";
                energy2.src = "../IMAGES/blank.png";
                energy3.src = "../IMAGES/blank.png";
                pontuacao += 1;
                joias += 3;
            }
        }
    }
}

function destruirQuatro() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r][c + 1];
            let energy3 = tabela[r][c + 2];
            let energy4 = tabela[r][c + 3];
            if (energy1.src == energy2.src && energy2.src == energy3.src && energy3.src == energy4.src && !energy1.src.includes("blank")) {
                energy1.src = "../IMAGES/blank.png";
                energy2.src = "../IMAGES/blank.png";
                energy3.src = "../IMAGES/blank.png";
                energy4.src = "../IMAGES/blank.png";
                pontuacao += 2;
                joias += 4;
            }
        }
    }
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r + 1][c];
            let energy3 = tabela[r + 2][c];
            let energy4 = tabela[r + 3][c];
            if (energy1.src == energy2.src && energy2.src == energy3.src && energy3.src == energy4.src && !energy1.src.includes("blank")) {
                energy1.src = "../IMAGES/blank.png";
                energy2.src = "../IMAGES/blank.png";
                energy3.src = "../IMAGES/blank.png";
                energy4.src = "../IMAGES/blank.png";
                pontuacao += 2;
                joias += 4;
            }
        }
    }
}

function destruirCinco() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 4; c++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r][c + 1];
            let energy3 = tabela[r][c + 2];
            let energy4 = tabela[r][c + 3];
            let energy5 = tabela[r][c + 4];
            if (energy1.src == energy2.src && energy2.src == energy3.src && energy3.src == energy4.src && energy4.src == energy5.src && !energy1.src.includes("blank")) {
                energy1.src = "../IMAGES/blank.png";
                energy2.src = "../IMAGES/blank.png";
                energy3.src = "../IMAGES/blank.png";
                energy4.src = "../IMAGES/blank.png";
                energy5.src = "../IMAGES/blank.png";
                pontuacao += 3;
                joias += 5;
            }
        }
    }
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 4; r++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r + 1][c];
            let energy3 = tabela[r + 2][c];
            let energy4 = tabela[r + 3][c];
            let energy5 = tabela[r + 4][c];
            if (energy1.src == energy2.src && energy2.src == energy3.src && energy3.src == energy4.src && energy4.src == energy5.src && !energy1.src.includes("blank")) {
                energy1.src = "../IMAGES/blank.png";
                energy2.src = "../IMAGES/blank.png";
                energy3.src = "../IMAGES/blank.png";
                energy4.src = "../IMAGES/blank.png";
                energy5.src = "../IMAGES/blank.png";
                pontuacao += 3;
                joias += 5;
            }
        }
    }
}

function verificaValido() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r][c + 1];
            let energy3 = tabela[r][c + 2];
            if (energy1.src == energy2.src && energy2.src == energy3.src && !energy1.src.includes("blank")) {
                return true;
            }
        }
    }
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {
            let energy1 = tabela[r][c];
            let energy2 = tabela[r + 1][c];
            let energy3 = tabela[r + 2][c];
            if (energy1.src == energy2.src && energy2.src == energy3.src && !energy1.src.includes("blank")) {
                return true;
            }
        }
    }
    return false;
}


function mexerEnergy() {
    for (let c = 0; c < columns; c++) {
        let ind = rows - 1;
        for (let r = columns - 1; r >= 0; r--) {
            if (!tabela[r][c].src.includes("blank")) {
                tabela[ind][c].src = tabela[r][c].src;
                ind -= 1;
            }
        }

        for (let r = ind; r >= 0; r--) {
            tabela[r][c].src = "../IMAGES/blank.png";
        }
    }
}

function criarEnergy() {
    for (let c = 0; c < columns; c++) {
        if (tabela[0][c].src.includes("blank")) {
            tabela[0][c].src = "../IMAGES/Tipos/" + energiaAleatoria() + ".png";
        }
    }
}

function acabarJogo() {

    tempoAnterior = logged.tempoTotal;
    novoTempo = tempoAnterior + totalSeconds;
    logged.tempoTotal = novoTempo;


    if (logged.highScore < pontuacao || logged.highScore === undefined) {
        logged.highScore = pontuacao;
    };
    localStorage.setItem('login', JSON.stringify(logged));
    save(logged.email);
}


function save(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            users[i] = logged;
            localStorage.setItem('utilizadores', JSON.stringify(users));
            return true;
        }
    }

    return false;
}

function desistir() {
    acabarJogo();
    window.location.assign("singleplayer.html");
}

window.addEventListener("load", principal);
//
//
//