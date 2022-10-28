
const bouton = document.querySelector('.btn-generator');
const palette = document.querySelector("#div-palette");
let divTableau = document.querySelector('#div-tableau');
let  linesInput = document.querySelector('.nbLignes');
let  columnsInput = document.querySelector('.nbColonnes');

bouton.addEventListener('click', function () {
	if(controlerSaisie()) {
		if(bouton.classList == 'btn-generator') {
			createTable();
			bouton.classList.toggle('btn-generator');
			bouton.textContent = 'Réinitialiser';
			linesInput.setAttribute('disabled', '');
			columnsInput.setAttribute('disabled', '');
			palette.style.visibility="visible";
		} else {
			resetTable();
			bouton.classList.toggle('btn-generator');
			bouton.textContent="Générer le tableau";
			linesInput.removeAttribute("disabled", "");
			columnsInput.removeAttribute("disabled", "");
			palette.style.visibility="hidden";
			linesInput.value = " ";
			columnsInput.value = " "
		}
	} else  {
		controlerSaisie();
	}
})

function controlerSaisie() {
	if (linesInput.value < 2 || linesInput.value > 60 || linesInput === " " ) {
		inputLignes.value = " ";
		linesInput.focus();
		return false;
	} else if (columnsInput.value < 2 || columnsInput.value > 60  || columnsInput === " ") {
		columnsInput.value = " ";
		inputColonnes.focus();
		return false;
	}
	return true;
}

function createTable() {
	const table = document.createElement('table');	
	for (let i = 0; i < linesInput.value; i++) {
		let rows = document.createElement("tr");
		table.appendChild(rows);
	
		for (let j = 0; j < columnsInput.value; j++) {
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