const Sequelize = require('sequelize');

module.exports = class Buddy extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            isAccepted: {
                type : Sequelize.BOOLEAN,
                allowNull:false,
                unique:false,
            },
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Buddy',
            tableName:'buddy',
            paranoid : false,
            charset:'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(db) {
        db.Buddy.belongsTo(db.User, {as:'from'})
        db.Buddy.belongsTo(db.User, {as:'to'})
    }
}