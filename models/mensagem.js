module.exports = function(sequelize, DataTypes){
	var Mensagem = sequelize.define("Mensagem",{
		data: {type: DataTypes.DATE, allowNull: false},
		assunto:{type: DataTypes.STRING, allowNull: false},
		texto:{type: DataTypes.STRING, allowNull: false}
	})
	      	Mensagem.associate = function(models) {
        Mensagem.belongsTo(models.Usuario, {
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
	 	return Mensagem;
}
