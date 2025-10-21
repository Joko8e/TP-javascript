// creer un window.onload
window.onload = function(){

    // selectionner les liens
	var mesLien = document.querySelectorAll('a');
	console.log(mesLien)

    // faire une boucle sur tous les liens
	for(let i = 0; i < mesLien.length; i++){
	

        // evenement click sur chaque lien, lancement de la fonction anonyme
		mesLien[i].addEventListener('click', function(event){
		
			// annuler le comportement par defaut du lien pour rester sur ma page
			event.preventDefault();

			
			// recuperer dans une variable les attributs
				// le title du lien
				let monTitle = mesLien[i].getAttribute('title');
				console.log(monTitle);
				// le href du lien
				let monHref = mesLien[i].getAttribute('href') 
				console.log(monHref);

			// attribuer à la grande image
				
			// selectionner la grande image
			var bigImg = document.querySelector('img')
			console.log(bigImg)

			// attribuer la variable du href au src de la grande image
			bigImg.setAttribute('src', monHref)

			// attribuer la variable du title au alt de la grande image
			bigImg.setAttribute('alt', monTitle)

			// j'attibue au figcaption le contenu présent dans la variable texte
			document.querySelector('figcaption').textContent = monTitle

			// appliquer un contour noir à tous les liens 
			mesLien[i].setAttribute("style", "border:2px solid black;") ;
			

			// j'affecte le contour rouge au lien cliqué
			if(mesLien[i].style.border == '2px solid black'){
				mesLien[i].style.border = "2px solid red";
			}
			else{
				mesLien[i].style.border = "";
			}
			
			

		// fin de la fonction anonyme
		})
		
	// fin de la boucle
	}

// fin du window.onload
};