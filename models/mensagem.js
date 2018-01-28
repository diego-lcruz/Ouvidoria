module.exports = function(sequelize, DataTypes){
	var mensagem = sequelize.define("mensagem",{
		usuario: {type: DataTypes.STRING, allowNull: false},
		data: {type: DataTypes.DATATIME, allowNull: false},
		assunto:{type: DataTypes.STRING, allowNull: false},
		texto:{type: DataTypes.STRING, allowNull: false}
	})
}