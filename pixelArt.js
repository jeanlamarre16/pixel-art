
const bouton = document.getElementById('generer-grille');
const palette = document.getElementById("palette");
let divTableau = document.querySelector('#div-tableau');
const table = document.createElement('table');

let  inputLignes = document.querySelector('.nbLignes');
let  inputColonnes = document.querySelector('.nbColonnes');

bouton.addEventListener('click', function () {
	let genererdivTableau = "Générer";
	if(bouton.textContent === genererdivTableau) {
		createTable();
		bouton.textContent = 'Reset';
		inputLignes.setAttribute('disabled', '');
		inputColonnes.setAttribute('disabled', '');
		palette.style.visibility="visible";
	} else  {
		resetTable();
		bouton.textContent=genererdivTableau;
		inputLignes.removeAttribute("disabled", "");
		inputColonnes.removeAttribute("disabled", "");
		palette.style.visibility="hidden";
	}	
})

function createTable() {
	if (inputLignes.value < 2 || inputLignes.value > 20 || inputLignes === " " ) {
		inputColonnes.value = " ";
		inputColonnes.focus();
	} else if (inputColonnes.value < 2 || inputColonnes.value > 20  || inputColonnes === " ") {
		inputColonnes.value = " ";
		inputColonnes.focus();
	} else {
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
}

function resetTable() {
	inputColonnes.value = "";
	inputLignes.value= "";
	divTableau.removeChild(table);
}

let brushColor = "";

function pickColor(color) {
	brushColor = color; 
}

function setColor(cellule) {
	cellule.style.background = brushColor;
}