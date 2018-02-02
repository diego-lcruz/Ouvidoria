module.exports = function(sequelize, DataTypes){
	var mensagem = sequelize.define("Mensagem",{
		data: {type: DataTypes.DATE, allowNull: false},
		assunto:{type: DataTypes.STRING, allowNull: false},
		texto:{type: DataTypes.STRING, allowNull: false}
	})
	 mensagem.associate = function(models) {
        // Define que uma Turma possui muitos Alunos
        mensagem.hasMany(models.usuario);
      
    };
	return mensagem;
}
