// req continuer 

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var page;
	var marqueurs;
	var ml;                // les 2 lignes des 2 images ....
	var mc;
	var contenu;
	var l;
	var c;
	var i;
	var jeu;
	var marqueurs_tab;
	var victoire;

	contenu = fs.readFileSync("./fichiers_json/"+query.pseudo + ".json", "utf-8");
	jeu = JSON.parse(contenu);

	// RECHERCHE EMPLACEMENT DES 2 CARTES TEMPORAIREMENT RETOURNER

	ml = [];
	mc = [];
	for(l = 0; l < 2; l++) {
		for(c = 0; c < 3; c++) {
			if(jeu.visible[l][c] === 1) {
				ml.push(l);
				mc.push(c);
			}
		} 
	}

	// CHECKER SI CARTES SONT LES MEMES ET LES LAISSER FACE RETOURNER OU CACHER 

	console.log(jeu.images[ml[0]][mc[0]]);
	console.log(jeu.images[ml[1]][mc[1]]);

	if(jeu.images[ml[0]][mc[0]] === jeu.images[ml[1]][mc[1]]) {
		jeu.visible[ml[0]][mc[0]] = 2;
		jeu.visible[ml[1]][mc[1]] = 2;
	} else {
		jeu.visible[ml[0]][mc[0]] = 0;
		jeu.visible[ml[1]][mc[1]] = 0;
	}

	contenu = JSON.stringify(jeu);
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

	// PAGE FIN DE PARTI, QUAND TOUTES LES CARTES ON LA VALEUR 2
	victoire = true;
	for(l = 0; l < 2; l++) {
		for(c = 0; c < 3; c++) {
			if(jeu.visible[l][c] !== 2) {
				victoire = false;
			}
		}

	}

	if(victoire === true ) {
		page = fs.readFileSync('page_fin_partie.html', 'utf-8');
		page = page.supplant(marqueurs_tab);
		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);
	} else {
		page = fs.readFileSync('page_gs_facile.html', 'utf-8');
		page = page.supplant(marqueurs_tab);
		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);
	}

	res.writeHead(200, {'Content-type': 'text/html' });
	res.write(page);
	res.end();
};

//-------------
module.exports = trait;
