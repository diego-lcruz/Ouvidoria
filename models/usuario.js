module.exports = function(sequelize, DataTypes){
	var Usuario = sequelize.define("Mensagem",{
		nome: {type: DataTypes.STRING, allowNull: false},
		matricula: {type: DataTypes.STRING, allowNull: false},
		email:{type: DataTypes.STRING, allowNull: false},
		turma:{type: DataTypes.STRING, allowNull: false}
	})
}