// demo lecture repertoire

"use strict";

var fs = require("fs");
var fichiers;                     // liste de fichiers
var i;
var contenu;

fichiers = fs.readdirSync("./grilles", "utf-8");
console.log(fichiers);

for(i=0; i<fichiers.length; i++) {
	console.log(fichiers[i]);
}

contenu = fs.readFileSync("grilles/" + fichiers[0], "utf-8");
console.log(contenu);
