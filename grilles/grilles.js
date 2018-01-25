//serveur grille

"use strict";

var http = require("http");
var url = require("url");
var querystring = require("querystring");

//-------------------------------------------------------------------------
// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//-------------------------------------------------------------------------

var req_commencer2 = require("./req_commencer2.js");
var req_creer_grille = require("./req_creer_grille.js");
var req_modifier_grille = require("./req_modifier_grille.js");
var req_verifier_grille1 = require("./req_verifier_grille1.js");
var req_verifier_grille2 = require("./req_verifier_grille2.js");
var req_verifier_grille3 = require("./req_verifier_grille3.js");
var req_enregistrer_grille1 = require("./req_enregistrer_grille1.js");
var req_enregistrer_grille2 =require("./req_enregistrer_grille2.js");
var req_enregistrer_grille3 =require("./req_enregistrer_grille3.js");
var req_retourner_accueil = require("./req_retourner_accueil.js");

var req_static = require("../req_static.js");
var req_erreur = require("../req_erreur.js");
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
			case '/req_commencer2':
				req_commencer2(req, res, query);
				break;
			case '/req_creer_grille':
				req_creer_grille(req, res, query);
				break
			case '/req_modifier_grille':
				req_modifier_grille(req, res, query);
				break
			case '/req_verifier_grille1':
				req_verifier_grille1(req, res, query);
				break

			case '/req_verifier_grille2':
				req_verifier_grille2(req, res, query);
				break
			case '/req_verifier_grille3':
				req_verifier_grille3(req, res, query);
				break

			case '/req_enregistrer_grille1':
				req_enregistrer_grille1(req, res, query);
				break

			case '/req_enregistrer_grille2':
				req_enregistrer_grille2(req, res, query);
				break

			case '/req_enregistrer_grille3':
				req_enregistrer_grille3(req, res, query);
				break

			case '/req_retourner_accueil':
				req_retourner_accueil(req, res, query);
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
var port = 3000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);

