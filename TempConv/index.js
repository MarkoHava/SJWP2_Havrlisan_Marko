document.querySelector("input").oninput = function(){
    let cel = document.querySelector("#cel").value
    document.querySelector("#kel").value = (Math.round(cel*1.8)).toString();
    document.querySelector("#fah").value = (Number(cel)+273).toString();
};