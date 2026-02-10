function sat(){
var datum = new Date();
document.getElementById("sat").innerHTML = 
datum.getHours() + " : " + datum.getMinutes() + " : " + datum.getSeconds();}
setInterval(sat, 1000);