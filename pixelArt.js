<<<<<<< HEAD

const bouton = document.querySelector('.btn-generator');
const palette = document.querySelector("#div-palette");
let divTableau = document.querySelector('#div-tableau');
let  inputLignes = document.querySelector('.nbLignes');
let  inputColonnes = document.querySelector('.nbColonnes');

bouton.addEventListener('click', function () {	
	if(controlerSaisie()) {
		if(bouton.classList == 'btn-generator') {
			createTable();
			bouton.classList.toggle('btn-generator');
			bouton.textContent = 'Réinitialiser';
			inputLignes.setAttribute('disabled', '');
			inputColonnes.setAttribute('disabled', '');
			palette.style.visibility="visible";
		} else {
			resetTable();
			bouton.classList.toggle('btn-generator');
			bouton.textContent="Générer le tableau";
			inputLignes.removeAttribute("disabled", "");
			inputColonnes.removeAttribute("disabled", "");
			palette.style.visibility="hidden";
		}
	} else  {
		controlerSaisie();
	}
=======
const bouton = document.getElementById('generer-grille');
const palette = document.getElementById("palette");
let grille = document.querySelector('#grille-tableau');

let  inputLignes = document.querySelector('.nbLignes');
let  inputColonnes = document.querySelector('.nbColonnes');

bouton.addEventListener('click', function () {
	let genererGrille = "Générer";
	if(bouton.textContent === genererGrille) {
		createTable();
		bouton.textContent = 'Reset';
		inputLignes.setAttribute('disabled', '');
		inputColonnes.setAttribute('disabled', '');
		palette.style.visibility="visible";
	} else  {
		resetTable();
		bouton.textContent=genererGrille;
		inputLignes.removeAttribute("disabled");
		inputColonnes.removeAttribute("disabled");
		palette.style.visibility="hidden";
	}	
>>>>>>> da0652ec0b851499a0c0334ad475d88300b8af69
})

function controlerSaisie() {
	if (inputLignes.value < 2 || inputLignes.value > 30 || inputLignes === " " ) {
		inputLignes.value = " ";
		inputLignes.focus();
		return false;
	} else if (inputColonnes.value < 2 || inputColonnes.value > 60  || inputColonnes === " ") {
		inputColonnes.value = " ";
		inputColonnes.focus();
		return false;
	}
	return true;
}

function createTable() {
	const table = document.createElement('table');	
	for (let i = 0; i < inputLignes.value; i++) {
		let rows = document.createElement("tr");
		table.appendChild(rows);
	
		for (let j = 0; j < inputColonnes.value; j++) {
			let columns = document.createElement("td");
			columns.setAttribute('onclick', 'setColor(this)');
			rows.appendChild(columns);
		}
	}
	divTableau.appendChild(table);
}

function resetTable() {
	divTableau.removeChild(document.querySelector('div#div-tableau table'));
}

let brushColor = "";

function pickColor(color) {
	brushColor = color; 
}

function setColor(cellule) {
	cellule.style.background = brushColor;
}
