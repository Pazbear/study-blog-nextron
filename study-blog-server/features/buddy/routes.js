const { wrap } = require('async-middleware');
const router = require('express').Router();

const {validateRequestBuddyPayload} = require('./commands/verify-request-body');
const requestBuddy = require('./commands/request-buddy')

/*const LoginHistory = require('./commands/save-login-history');*/
router.post('/request-buddy',wrap(validateRequestBuddyPayload), wrap(requestBuddy));

module.exports = router;
