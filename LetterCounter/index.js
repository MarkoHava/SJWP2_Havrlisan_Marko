let a = document.querySelector("textarea");
a.addEventListener("keyup", function(){
    document.querySelector("p").innerHTML = 
    "Letter count: " + a.value.length;
})