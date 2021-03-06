const axios = require('axios');
const registerRepo = require('../repository');

async function getWorksByUser(req, res) {
  let result = {};
  var id = null;
  try {
    result = await registerRepo.getWorksByUser(req.body.userId);
  } catch (error) {
    console.error(error)
    result=error
  }
  if (result.success) {
    return res.send({ success: true, works: result.works });
  } else {
    const errName = result.name;
    console.error(errName)

    return res.status(500).send({ success: false, message: "서버 내부 오류" });
  }
  
}

module.exports = getWorksByUser;
