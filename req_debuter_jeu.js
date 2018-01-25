// req debuter jeu facile // 

"use strict";


var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var jeu;
	var contenu;
	var marqueurs_tab;
	var l;
	var c;
	var nc;				//Nombre colonne
	var nl;				//Nombre ligne

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

	fs.writeFileSync("./fichiers_json/"+query.pseudo + ".json", contenu, "utf-8");
	page = fs.readFileSync('page_gs_facile.html', 'utf-8');

	marqueurs = {};
	marqueurs.pseudo = query.pseudo;

	marqueurs["00"] = "img/back.png";
	marqueurs["01"] = "img/back.png";
	marqueurs["02"] = "img/back.png";
	marqueurs["10"] = "img/back.png";
	marqueurs["11"] = "img/back.png";
	marqueurs["12"] = "img/back.png";
	
	nl = jeu.visible.length;
	nc = jeu.visible[0].length;

	marqueurs_tab = {};
	for(l = 0; l < nl; l++) {
		for(c = 0; c < nc; c++){
			if(jeu.visible[l][c] === 0) {
				marqueurs_tab[String(l) + String(c)] = "img/back.png";
			} else if(jeu.visible[l][c] === 1) {
				marqueurs_tab[String(l) + String(c)] ="img/" + jeu.images[l][c];
			} else if(jeu.visible[l][c] === 2) {
				marqueurs_tab[String(l) + String(c)] ="img/" + jeu.images[l][c];
			}

		}
	}


	page = page.supplant(marqueurs);


	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------------
module.exports = trait;

