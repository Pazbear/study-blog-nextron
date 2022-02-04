const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            userId: {
                type : Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            password:{
                type : Sequelize.STRING(200),
                allowNull:false,
                unique : false
            },
            nickname:{
                type : Sequelize.STRING(30),
                allowNull:false,
                unique : false
            },
            avatar: {
                type:Sequelize.STRING(200),
                allowNull:true,
                defaultValue:null,
                unique:false
            }
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'User',
            tableName:'user',
            paranoid : false,
            charset:'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(db){
        db.User.hasMany(db.Work, {sourceKey : 'id'});
        db.User.hasMany(db.Buddy, {as:'from', foreignKey:'fromId'})
        db.User.hasMany(db.Buddy, {as:'to', foreignKey:'toId'})
    }
}