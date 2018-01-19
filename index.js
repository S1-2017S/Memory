"use strict";

var http = require("http");
var url = require("url");
var querystring = require("querystring");

//-------------------------------------------------------------------------
// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//-------------------------------------------------------------------------

var req_commencer = require("./req_commencer.js");
var req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
var req_inscrire = require("./req_inscrire.js");
var req_identifier = require("./req_identifier.js");
var req_choisir_niveau = require("./req_choisir_niveau.js");

var req_static = require("./req_static.js");
var req_erreur = require("./req_erreur.js");
var req_debuter_jeu = require("./req_debuter_jeu.js");
var req_retourner_1 = require("./req_retourner_1.js");
var req_retourner_2 = require("./req_retourner_2.js");
var req_abandonner = require("./req_abandonner.js");
var req_retour_accueil = require("./req_retour_accueil.js");
var req_continuer = require("./req_continuer.js");
var req_rejouer = require("./req_rejouer.js");



//-------------------------------------------------------------------------
// FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE
//-------------------------------------------------------------------------

var traite_requete = function (req, res) {

	var ressource;
	var requete;
	var pathname;;
	var query;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	// ROUTEUR

	try {
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
			case '/req_identifier':
				req_identifier(req, res, query);
				break;
			case '/req_choisir_niveau':
				req_choisir_niveau(req, res, query);
				break;
			case '/req_debuter_jeu':
				req_debuter_jeu(req, res, query);
				break;
			case '/req_retourner_1':
				req_retourner_1(req, res, query);
				break
			case '/req_retourner_2':
				req_retourner_2(req, res, query);
				break
			case '/req_abandonner':
				req_abandonner(req, res, query);
				break
			case '/req_retour_accueil':
				req_retour_accueil(req, res, query);
				break
			case '/req_continuer':
				req_continuer(req, res, query);
				break
			case '/req_rejouer':
				req_rejouer(req, res, query);
				break
			default:
				req_static(req, res, query);
				break;
		}
	} catch (e) {
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
var port = process.argv[2];
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);









