const SrcSerije = ['arcane', 'bb', 'bettercallsoul','blackmirror','brooklynninenine','dark','friends','got',
    'howimetyourmother','mando','mindhunter','mrrobot','peakyblinders','strangerthings','thelastofus','theoffice',
    'thesopranos','thewire','truedetective','vikings']
const TtlSerije = ['Arcane', 'Breaking Bad', 'Better Call Soul', 'Black Mirror', 'Brooklyn Nine Nine', 'Dark', 'Friends', 'Game of Thrones',
    'How I Met Your Mother', 'The Mandalorian', 'Mindhunter', 'Mr Robot', 'Peaky Blinders', 'Stranger Things', 'The Last of Us',
    'The Office', 'The Sopranos', 'The Wire', 'True Detective', 'Vikings'
]
const DscSerije = ['A stolen magic artifact ignites war.', 'A high school chemistry teacher becomes meth kingpin.', 'A lawyer gets caught in cartel corruption.', 'Standalone sci-fi drama and tech horrors.', 'NINE detectives in a Brooklyn precinct.', 'Family secrets and a mysterious cave.', 'Six friends hanging out in NYC.', 'Political fantasy with dragons and betrayal.',
    'Romantic comedy told in flashback.', 'Space western with Baby Yoda.', 'FBI profiler chases killers.', 'Hacker thriller in a dystopian world.', '1900s English gangland saga.', 'Kids fight monsters in the 80s.', 'Post-apocalyptic survival drama.',
    'Workplace comedy at a paper company.', 'New Jersey mob family epic.', 'Baltimore crime drama.', 'Rust Belt anthology crime.', 'Viking age battles and honor.']

const SrcFilmovi = ['revengeofthesith', 'blackadam', 'godfather',
    'hobbit-thedesolationofsmaug', 'hp-thephilosophersstone',
    'lordoftherings-thefellowshipofthering', 'lordoftherings-thereturnoftheking',
    'swnh', 'swsmece1', 'swsmece2', 'thedarkknight', 'hp-dhpt1', 'hp-dhpt2', 'hp-prisoner',
    'jaws', 'svadba', 'knifesout', 'avatar', 'avatarfireandash', 'swempirestrikesback'
]
const TtlFilmovi = ['Star Wars: Revenge of the Sith', 'Black Adam', 'Godfather', 'Hobbit: The Desolaton of Smaug',
    'Harry Potter and the Philosophers Stone', 'Lord of the Rings: The Fellowship of the Ring',
    'Lord of the Rings: The Return of the King', 'Star Wars: a New Hope', 'Star Wars: The Force Awakens',
    'Star Wars: The Last Jedi', 'The Dark Knight', "Harry Potter and the Deathly Hallows Part 1", "Harry Potter and the Deathly Hallows Part 2",
    'Harry Potter and the Prisoner of Azkaban', 'Jaws', 'Svadba', 'Knifes Out', 'Avatar', 'Avatar: Fire and Ashes', 'Star Wars: The Empire Strikes Back'
]
const DscFilmovi = ['Anakin Skywalker turns to the dark side.', 'Superhero fights ancient evil.', 'Crime family power struggle.',
    'A quest to reclaim a lost home.', 'Boy discovers he is a wizard.', 'Fellowship forms to destroy a ring.',
    'War for the fate of Middle-earth.', 'Rebel alliance vs Empire.', 'First battle with the Death Star.',
    'Skywalker uprising after tragedy.', 'Batman faces the Joker.', 'Dark secrets destroy Hogwarts.', 'Good vs Boy Wizard again.', 'Prison break and magic duel.',
    'Great white shark terrorizes a town.', 'A wedding day mystery.', 'Mystery murder dinner.', 'Aliens crash-land in desert.', 'Navy risk in a volcanic world.', 'Empire clashes with Rebels.']

const SrcDokumentarci = ['blackfish', 'blueplanet', 'citizenfour', 'dontfuckwithcats', 'freesolo', 'insidejob', 'makingamurderer', 'manonwire',
     'myoctopusteacher', 'nightstalker', 'ourplanet', 'planetearth', 'searchingforshugarman', 'senna', 'thegreathack', 'thejinx', 'thelastdance', 'thesocialdilemma',
      'tigerking', 'wontyoubemyneighbor']
const TtlDokumentarci = ['Blackfish', 'Blue Planet', 'Citizenfour', "Don't Fuck With Cats", 'Free Solo', 'Inside job', 'Making a Murderer', 'Man on Wire',
    'My Octopus Teacher', 'Nightstalker', 'Our planet', 'Planet Earth', 'Searching for Sugar Man', 'Senna', 'The Great Hack', 'The Jinx', 'The Last Dance', 'The Social Dilemma',
    'Tiger King', 'Wont You Be My Neighbor?'
]
const DscDokumentarci = ['Orcas in captivity and animal rights.', 'Oceanic life and ecosystems.', 'NSA surveillance leaks story.', 'True crime internet investigation.', 'Free climbing without ropes.', 'Finance crisis exposed.', 'Murder investigation injustice.', 'Tightrope walk over NYC.',
    'Nature and human connection.', 'Serial killer case study.', 'Earth documentary series.', 'Cinematic global nature stories.', 'Music history and lost songs.', 'A racing driver’s life.', 'Data privacy and manipulation.', 'Murder story in a condominium.', 'Michael Jordan’s final seasons.', 'Technology’s social impact.',
    'Outlaw zoo drama.', 'Fred Rogers life and message.']

const images = document.getElementsByTagName("img");
const ttls = document.getElementsByClassName("eltitle");
const cards = document.getElementsByClassName("element");

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');

function openModal(title, description){
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
});

function assignCardListeners(descArray){
    for (let i = 0; i < cards.length; i++){
        const title = ttls[i].textContent;
        const description = descArray[i] || 'No description available.';
        cards[i].onclick = () => openModal(title, description);
    }
}

function Serije(){
    for (let i = 0; i<images.length; i++){
        images[i].src =  './Serije/' +  SrcSerije[i]  + '.jpg';
        ttls[i].innerHTML = TtlSerije[i];
    }
    assignCardListeners(DscSerije);
    console.log("uspjeh");
}
function Filmovi(){
    for (let i = 0; i<images.length; i++){
        images[i].src =  './Filmovi/' +  SrcFilmovi[i] + '.jpg';
        ttls[i].innerHTML =TtlFilmovi[i];
    }
    assignCardListeners(DscFilmovi);
    console.log("uspjeh");
}
function Dokumentarci(){
    for (let i = 0; i<images.length; i++){
        images[i].src = './Dokumentarci/' +  SrcDokumentarci[i]  + '.jpg';
        ttls[i].innerHTML = TtlDokumentarci[i];
    }
    assignCardListeners(DscDokumentarci);
    console.log("uspjeh");
}

window.onload = function(){
    Filmovi();
};

