//req supprimer compte

"use strict";

	var fs = require("fs");
	require('remedial');
	var trait = function(req, res, query){
	var marqueurs;
    var page;
    var i;
    var listepseudo;
    var membre= {};

    //  LE COMPTE EST SUPPRIMÉ 

    listepseudo = fs.readFileSync('membres.json','UTF-8');
    membre = JSON.parse(listepseudo);

    for(i=0;i<membre.lenght;i++){
        if(query.pseudo === membre [i].pseudo){
       		membre.splice(i,1);
        	listePseudo = JSON.stringfiy(membre)(membre);
        
		fs.writeFileSync("membres.json",listepseudo, 'UTF-8');
        break;

    }
}

    page = fs.readFileSync('page_suppression.html', 'UTF-8');
    marqueurs = {};
    marqueurs.pseudo = query.pseudo;
    page = page.supplant(marqueurs);

res.writeHead(200, {'content-type': 'text/html'});
res.write(page);
res.end();
};


module.exports  = trait
