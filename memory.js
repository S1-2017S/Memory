//==============================================================================// Site WEB Memory
// Auteur : C. Louchelart
// Version : 20/11/2017
//==============================================================================

"use stric";

var http = require("http");
var url = require("url");
var querystring = require("querystring");

//------------------------------------------------------------------------------// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//------------------------------------------------------------------------------
var req_commencer = require("./req_commencer.JS");
var req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
var req_inscrire = require("./req_inscrire.js");
var req_identifier = require("./req_identifier");

var req_static = require("./req_static.js")
var req_erreur = require("./req_erreur.js")

//------------------------------------------------------------------------------//FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE
//------------------------------------------------------------------------------

var traite_requete = function (req, res) {

	var ressource;
	var requete;
	var pathname;
	var query;

	console.log("URL recue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	//ROUTEUR

	try{
		switch (pathname) {
			case '/':
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case 'req_identifier':
				req_identifier(req, res, query);
				break;
			default:
				req_static(req, res, pathname);
				break;
		}
	}catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};

//-------------------------------------------------------------------------
// CREATION ET LANCEMENT DU SERVEUR
//-------------------------------------------------------------------------

var mon_serveur = http.createServer(traite_requete);
var port = 5000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
