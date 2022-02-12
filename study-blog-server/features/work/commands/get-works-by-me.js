const axios = require('axios');
const registerRepo = require('../repository');

async function getWorksByMe(req, res) {
  let result = {};
  var id = null;
  try {
    id = req.user.id;
    console.log(id)
  } catch (error) {
    return res.status(401).send({ success: false, auth:false, message: "세션 정보가 없습니다." })
  }

  try {
    result = await registerRepo.getWorksByUser(id);
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

module.exports = getWorksByMe;