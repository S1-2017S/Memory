// var retouner 2 

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var page;
	var marqueurs;
	var marqueurs_tab;
	var l;
	var c;
	var caze;
	var jeu;
	var contenu;


	//ON RECUPERE LA LIGNE ET LA COLONNE 

	jeu = fs.readFileSync("./fichiers_json/"+query.pseudo + ".json", contenu, "utf-8");
	jeu = JSON.parse(jeu);
	l = Math.floor(query.caze/10)
	c = query.caze-(10 * [l]);


	jeu.visible[l][c] = 1;


	contenu = JSON.stringify(jeu);
	page = fs.readFileSync('page_gp_facile.html', 'utf-8');
	fs.writeFileSync("./fichiers_json/"+query.pseudo + ".json", contenu, "utf-8");
	
	marqueurs_tab = {};
	for(l = 0; l < 2; l++) {
		for(c = 0; c < 3; c++){
			if(jeu.visible[l][c] === 0) {
				marqueurs_tab[String(l) + String(c)] = "img/back.png";
			} else if(jeu.visible[l][c] === 1) {
				marqueurs_tab[String(l) + String(c)] ="img/" + jeu.images[l][c];
			} else if(jeu.visible[l][c] === 2) {
				marqueurs_tab[String(l) + String(c)] ="img/" + jeu.images[l][c];
			}	
		}
	}
	page = page.supplant(marqueurs_tab);

	marqueurs = {};
	marqueurs.pseudo = query.pseudo;
	page = page.supplant(marqueurs);


	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};


//-----------
module.exports = trait;

