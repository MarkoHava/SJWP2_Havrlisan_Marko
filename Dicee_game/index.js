
function randomNumber(){
    return Math.floor(Math.random()*6)+1;
}

let rndN1 = randomNumber()
let rndImageSource1 = "./images/dice"+rndN1+".png";
let rndN2 = randomNumber();
let rndImageSource2 = "./images/dice"+rndN2+".png";
let rndN3 = randomNumber();
let rndImageSource3 = "./images/dice"+rndN3+".png";
let rndN4 = randomNumber();
let rndImageSource4 = "./images/dice"+rndN4+".png";
document.querySelector(".img1").setAttribute("src", rndImageSource1);
document.querySelector(".img2").setAttribute("src", rndImageSource2);
document.querySelector(".img3").setAttribute("src", rndImageSource3);
document.querySelector(".img4").setAttribute("src", rndImageSource4);

document.querySelector(".prvi").innerHTML = rndN1 + rndN3;
document.querySelector(".drugi").innerHTML = rndN2 + rndN4;

if(rndN1+rndN3>rndN2+rndN4){
document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(rndN1+rndN3<rndN2+rndN4){
document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
document.querySelector("h1").innerHTML = "Draw";
}