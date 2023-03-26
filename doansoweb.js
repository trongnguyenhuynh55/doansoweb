var min = 0;
var max = 100;
var score = 0;
var message = "";
var flag = 1;
var count = 3;
var x;
var random;
var luotchoi = document.getElementById("count");
luotchoi.innerHTML = String(count);
var btnGuess = document.getElementById('btn-guess');
var btnReset = document.getElementById('btn-reset');
var ketqua = document.getElementById("result");
var number = document.getElementById("number");
function reset() {
    count = 3;
    score = 0;
    flag = 1;
    message = "";
    ketqua.innerHTML = message;
    luotchoi.innerHTML = String(count);
    btnGuess.style.display = 'block';
    btnReset.style.display = 'none';
    var start = Math.floor(Math.random() * (max - min + 1)) + min;
    var end = Math.floor(Math.random() * (max - start + 1)) + start;
    var batdau = document.getElementById("start");
    batdau.innerHTML = String(start);
    var ketthuc = document.getElementById("end");
    ketthuc.innerHTML = String(end);
    randomnumber();
}
reset();
function randomnumber() {
    var c = document.getElementById("start");
    var START = Number(c.textContent);
    var e = document.getElementById("end");
    var END = Number(e.textContent);
    x = Math.floor(Math.random() * (END - START + 1)) + START;
    console.log(x);
}
function check() {
    var random = Number(number.value);
    if (random === x) {
        if (count === 3)
            score = 100;
        else if (count === 2)
            score = 70;
        else
            score = 50;
    }
    else {
        if (random < x)
            message = "So ban nho qua";
        else
            message = "So ban lon qua";
    }
    count--;
    luotchoi.innerHTML = String(count);
    if (score > 0) {
        message = "Ban da thang " + score + " diem.";
        flag = 0;
    }
    else if (count === 0 && random !== x) {
        message = "Game over";
        flag = 0;
    }
    ketqua.innerHTML = message;
    if (flag === 0) {
        btnGuess.style.display = 'none';
        btnReset.style.display = 'block';
    }
}
