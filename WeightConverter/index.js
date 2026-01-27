let a = document.querySelector("button");
let b = document.querySelector("input").value
a.addEventListener("click", function(){
    console.log(Number(b)*2.204);
    document.querySelector(".pounds").innerHTML = Math.floor(Number(b)*2.204).toString(); 
    document.querySelector(".ounces").innerHTML = Math.floor(Number(b)*35.2739).toString(); 
    document.querySelector(".grams").innerHTML = Math.floor(Number(b)*1000).toString(); 
})