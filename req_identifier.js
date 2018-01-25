// rep_identifier

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var pseudo;
	var password;
	var page;
	var membre;
	var contenu_fichier;
	var listeMembres;
	var i;
	var trouve;

	// ON LIT LES COMPTES EXISTANTS

	contenu_fichier = fs.readFileSync("./fichiers_json/"+"membres.json", 'utf-8');
	listeMembres = JSON.parse(contenu_fichier);

	// ON VERIFIE QUE LE PSEUDO/PASSWORD EXISTE
	
	trouve = false; 
	i = 0;
	while(i<listeMembres.length && trouve === false) {
		if(listeMembres[i].pseudo === query.pseudo) {
			if(listeMembres[i].password === query.password) {
				trouve = true;
			}
		}
		i++;
	}

	// ON RENVOIT UNE PAGE HTML

	if(trouve === false) {


		// SI IDENTIFICATION INCORRECT, ON REAFFICHE PAGE ACCUEIL AVEC ERREUR

		page = fs.readFileSync('page_accueil_membres.html', 'utf-8');

		marqueurs = {};
		marqueurs.erreur = "ERREUR: compte ou mot de passe incorrect";
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);
	} else {
		
		//SI INDENTIFICATION OK, ON ENVOIE PAGE ACCUEIL MEMBRE
		
		page = fs.readFileSync('page_accueil_membres.html', 'utf-8');

		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------

module.exports = trait;


