const Sequelize = require('sequelize');

module.exports = class Work extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            title: {
                type : Sequelize.STRING(100),
                allowNull:false,
            },
            content:{
                type : Sequelize.TEXT('medium'),
                allowNull:false,
                unique : false
            },
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Work',
            tableName:'work',
            paranoid : false,
            charset:'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(db) {
        db.Work.belongsTo(db.User, { targetKey : 'id' });
    }
}