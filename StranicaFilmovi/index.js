function Serije(){
    var images = document.getElementsByTagName("img");
    images.forEach(element => {
        element.src = null;
    });
    console.log("uspjeh");
}