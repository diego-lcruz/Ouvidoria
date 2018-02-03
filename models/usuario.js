module.exports = function(sequelize, DataTypes){
	var Usuario = sequelize.define("Usuario",{
		nome: {type: DataTypes.STRING, allowNull: false},
		matricula: {type: DataTypes.STRING, allowNull: false},
		email:{type: DataTypes.STRING, allowNull: false},
		turma:{type: DataTypes.STRING, allowNull: false}
	})
	 Usuario.associate = function(models) {
        Usuario.belongsTo(models.Mensagem, {
            // onDelete especifica a ação a ser tomada após a entidade ser removida:
            // Em uma relação 1:N, se o lado 1, for removido:
            // -CASCADE: as N entidades também serão removidas
            // -NO ACTION: nada é feito
            // -SET DEFAULT: as N entidades terão a chave estrangeira definida como o valor padrão (default)
            // -SET NULL: as N entidades terão a chave estrangeira definida como null
            //
            // Em relacionamentos 1:N, a opção padrão é SET NULL.
            onDelete: "SET NULL",
            foreignKey: {
                allowNull: false
            }
        });
    }
	return Usuario;
}
