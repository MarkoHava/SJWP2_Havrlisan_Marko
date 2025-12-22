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
function SerijskoSpajanjeOtpornika(){
    let ssor1 = document.getElementById("ssor1").value;
    let ssor2 = document.getElementById("ssor2").value;
    let ta = document.getElementById("taSerijskoSpajanje");
    let formula = Number(ssor1) + Number(ssor2);
    ta.innerHTML = "Ruk = " + formula + "Ω";
}
function ParalelnoSpajanjeOtpornika(){
    let psor1 = document.getElementById("psor1").value;
    let psor2 = document.getElementById("psor2").value;
    let ta = document.getElementById("taParalelnoSpajanje");
    let formula = (Number(psor1) * Number(psor2)) / (Number(psor1) + Number(psor2));
    ta.innerHTML = "Ruk = " + formula + "Ω";
}
function InduktivitetSvitka(){
    let n = document.getElementById("N").value;
    let s = document.getElementById("s").value;
    let l = document.getElementById("l").value;
    let ta = document.getElementById("taInduktivitet");
    let formula = 4 * Math.pow(10, -7) * Math.PI * (Math.pow(Number(n), 2) * Number(s)/ Number(l));
    ta.innerHTML = "L = " + formula + "H";
}
function InduktivniOtpor(){
    let w = document.getElementById("w").value;
    let l = document.getElementById("L").value;
    let ta = document.getElementById("taInduktivniOtpor");
    let formula = Number(w) * Number(l);
    ta.innerHTML = "Xl = " + formula + "Ω";
}