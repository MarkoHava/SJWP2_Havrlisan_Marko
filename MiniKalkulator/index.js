

var result = document.getElementsByTagName("textarea")[0]

function Add(){
    let a = document.getElementsByTagName("input")[0].value
    let b = document.getElementsByTagName("input")[1].value
    result.innerHTML = Number(a)+Number(b)
}
function Sub(){
    var a = document.getElementsByTagName("input")[0].value
    var b = document.getElementsByTagName("input")[1].value
    result.innerHTML = a-b
}
function Mul(){
    var a = document.getElementsByTagName("input")[0].value
    var b = document.getElementsByTagName("input")[1].value
    result.innerHTML = a*b
}
function Divide(){
    var a = document.getElementsByTagName("input")[0].value
    var b = document.getElementsByTagName("input")[1].value
    result.innerHTML = a/b
}
function Ce(){
    result.innerHTML = ""
}