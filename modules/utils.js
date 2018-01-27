// Cria uma resposta padrão.
// Parâmetros:
// -resObj: o objeto resposta
// -success: true, se a resposta representa sucesso ou
//           false, caso contrário
// -message: a mensagem detalhando a resposta
// -result: o resultado retornado pela resposta
exports.response = function(resObj, success, message, result, details) {
    resObj.json({
        success: success,
        message: message,
        details: details,
        result: result
    });
};