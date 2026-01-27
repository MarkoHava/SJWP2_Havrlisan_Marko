let a = document.querySelector("button");
let b = document.querySelector("#unos").value
a.addEventListener("click", function(){
    document.querySelector("#btc").innerHTML = (Number(b)*0.000014).toString(); 
    document.querySelector("#dlr").innerHTML = (Number(b)*1.19).toString(); 
})