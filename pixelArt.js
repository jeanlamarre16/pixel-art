
const bouton = document.getElementById('generer-grille');
const palette = document.getElementById("palette");
let grille = document.querySelector('#grille-tableau');

let  inputLignes = document.querySelector('.nbLignes');
let  inputColonnes = document.querySelector('.nbColonnes');



bouton.addEventListener('click', function () {
	let genererGrille = "Générer";
	if(bouton.textContent === genererGrille) {
		bouton.textContent = 'Reset';
		createTable();
		console.log('create');
		bouton.textContent = 'Reset';
		inputLignes.setAttribute('disabled', '');
		inputColonnes.removeAttribute('disabled', '');
		palette.style.visibility="visible";
	} else  {
		console.log('reset');
		resetTable();
		
		bouton.textContent=genererGrille;
		inputLignes.setAttribute("disabled", "false");
		inputColonnes.setAttribute("disabled", "false");
		palette.style.visibility="hidden";
	}	
})

function createTable() {
	if (inputLignes.value < 2 || inputLignes.value > 20 || inputLignes === " " ) {
		nbLignes.value = " ";
		nbLignes.focus();
	} else if (inputColonnes.value < 2 || inputColonnes.value > 20  || inputColonnes === " ") {
		inputColonnes.value = " ";
		inputColonnes.focus();
	} else {
		for (let i = 0; i < inputLignes.value; i++) {
			let rows = document.createElement("tr");
			grille.appendChild(rows);
		
			for (let j = 0; j < inputColonnes.value; j++) {
				let columns = document.createElement("td");
				columns.setAttribute('onclick', 'setColor(this)');
				rows.appendChild(columns);
			}
		}
	}
}

function resetTable() {
	let elt = document.querySelectorAll("tr");
	elt.forEach(element => {
		grille.removeChild(element);
	});
}

let brushColor = "";

function pickColor(color) {
	brushColor = color; 
}

function setColor(cellule) {
	cellule.style.background = brushColor;
}