const axios = require('axios');
const registerRepo = require('../repository');

async function createUser(req, res) {
  let result = {};
  /*
  const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY
  const custKey = req.body.ReCAPTCHA;
  const isHuman = await axios.post('https://www.google.com/recaptcha/api/siteverify', 
  `secret=${RECAPTCHA_SERVER_KEY}&response=${custKey}`)
  .then(response => response.data)
  .then(json => json.success)
  .catch(err => {
    console.error(err)
    console.log('Error in Google Siteverify API(문의해주시기 바랍니다)')
    return false;
  })

  if(custKey === null || !isHuman){
    console.error("NOT A HUMAN Or Error in Google Siteverify API(문의해주시기 바랍니다)")
    return res.status(500).send({ success: false, message: "NOT A HUMAN Or Error in Google Siteverify API(문의해주시기 바랍니다)" });
  }
  */
  try {
    result = await registerRepo.createUser(req.body);
  } catch (error) {
    console.error(error)
    result=error
  }
  if (result.success) {
    return res.send({ success: true, message: "성공적으로 회원가입이 완료되었습니다." });
  } else {
    const errName = result.name;
    console.error(errName)
    const databaseError =
      errName === 'SequelizeUniqueConstraintError' ? '이미 존재하는 ID입니다.' : '알 수 없는 오류';

    return res.status(500).send({ success: false, message: databaseError });
  }
  
}

module.exports = createUser;
