const bcrypt = require('bcrypt');
const {User} = require('../../models')

async function createUser({userId, password, nickname, avatar})
{
  const hashedPass = await bcrypt.hash(password, 12);
  const result = await User.create({
    userId : userId,
    password : hashedPass,
    nickname : nickname,
    avatar : avatar
  })
  return {success:true, email : result.userId}
}

async function getUserForLoginData(userId, password) {
  const user = await User.findOne({
    where:{userId:userId}
  })
  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return {
    id : user.id,
    userId: user.userId,
    nickname : user.nickname,
    avatar : user.avatar,
    created_at: user.createdAt,
  };
}

async function getUser(userId) {
  const user = await User.findOne({
    attributes:['id','userId', 'nickname', 'avatar', 'createdAt'],
    where : {userId : userId}
  })
  return user;
}

async function getUserByUserId(userId) {
  return getUser( userId );
}
/*
async function saveLoginHistory(requestIp, id){
  await LoginHistory.create({
    ip : requestIp,
    UserId:id
  })
}
*/
module.exports = {
  createUser,
  getUserForLoginData,
  getUserByUserId,
  /*saveLoginHistory*/
};
