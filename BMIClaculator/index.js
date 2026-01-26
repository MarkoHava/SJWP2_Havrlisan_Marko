let a = document.querySelector("button");

a.addEventListener("click", function(){
    let h = document.querySelectorAll("input")[0].value;
    let m = document.querySelectorAll("input")[1].value;
    document.querySelectorAll("h1")[1].innerHTML = 
    (Number(m)/(Number(h)*Number(h))).toString();
    console.log((Number(m)/(Number(h)*Number(h))).toString());
})