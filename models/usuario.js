module.exports = function(sequelize, DataTypes){
	var usuario = sequelize.define("usuario",{
		nome: {type: DataTypes.STRING, allowNull: false},
		matricula: {type: DataTypes.STRING, allowNull: false},
		email:{type: DataTypes.STRING, allowNull: false},
		turma:{type: DataTypes.STRING, allowNull: false}
	})
}
