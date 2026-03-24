const SrcSerije = {}
const SrcFilmovi = ['revengeofthesith', 'blackadam', 'godfather',
    'hobbit-thedesolationofsmaug', 'hp-thephilosophersstone',
    'lordoftherings-thefellowshipofthering', 'lordoftherings-thereturnoftheking',
    'swnh', 'swsmece1', 'swsmece2', 'thedarkknight', 'hp-dhpt1', 'hp-dhpt2', 'hp-prisoner',
    'jaws', 'svadba'
]
const TtlFilmovi = ['Star Wars: Revenge of the Sith', 'Black Adam', 'Godfather', 'Hobbit: The Desolaton of Smaug',
    'Harry Potter and the Philosophers Stone', 'Lord of the Rings: The Fellowship of the Ring',
    'Lord of the Rings: The Return of the King', 'Star Wars: a New Hope', 'Star Wars: The Force Awakens',
    'Star Wars: The Last Jedi', 'The Dark Knight'
]
const SrcDokumentarci = {}



function Serije(){
    var images = document.getElementsByTagName("img");
    for (let i = 0; i<images.length; i++){
        images[i].src =  './Serije/' +  SrcSerije[i];
    }
    console.log("uspjeh");
}
function Filmovi(){
    var images = document.getElementsByTagName("img");
    var ttls = document.getElementsByClassName("eltitle");
    for (let i = 0; i<images.length; i++){
        images[i].src =  './Filmovi/' +  SrcFilmovi[i] + '.jpg';
        ttls[i].innerHTML =TtlFilmovi[i];
    }
    console.log("uspjeh");
}
function Dokumentarci(){
    var images = document.getElementsByTagName("img");
    for (let i = 0; i<images.length; i++){
        images[i].src = './Dokumentarci/' +  SrcDokumentarci[i];
    }
    console.log("uspjeh");
}