const debug = require('debug')('express:login');

const { FETCH_INFO_ERROR_MESSAGE } = require('../constants');
const { getUserById, saveLoginHistory } = require('../repository');
const requestIp = require('request-ip');

async function LoginHistory(req, res) {
  let userInfo;
  const { user } = req;
  try {
    userInfo = await getUserById(user && user.id);
  } catch (getUserError) {
    const message =  FETCH_INFO_ERROR_MESSAGE

    return res.status(500).send({ success: false, message });
  }
  try{
    await saveLoginHistory(requestIp.getClientIp(req), user.id);
  }catch(error){
    console.log("save-login-history : "+error);
  }
  
  return res.send({ success: true, userInfo });
}

module.exports = LoginHistory;
