const axios = require('axios');
const registerRepo = require('../repository');

async function uploadWork(req, res) {
  let result = {};
  var id = null;
  try {
    id = req.user.id;
    console.log(id)
  } catch (error) {
    return res.status(401).send({ success: false, auth:false, message: "세션 정보가 없습니다." })
  }

  try {
    result = await registerRepo.uploadWork(id, req.body);
  } catch (error) {
    console.error(error)
    result=error
  }
  if (result.success) {
    return res.send({ success: true });
  } else {
    const errName = result.name;
    console.error(errName)

    return res.status(500).send({ success: false, message: "업로드에 실패했습니다." });
  }
  
}

module.exports = uploadWork;
