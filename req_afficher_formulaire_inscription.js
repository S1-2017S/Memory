// req_afficher_formulaire_inscription//

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;

	//AFFICHAGE DU model_formulaire_inscription 

	page = fs.readFileSync('model_formulaire_inscription.html', 'utf-8');

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content - Type': 'text/html'});
	res.write(page);
	res.end();
};

module.exports = trait;
