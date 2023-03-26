const min: number = 0;
const max: number = 100;
let score: number = 0;
let message: string = "";
let flag: number = 1;
let count: number = 3;
let x: number;
let random: number;
let luotchoi: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
luotchoi.innerHTML = String(count);
let btnGuess: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-guess');
let btnReset: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-reset');
let ketqua: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
let number: HTMLInputElement = <HTMLInputElement>document.getElementById("number");


function reset() : void {
    count = 3;
    score = 0;
    flag = 1;
    message = "";
    ketqua.innerHTML = message;
    luotchoi.innerHTML = String(count);
    btnGuess.style.display = 'block';
    btnReset.style.display = 'none';
    let start: number = Math.floor(Math.random() * (max - min + 1) ) + min;
    let end: number = Math.floor(Math.random() * (max - start + 1) ) + start;
    let batdau: HTMLSpanElement = <HTMLSpanElement>document.getElementById("start");
    batdau.innerHTML = String(start);
    let ketthuc: HTMLSpanElement = <HTMLSpanElement>document.getElementById("end");
    ketthuc.innerHTML = String(end);
    randomnumber();
} 

reset();

function randomnumber() : void {
    let c: HTMLSpanElement = <HTMLSpanElement>document.getElementById("start");
    let START: number = Number(c.textContent)
    let e: HTMLSpanElement = <HTMLSpanElement>document.getElementById("end");
    let END: number = Number(e.textContent)
    x = Math.floor(Math.random() * (END - START + 1) ) + START;
    console.log(x)
}

function check() : void {
    let random: number = Number(number.value) ;
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
            message = "So ban nho qua"
        else 
            message = "So ban lon qua"
    }
    count--;
    luotchoi.innerHTML = String(count);
    if (score > 0) {
        message = "Ban da thang " + score + " diem."
        flag = 0;
    }
    else if (count === 0 && random !== x) {
        message = "Game over"
        flag = 0
    }
    ketqua.innerHTML = message;
    if (flag === 0) { 
        btnGuess.style.display = 'none'; 
        btnReset.style.display = 'block';
    }
    
}
