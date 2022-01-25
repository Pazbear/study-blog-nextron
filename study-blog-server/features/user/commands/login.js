const debug = require('debug')('express:login');
const axios = require('axios');
const passport = require('passport');

const { ID_PASSWORD_COMBINATION_ERROR, INTERNAL_SERVER_ERROR } = require('../constants');

async function login(req, res) {
  debug('login');
  /*const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY*/
  /*const custKey = req.body.ReCAPTCHA;
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
    console.log("NOT A HUMAN Or Error in Google Siteverify API(문의해주시기 바랍니다)")
    return res.status(500).send({ success: false, message: "NOT A HUMAN Or Error in Google Siteverify API(문의해주시기 바랍니다)" });
  }*/
  return passport.authenticate('local-login', (error, user) => {
    if (error || !user) {
      return res.status(401).send({
        success: false,
        message: ID_PASSWORD_COMBINATION_ERROR,
      });
    }

    return req.logIn(user, loginError => {
      if (loginError) {
        return res.status(500).send({
          success: false,
          message: INTERNAL_SERVER_ERROR
        });
      }
      return res.status(200).send({
        success:true,
        message:"로그인되었습니다."
      });
    });
  })(req, res);
}

module.exports = login;
