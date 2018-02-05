var express = require("express")
var app = express()
var models  = require('../models/index');
var utils = require('../modules/utils');
var Mensagem = models.Mensagem;
app.post('/mensagens', function (req,res) {
	Mensagem
	.create(req.body)
	.then(function(mensagem){
		utils.response(res,true,"A mensagem foi criada",mensagem,undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	})

});

app.get("/mensagens/:id",function(req,res){

	Mensagem
	.findById(parseInt(req.params.id))
	.then(function(mensagem){
		if(mensagem){
			utils.response(res,true,undefined,mensagem,undefined);
		}else{
			utils.response(res,false,"A mensagem do  ID especificado não existe", undefined,req.params.id);
		}
	})


});

// Obter todos as turmas
app.get('/mensagens', function(req, res) {
    Mensagem
        .findAll({
            // use include para incluir os modelos relacionados a este.
            include: [ models.Usuario]
        })
        .then(function(objs) {
            utils.response(res, true, undefined, objs, undefined);
        });
});
app.put('/mensagens', function(req, res) {
  Mensagem
    .findById(parseInt(req.body.id))
    .then(function(mensagem) {
      if (mensagem) {
       mensagem.assunto = req.body.assunto || mensagem.assunto;
       mensagem.texto = req.body.texto || mensagem.texto;
       mensagem.UsuarioId = req.body.UsuarioId || mensagem.UsuarioId;

        mensagem
            .save()
            .then(function(mensagemModificada) {
                utils.response(res, true, "Os dados do usuario foram atualizados.",mensagemModificada, undefined);
            })
      } else {
          utils.response(res, false, "O usuario com o ID especificado não existe.", mensagemModificada, req.params.id);
      }
    })
})
app.delete('/mensagem/:id', function(req, res) {
    Mensagem
      .destroy({
          where: {
              id: req.params.id
          }
      })
      .then(function() {
          utils.response(res, true, "A mensagem foi removida.", undefined, req.params.id);
      });
});


module.exports =app;
