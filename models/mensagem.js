module.exports = function(sequelize, DataTypes){
	var Mensagem = sequelize.define("Mensagem",{
		data: {type: DataTypes.DATE, allowNull: false},
		assunto:{type: DataTypes.STRING, allowNull: false},
		texto:{type: DataTypes.STRING, allowNull: false}
	})
	   Mensagem.associate = function(models) {
        // Define que uma Turma possui muitos Alunos
        Mensagem.hasMany(models.Usuario);
        
    };
	 	return Mensagem;
}
