const axios = require('axios');
const registerRepo = require('../repository');

async function getWorkById(req, res) {
    let result = {};
    let workId = req.params.workId;
  try {
    result = await registerRepo.getWorkById(workId);
    console.log(result)
  } catch (error) {
    console.error(error)
    result=error
  }
  if (result.success) {
    return res.send({ success: true, work:result.work });
  } else {
    const errName = result.name;
    console.error(errName)
    return res.status(500).send({ success: false, message: "서버 내부 오류" });
  }
  
}

module.exports = getWorkById;
