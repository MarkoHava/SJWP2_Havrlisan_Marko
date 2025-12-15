function OhmovZakon(){
    let otpor = document.getElementById("r").value;
    let napon = document.getElementById("v").value;
    let ta = document.getElementById("taOhmovZakon");

    ta.innerHTML = "I = " + Number(napon)/Number(otpor) + "A";
}

function DjeliloNapona(){
    let r1 = document.getElementById("r1").value;
    let r2 = document.getElementById("r2").value;
    let vul = document.getElementById("vul").value;
    let ta = document.getElementById("taDjelilo");

    let formula = Number(vul)* Number(r2)/(Number(r1)+Number(r2));
    ta.innerHTML = "Uiz = " + formula + "V";
}