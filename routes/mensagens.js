var express = require("express")
var app = express()
var utils = require('../models/index');
app.post('/usuarios',function (req,res){
app.post("/mensagens",function(req,res){
	mensagens
	.create(req.body)
	.then(function(mensagens){
		utils.response(res,true,"A mensagem foi criada",mensagens,undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	})
});
app.get("mensagens/:id",function(req,res){
	mensagens
	.findById(parseInt(req.params.id))
	.then(function(mensagens){
		if(mensagens){
			utils.response(res,true,undefined,mensagens,undefined);
		}else{
			utils.response(res,false,"A mensagem do  ID especificado não existe", undefined,req.params.id);
		}
	})


});
app.delete('/mensagens/:id', function(req, res) {
    mensagens
      .destroy({
          where: {
              id: req.params.id
          }
      })
      .then(function() {
          utils.response(res, true, "A mensagem foi removida.", undefined, req.params.id);
      });
});

});
module.exports =app;
