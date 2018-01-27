var express = require("express")
var app = express()
var utils = require('../models/index');
app.post('/usuarios',function (req,res){
	Aluno
	.create(req.body)
	.then(function(usuario){
		utils.response(res, true , undefined,usuarios, undefined);

	})
})