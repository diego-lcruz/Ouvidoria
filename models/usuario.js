module.exports = function(sequelize, DataTypes){
	var Usuario = sequelize.define("Usuario",{
		nome: {type: DataTypes.STRING, allowNull: false},
		matricula: {type: DataTypes.STRING, allowNull: false},
		email:{type: DataTypes.STRING, allowNull: false},
		turma:{type: DataTypes.STRING, allowNull: false}
	})
	 Usuario.associate = function(models) {
        // Define que uma Turma possui muitos Alunos
        Usuario.hasMany(models.Mensagem);
    };

	return Usuario;
}
