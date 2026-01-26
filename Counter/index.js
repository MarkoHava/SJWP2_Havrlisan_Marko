let broj = 0;
document.querySelector(".add").addEventListener("click", function(){
    broj++;
    document.querySelector(".counter").innerHTML = broj;
})
document.querySelector(".sub").addEventListener("click", function(){
    broj--;
    document.querySelector(".counter").innerHTML = broj;
})
