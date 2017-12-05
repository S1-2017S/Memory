// req retour accueil

"use strict";

var fs = require("fs");
require('remedial');

var trait = function ( req, res, query) {

	var page;
	var marqueurs;
	page = fs.read
