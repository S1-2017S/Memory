// req grille standart facile // 

"use strict";


var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var page;

	page = fs.readFilesSync('page_gs_facile.html', 'utf-8');

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};



//--------------
module.exports = trait;
	
