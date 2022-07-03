const images = [ 
	'images/land.png', //Standaard landschap image
	'images/rain1.png', //regen image
	'images/rain2.png', //meer regen/onweer image
	];
//regenMeter selector
 let regenMeter = document.getElementById("regenmeter");

 
let regenButton = document.querySelector("ul li:nth-of-type(1) a");
let sneeuwButton = document.querySelector("ul li:nth-of-type(2) a");
let changeImg = document.querySelector ("img");
let regenAmount = 0;
let menuButton = document.querySelector("button");
//geluiden
const rainSound = new Audio('audio/rain.mp3');
const thunderSound = new Audio('audio/thunder.mp3')


let menu = document.querySelector('ul');
const openMenu = () => {
	menu.classList.add('showMenu');
	menuButton.style["display"] = "none";
}
menuButton.addEventListener("click", openMenu);

document.addEventListener("keydown", function(e) {
	if (e.key === "ArrowUp" || e.key === "ArrowRight") {
		regen(e);
	}
});


//functie laatSneeuwen, hiermee maak je eerst een variabele aan die de juiste div van de sneeuw pakt
//vervolgens een forEach loop die aan elk element de class 'snowflake toevoegd' (classlist.add werkt
//maar op 1 element tegelijk, daarom de loop)
let sneeuw = document.querySelectorAll ('.snowflakes li');
const laatSneeuwen = () => {
let snowflake1 = document.querySelector('.snowflake');
sneeuw.forEach(function (elem) {
	elem.classList.toggle('snowflake');
	elem.classList.toggle('blokdisplay');
});
}

 const addRegenClass = document.querySelector("section img");
// const laathetRegenen = () => {
// 	addRegenClass.classList.toggle('regen');
// 	changeImg.classList.toggle('grayscale');
// }
// Voeg een 'regenmeter toe', en met de regenknop voeg je daar 1 aan toe,
// verander de img naar rain1 als de regenMeter onder de 5 blijft 
// als hij boven de 5 komt, voeg je regen2 toe.
let regenBar = document.querySelector(".bar"); 
 const regenCheck = () => {
	//regenMeter check
	if (regenAmount == 0) {
		 changeImg.src = images[0];
		 regenBar.classList.add('progress0');
		 regenBar.classList.remove('progress1');
		rainSound.pause();
		//land.png
	} else if (regenAmount == 1){
		changeImg.src = images[1];
		regenBar.classList.remove('progress2');
		regenBar.classList.add('progress1');
		rainSound.play();
	} else if (regenAmount == 2 ){
		changeImg.src = images[1];
		regenBar.classList.remove('progress3');
		regenBar.classList.add('progress2');
	} else if (regenAmount == 3){
		changeImg.src = images[1];
		regenBar.classList.remove('progress4');
		regenBar.classList.add('progress3');
	} else if (regenAmount == 4){
		changeImg.src = images[1];
		changeImg.classList.remove('grayscale');
		regenBar.classList.remove('progress5');
		regenBar.classList.add('progress4');
	} else if (regenAmount == 5 || regenAmount >= 5) {
		thunderSound.play();
		changeImg.classList.add('grayscale');
		changeImg.src = images[2];
		regenBar.classList.add('progress5');
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

