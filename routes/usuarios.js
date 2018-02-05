var express = require("express")
var app = express()
var models  = require('../models/index');
var utils = require('../modules/utils');
var Usuario = models.Usuario;

app.post('/usuario',function (req,res){
	Usuario
	.create(req.body)
	.then(function(usuario){
		utils.response(res, true ,"O usuário foi adicionado",usuario, undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	});
app.get('/usuarios', function(req, res) {
  Usuario
    .findAll()
    .then(function(usuario) {
        utils.response(res, true, undefined, usuario, undefined);
    })
});

app.get("usuario/:id",function(req,res){
	Usuario
	.create(req.body)
	.then(function(usuario){
		if(usuario){
			utils.response(res,true,undefined,usuario,undefined);
		}else{
			utils.response(res,false,"o usuário de o ID especificado não existe", undefined,req.params.id);
		}
	})


});
app.put('/usuarios', function(req, res) {
  Usuario
    .findById(parseInt(req.body.id))
    .then(function(usuario) {
      if (usuario) {
        // Cada parâmetro recebe o novo valor que vem da requisição (req.body.*), se este for definido,
        // ou permanece com o valor antigo.
        // VARIAVEL = VALOR1 || VALOR2 significa que VARIAVEL recebe VALOR1, se este não for nulo.
        // Caso contrário, recebe VALOR2.
        usuario.nome = req.body.nome || usuario.nome;
        usuario.matricula = req.body.matricula || usuario.matricula;

        usuario
            .save()
            .then(function(usuarioModificado) {
                utils.response(res, true, "Os dados do usuario foram atualizados.", usuarioModificado, undefined);
            })
      } else {
          utils.response(res, false, "O usuario com o ID especificado não existe.", usuarioModificado, req.params.id);
      }
    })
})
app.delete('/usuario/:id', function(req, res) {
    Usuario
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
