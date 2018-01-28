var express = require("express")
var app = express()
var utils = require('../models/index');
app.post('/usuarios',function (req,res){
	usuarios
	.create(req.body)
	.then(function(usuario){
		utils.response(res, true ,"O usuário foi adicionado",usuarios, undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	});
app.get('/usuarios', function(req, res) {
  usuarios
    .findAll()
    .then(function(usuarios) {
        utils.response(res, true, undefined, usuarios, undefined);
    })
});

app.get("usuarios/:id",function(req,res){
	usuarios
	.create(req.body)
	.then(function(usuario){
		if(usuario){
			utils.response(res,true,undefined,usuario,undefined);
		}else{
			utils.response(res,false,"o usuário de o ID especificado não existe", undefined,req.params.id);
		}
	})


});
app.delete('/usuarios/:id', function(req, res) {
    usuarios
      .destroy({
          where: {
              id: req.params.id
          }
      })
      .then(function() {
          utils.response(res, true, "O usuário foi removido.", undefined, req.params.id);
      });
});

});
module.exports =app;