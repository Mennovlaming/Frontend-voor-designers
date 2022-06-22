const images = [ 
	'images/land.png', //Standaard landschap image
	'images/rain1.png', //regen image
	'images/rain2.png', //meer regen/onweer image
	];
//regenMeter selector
// let regenMeter = document.querySelector("p:first-of-type");
let regenButton = document.querySelector("ul li:nth-of-type(1) a");
let sneeuwButton = document.querySelector("ul li:nth-of-type(2) a");
let changeImg = document.querySelector ("img");
let regenAmount = 0;
//geluiden
const rainSound = new Audio('audio/rain.mp3');
const thunderSound = new Audio('audio/thunder.mp3')

//'keydown' is een toetsEvent, arrowUp de functie die word aangeroepen
const menu = document.querySelector('ul');
document.addEventListener('keydown', arrowUp);
//met een toetsevent voeg je 
function arrowUp(e) {
  menu.classList.add('showMenu');
}

//functie laatSneeuwen, hiermee maak je eerst een variabele aan die de juiste div van de sneeuw pakt
//vervolgens een forEach loop die aan elk element de class 'snowflake toevoegd' (classlist.add werkt
//maar op 1 element tegelijk, daarom de loop)
const laatSneeuwen = () => {

let sneeuw = document.querySelectorAll ('.snowflakes div');
sneeuw.forEach(function (elem) {
	elem.classList.toggle('snowflake');
});
}

// Voeg een 'regenmeter toe', en met de regenknop voeg je daar 1 aan toe,
// verander de img naar rain1 als de regenMeter onder de 5 blijft 
// als hij boven de 5 komt, voeg je regen2 toe.
 const regenCheck = () => {
	//regenMeter check
	// regenMeter.textContent = regenAmount;
	if (regenAmount <= 0) {
		changeImg.src = images[0];
		rainSound.pause();
		//land.png
	} else 
	if (regenAmount <= 5) {
		rainSound.play();
		changeImg.src = images[1];
		changeImg.style["filter"] = "grayscale(40%)";
		//rain1.png
	} else if (regenAmount => 5) {
		thunderSound.play();
		changeImg.src = images[2];
		changeImg.style["filter"] = "grayscale(60%)" ;
		//rain2.png
	}
}

// setInterval, roept elke 2000 miliseconde de functie droog aan,
// De functie droog haalt 1 van de regenAmount af. 
const droog = () => {
	if (regenAmount >= 1) {
		regenAmount = regenAmount -1;
	}
}

setInterval(droog, 2000);
//roep elke 100 miliseconde de functie regencheck aan, zodat het juiste aantal word getoond. 
setInterval(regenCheck, 100);

const regen = () => {
	regenAmount ++
}

regenButton.addEventListener("click", regen);
sneeuwButton.addEventListener("click", laatSneeuwen);
