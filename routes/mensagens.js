var express = require("express")
var app = express()
var utils = require('../models/index');
app.post("/mensagem",function(req,res){
	mensagem
	.create(req.body)
	.then(function(mensagem){
		utils.response(res,true,"A mensagem foi criada",mensagem,undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	})
});
app.get("mensagem/:id",function(req,res){
	mensagem
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
    mensagem
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
