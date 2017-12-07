// req debuter jeu facile // 

"use strict";


var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {
	
	var marqueurs;
	var page;
	var jeu;
	var contenu;
	var l;
	var c;

	// CREATION DE LA GRILLE ET NOM DES IMAGES

	jeu = {
		"images" : [
			["chat.jpg", "fenec.jpg", "chien.jpg"],
			["chien.jpg", "fenec.jpg", "chat.jpg"],
		],
		"visible" : [
			[0, 0, 0],
			[0, 0, 0],
		]
	};

	contenu = JSON.stringify(jeu);

	fs.writeFileSync(query.pseudo + ".json", contenu, "utf-8");
	page = fs.readFileSync('page_gs_facile.html', 'utf-8');

	marqueurs = {};
	marqueurs.pseudo = query.pseudo;

	marqueurs["00"] = "img/back.png";
	marqueurs["01"] = "img/back.png";
	marqueurs["02"] = "img/back.png";
	marqueurs["10"] = "img/back.png";
	marqueurs["11"] = "img/back.png";
	marqueurs["12"] = "img/back.png";

	page = page.supplant(marqueurs);

	// RECUPERE LE CHOIX DU JOUEURS ET RETOURNE LA CARTE


	for(l=0;l<=2;l++)
		for(c=10; c<=13;c++);
	



	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------------
module.exports = trait;
	
