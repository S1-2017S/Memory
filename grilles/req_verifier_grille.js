//requete qui permet de verifier la grille avant de l'enregistrer.

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var grille;
	var contenu;

grille = {
		"images" : [
			["00", "01", "02", "03"],
			["10", "11", "12", "13"],
		],
};

contenu= JSON.stringify(grille);

fs.writeFileSync
page = fs.readFileSync('page_verifier_grille.html', 'utf-8');

marqueurs = {};

marqueurs["00"] = "./img/.jpg";
marqueurs["01"] = "./img/.jpg";
marqueurs["02"] = "./img/.jpg";
marqueurs["03"] = "./img/.jpg";
marqueurs["10"] = "./img/.jpg";
marqueurs["11"] = "./img/.jpg";
marqueurs["12"] = "./img/.jpg";
marqueurs["13"] = "./img/.jpg";

page = page.supplant(marqueurs);

res.writeHead(200, {'Content_Type': 'text/html'});
res.write(page);
res.end();
};

//----------------
module.exports = trait;
