// req retourner 1 

"use strict";

var fs = require("fs")
require('remedial');

var trait = function (re, res, query) {

	var page;

	page = fs.readFilesSync('page_gi_facile.html', 'utf-8'); 

	marqueurs = {};
	marqueurspseudo = querypseudo;
	page = page.supplant(marqueurs);
	
	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();
}; 


//-----------
module.exports = trait;
