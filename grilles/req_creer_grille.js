// req_creer_grille

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;

// AFFICHAGE DE LA PAGE QUI PERMET DE CREER UNE  GRILLE

	page= fs.readFileSync('page_creer_grille.html', 'utf-8');

	marqueurs = {};
	page = page.supplant(marqueurs);

	res.writeHead(200,{'Content_Type': 'text/html'});
	res.write(page);
	res.end()
};

//--------------
module.exports = trait;
