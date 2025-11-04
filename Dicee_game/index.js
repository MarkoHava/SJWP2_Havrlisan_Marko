let rndN1 = Math.floor(Math.random()*6)+1;
let rndImageSource1 = "./images/dice"+rndN1+".png";
let rndN2 = Math.floor(Math.random()*6)+1;
let rndImageSource2 = "./images/dice"+rndN2+".png";
document.querySelector(".img1").setAttribute("src", rndImageSource1);
document.querySelector(".img2").setAttribute("src", rndImageSource2);

if(rndN1>rndN2){
document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(rndN1<rndN2){
document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
document.querySelector("h1").innerHTML = "Draw";
}