const bcrypt = require('bcrypt');
const {Buddy} = require('../../models')

async function requestBuddy(from, to){
  const result = await Buddy.create({
    from: from,
    to:to
  })
  return { success:true }
}

module.exports = {
  requestBuddy,
};
