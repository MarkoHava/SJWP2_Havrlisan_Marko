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
    //console.log(value);

    if(isNaN(value) || value<1 || value>100){
        msg.innerHTML  = "unesi broj izmedu 1 i 100";
        msg.style.color = "crimson";
        return;
    }

    if(value=== rnd){
        msg.innerHTML = "pogodak. Broj je " + rnd;
        msg.style.color="green";
    }else if(value<rnd){
        msg.innerHTML = "Pre malo"
        msg.style.color="orange";
    }else{
        msg.innerHTML = "previse";
        msg.style.color="orange";
    }
    pokusaji++;
    updateAttempts();
}
function NewGame(){
    rnd = randomNumber();
    pokusaji=0;
    updateAttempts();
    msg.innerHTML="Nova igra - pokušaj ponovo";
    msg.style.color="black";
    input.focus();
}