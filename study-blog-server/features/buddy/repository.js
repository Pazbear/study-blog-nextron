const bcrypt = require('bcrypt');
const {Buddy, Sequelize, User} = require('../../models')
const Op= Sequelize.Op

async function requestBuddy(from, to){
  const result = await Buddy.create({
    fromId : from,
    toId:to
  })
  return { success:true }
}

async function getMyBuddies(userId){
  let buddies = await Buddy.findAll({
    where:{
      [Op.or]:[{fromId:userId}, {toId:userId}]
    },
    include:[{
      model:User, attributes:['id', 'nickname'], as:'from'
    },{
      model:User, attributes:['id', 'nickname'], as:'to'
    }],
  })
  buddies = buddies.map(buddy => buddy.get({plain:true}))
  buddies = buddies.map((buddy)=>{
    
    if(buddy.fromId === userId){
      buddy.buddy = buddy.to
    }else if(buddy.toId === userId){
      buddy.buddy = buddy.from
    }else{
      buddy.buddy = null
    }
    return buddy
  })
  console.log(buddies)
  return {success:true, buddies:buddies}
}

module.exports = {
  requestBuddy,
  getMyBuddies
};
