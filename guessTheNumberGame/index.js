function randomNumber(){
    return Math.floor(Math.random()*100)+1;
}

let input = document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts = document.getElementById("attempts")

let rnd = randomNumber();
let pokusaji = 0;

function updateAttempts(){
attempts.innerHTML = "Pokušaji: " + pokusaji;
}
updateAttempts();
function CheckNumber(event){
event.preventDefault();
let value = parseInt(input.value);
console.log(value);
}
function NewGame(){

}