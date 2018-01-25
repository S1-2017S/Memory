"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var grille;
	var contenu;

	// CREATION DE LA GRILLE DE NIVEAU MOYEN//

	grille = {
		"images" : [
			["/img/"+query.C00, "/img/"+query.C01, "/img/"+query.C02, "/img/"+query.C03],
			["/img/"+query.C10, "/img/"+query.C11, "/img/"+query.C12, "/img/"+query.C13],
		]
	};
	contenu = JSON.stringify(grille);
	fs.writeFileSync("./Les_Grilles/grille_normal/grille_T2.json", contenu, "utf-8")

		console.log(contenu);

	page = fs.readFileSync('page_verifier_grille2.html', 'utf-8');

	marqueurs = {};

	marqueurs["C00"] = "/img/"+query.C00;
	marqueurs["C01"] = "/img/"+query.C01;
	marqueurs["C02"] = "/img/"+query.C02;
	marqueurs["C03"] = "/img/"+query.C03;
	marqueurs["C10"] = "/img/"+query.C10;
	marqueurs["C11"] = "/img/"+query.C11;
	marqueurs["C12"] = "/img/"+query.C12;
	marqueurs["C13"] = "/img/"+query.C13;

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content_Type': 'text/html'});
	res.write(page);
	res.end();
};

//----------------
module.exports = trait;
