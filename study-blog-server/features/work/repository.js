const bcrypt = require('bcrypt');
const {Work, User} = require('../../models')

async function getWorkById(workId)
{
  const work = await Work.findOne({
    where:{id:workId},
    include:[
      {model:User, attributes:['id', 'nickname']}
    ]
  })
  return {success:true, work : work}
}

async function getWorksByUser(userId)
{
  const works = await Work.findAndCountAll({
    where:{UserId:userId}
  })
  return {success:true, works : works}
}

async function uploadWork(userId, {title, content})
{
  const works = await Work.create({
    UserId : userId,
    title:title,
    content : content
  })
  return {success:true}
}

module.exports = {
  getWorkById,
  getWorksByUser,
  uploadWork
};
