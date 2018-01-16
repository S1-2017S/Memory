// req_creer_grille

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var l
	var c
	var contenu
	var grille = {}

	// AFFICHAGE DE LA PAGE QUI PERMET DE CREER UNE  GRILLE

	if(query.niveau === "facile") {
		page = fs.readFileSync('page_creer_grille1.html', 'utf-8');
	}else if(query.niveau === "normal") {
		page= fs.readFileSync('page_creer_grille2.html', 'utf-8');
	}else if(query.niveau === "difficile") {
		page= fs.readFileSync('page_creer_grille3.html', 'utf-8');
	}


	marqueurs = {};
	page = page.supplant(marqueurs);

	res.writeHead(200,{'Content_Type': 'text/html'});
	res.write(page);
	res.end()
};

//--------------
module.exports = trait;
