var express = require("express")
var app = express()
var utils = require('../models/index');
app.post('/usuario',function (req,res){
	usuario
	.create(req.body)
	.then(function(usuario){
		utils.response(res, true ,"O usuário foi adicionado",usuario, undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	});
app.get('/usuarios', function(req, res) {
  usuario
    .findAll()
    .then(function(usuario) {
        utils.response(res, true, undefined, usuario, undefined);
    })
});

app.get("usuario/:id",function(req,res){
	usuario
	.create(req.body)
	.then(function(usuario){
		if(usuario){
			utils.response(res,true,undefined,usuario,undefined);
		}else{
			utils.response(res,false,"o usuário de o ID especificado não existe", undefined,req.params.id);
		}
	})


});
app.delete('/usuario/:id', function(req, res) {
    usuario
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
