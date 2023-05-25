// GRUPO 18

//TURMA DA PL26
//
//YANA KOTSYUBYNSKA 58637
//MARIANA VALENTE 55945
//DIOGO GUTIERRES 49297
//
//

var timerVariable = setInterval(countUpTimer, 1000);
var totalSeconds = 0;

function countUpTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (seconds < 10)
        seconds = "0" + seconds;
    document.getElementById("count_up_timer").innerHTML = minute + ":" + seconds;
}


// MUSICA


    var mysong = document.getElementById("mysong");
    var playbtn = document.getElementById("playbtn");
    var pausebtn = document.getElementById("pausebtn");


    function playSong() {
        mysong.play();

        pausebtn.style.display = "block";
        playbtn.style.display = "none";
    }


    function pauseSong() {
        mysong.pause();

        playbtn.style.display = "block";
        pausebtn.style.display = "none";
    }