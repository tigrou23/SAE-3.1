let rub1 = document.getElementById("rub-1");
let rub2 = document.getElementById("rub-2");
let rub3 = document.getElementById("rub-3");
let rub4 = document.getElementById("rub-4");
let rub5 = document.getElementById("rub-5");
let rub6 = document.getElementById("rub-6");
let rub7 = document.getElementById("rub-7");

let nb_rub = 7;

let nb_rep_par_rub =[ 2, 6, 2, 6, 2, 7, 2 ];

function addClass(id, c){
	document.getElementById(id).classList.add(c);
}

function removeClass(id, c){
	document.getElementById(id).classList.remove(c);
}

function switchClass(id, newC, oldC){
	removeClass(id, oldC);
	addClass(id, newC);
}

function afficher_reponse(rub,q){
	for (let i=1; i <= nb_rep_par_rub[ rub -1 ]; i++){
		laQuestion = document.getElementById("q-" +rub+"-" +i);
		laReponse = document.getElementById("r-" +rub+"-" +i);
		if (q === i){
			laReponse.style.display ="block";
			laQuestion.setAttribute("data-icone", "-");
		} else {
			laReponse.style.display ="none";
			laQuestion.setAttribute("data-icone", "+");
		}
	}
};

function afficher_rubrique(rub){ // Rubrique --> regroupe toutes les questions sous un logo
	console.log("afficher_rubrique");
	for (let i=1; i <= nb_rub; i++){
		laRubrique = document.getElementById("lqr-" +i);
		if ( rub === i){
			laRubrique.style.display ="block";
			switchClass("rub-" + i, "selected", "notSelected");
			
			console.log(nb_rep_par_rub[ rub - 1]);
			for (let j=1; j <= nb_rep_par_rub[ rub - 1]; j++){
				console.log("r-" +rub +"-" + j);
				document.getElementById("r-" +rub +"-" +j).style.display ="none";
				document.getElementById("q-" +rub +"-" +j).setAttribute("data-icone", "+");
			}
		} else {
			laRubrique.style.display ="none";
			switchClass("rub-" + i, "notSelected", "selected");
		}
	}
};

const rubriques = document.getElementsByClassName('uneRubrique');

for (const rubrique of rubriques){
	rubrique.addEventListener('click', function cliqueSurRubrique(event) {
		let laRubrique = parseInt(rubrique.getAttribute('rub'));
		afficher_rubrique(laRubrique);
	}); 
}

const questions = document.getElementsByClassName('question');

for (const question of questions){
	question.addEventListener('click', function cliqueSurQuestion(event) {
		let laRubrique = parseInt(question.parentElement.getAttribute('rub'));
		let laQuestion = parseInt(question.getAttribute('q'));
		console.log("rub parent=", laRubrique);
		afficher_reponse(laRubrique,laQuestion);
	}); 
}

rub1.addEventListener("click", () => { afficher_rubrique(1); })
rub2.addEventListener("click", () => { afficher_rubrique(2); })
rub3.addEventListener("click", () => { afficher_rubrique(3); })
rub4.addEventListener("click", () => { afficher_rubrique(4); })
rub5.addEventListener("click", () => { afficher_rubrique(5); })
rub6.addEventListener("click", () => { afficher_rubrique(6); })
rub7.addEventListener("click", () => { afficher_rubrique(7); })


// Pour afficher les questions du premier logo
document.getElementById("q-1-1").addEventListener("click", () => { afficher_reponse(1,1)})
document.getElementById("q-1-2").addEventListener("click", () => { afficher_reponse(1,2)})

// Pour afficher les questions du deuxième logo
document.getElementById("q-2-1").addEventListener("click", () => { afficher_reponse(2,1)})
document.getElementById("q-2-2").addEventListener("click", () => { afficher_reponse(2,2)})
document.getElementById("q-2-3").addEventListener("click", () => { afficher_reponse(2,3)})
document.getElementById("q-2-4").addEventListener("click", () => { afficher_reponse(2,4)})
document.getElementById("q-2-5").addEventListener("click", () => { afficher_reponse(2,5)})
document.getElementById("q-2-6").addEventListener("click", () => { afficher_reponse(2,6)})

// Pour afficher les questions du troisième logo
document.getElementById("q-3-1").addEventListener("click", () => { afficher_reponse(3,1)})
document.getElementById("q-3-2").addEventListener("click", () => { afficher_reponse(3,2)})

// Pour afficher les questions du quatrième logo
document.getElementById("q-4-1").addEventListener("click", () => { afficher_reponse(4,1)})
document.getElementById("q-4-2").addEventListener("click", () => { afficher_reponse(4,2)})
document.getElementById("q-4-3").addEventListener("click", () => { afficher_reponse(4,3)})
document.getElementById("q-4-4").addEventListener("click", () => { afficher_reponse(4,4)})
document.getElementById("q-4-5").addEventListener("click", () => { afficher_reponse(4,5)})
document.getElementById("q-4-6").addEventListener("click", () => { afficher_reponse(4,6)})

// Pour afficher les questions du cinquième logo
document.getElementById("q-5-1").addEventListener("click", () => { afficher_reponse(5,1)})
document.getElementById("q-5-2").addEventListener("click", () => { afficher_reponse(5,2)})

// Pour afficher les questions du sixième logo
document.getElementById("q-6-1").addEventListener("click", () => { afficher_reponse(6,1)})
document.getElementById("q-6-2").addEventListener("click", () => { afficher_reponse(6,2)})
document.getElementById("q-6-3").addEventListener("click", () => { afficher_reponse(6,3)})
document.getElementById("q-6-4").addEventListener("click", () => { afficher_reponse(6,4)})
document.getElementById("q-6-5").addEventListener("click", () => { afficher_reponse(6,5)})
document.getElementById("q-6-6").addEventListener("click", () => { afficher_reponse(6,6)})
document.getElementById("q-6-7").addEventListener("click", () => { afficher_reponse(6,7)})

// Pour afficher les questions du septième logo
document.getElementById("q-7-1").addEventListener("click", () => { afficher_reponse(7,1)})
document.getElementById("q-7-2").addEventListener("click", () => { afficher_reponse(7,2)})
