const Sequelize = require('sequelize');

const User = require('./User')
const Work = require('./Work')
const Buddy = require('./Buddy')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Work = Work;
db.Buddy = Buddy;

User.init(sequelize);
Work.init(sequelize);
Buddy.init(sequelize);

User.associate(db);
Work.associate(db);
Buddy.associate(db);


module.exports = db;