// req grille standart facile // 

"use strict";


var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {
	
var ligne;
var colonne;

var image =	[
				["img1", "img1", "img1"] 
				["img1", "img1", "img1"]
				["img1", "img1", "img1"] 
			]


var etat = [ 
				[0,0,0]
				[0,0,0]
				[0,0,0]
			]




for(ligne = 0; ligne1 < 3; ligne++) {
	for(colonne = 0; colonne < (ligne + 1); colonne++) {
	}
} 











	res.writeHead(200, {'Content-type': 'text/html'});
	res.write(page);
	res.end();
