// req_choix_niveau

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page

	//AFFICHAGE DE LA PAGE CHOIX DE NIVEAU

	page = fs.readFileSync('page_choix_niveau.html', 'utf-8');

	marqueurs = {};
	marqueurs.pseudo = query.pseudo;
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};


//-------------

module.exports = trait;
