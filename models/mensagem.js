module.exports = function(sequelize, DataTypes){
	var mensagem = sequelize.define("Mensagem",{
		usuario: {type: DataTypes.STRING, allowNull: false},
		data: {type: DataTypes.DATE, allowNull: false},
		assunto:{type: DataTypes.STRING, allowNull: false},
		texto:{type: DataTypes.STRING, allowNull: false}
	})
	return mensagem;
}
