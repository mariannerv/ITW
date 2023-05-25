// GRUPO 18

//TURMA DA PL26
//
//YANA KOTSYUBYNSKA 58637
//MARIANA VALENTE 55945
//DIOGO GUTIERRES 49297
//
//

let users = JSON.parse(localStorage.getItem('utilizadores'));


function Record(placement, name, score) {
    this.placement = placement;
    this.name = name;
    this.score = score;
};

function compareByHighScore(a, b) {
    return b.highScore - a.highScore;
}

users.sort(compareByHighScore)

let RECORDS = [
    new Record('1st', users[0] ?.nome || 'None', users[0] ?.highScore || 0),
    new Record('2nd', users[1] ?.nome || 'None', users[1] ?.highScore || 0),
    new Record('3rd', users[2] ?.nome || 'None', users[2] ?.highScore || 0),
    new Record('4th', users[3] ?.nome || 'None', users[3] ?.highScore || 0),
    new Record('5th', users[4] ?.nome || 'None', users[4] ?.highScore || 0),
    new Record('6th', users[5] ?.nome || 'None', users[5] ?.highScore || 0),
    new Record('7th', users[6] ?.nome || 'None', users[6] ?.highScore || 0),
    new Record('8th', users[7] ?.nome || 'None', users[7] ?.highScore || 0),
    new Record('9th', users[8] ?.nome || 'None', users[8] ?.highScore || 0),
    new Record('10th', users[9] ?.nome || 'None', users[9] ?.highScore || 0)
];



function createTable() {

    console.log(users)
    count = 0;
    let trRecord = null;

    for (let i = 0; i < RECORDS.length; i++) {

        trRecord = document.createElement('tr');
        trRecord.innerHTML = '<td>' + RECORDS[i].placement + '</td>';
        trRecord.innerHTML += '<td>' + RECORDS[i].name + '</td>';
        trRecord.innerHTML += '<td>' + RECORDS[i].score + '</td>';
        document.getElementById('highScores').appendChild(trRecord);
    }
}

window.addEventListener("load", createTable);