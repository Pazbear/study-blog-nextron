const axios = require('axios');
const registerRepo = require('../repository');

async function requestBuddy(req, res) {
  let result = {};
  try {
    result = await registerRepo.requestBuddy(req.body.from, req.body.to);
    console.log(result)
  } catch (error) {
    console.error(error)
    result=error
  }
  if (result.success) {
    return res.send({ success: true});
  } else {
    const errName = result.name;
    console.error(errName)
    return res.status(500).send({ success: false, message: "서버 내부 오류" });
  }
  
}

module.exports = requestBuddy;
