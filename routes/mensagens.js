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
