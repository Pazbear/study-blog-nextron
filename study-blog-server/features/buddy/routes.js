const { wrap } = require('async-middleware');
const router = require('express').Router();

const {validateRequestBuddyPayload} = require('./commands/verify-request-body');
const requestBuddy = require('./commands/request-buddy');
const getMyBuddies = require('./commands/get-my-buddies');

/*const LoginHistory = require('./commands/save-login-history');*/
router.post('/request-buddy',wrap(validateRequestBuddyPayload), wrap(requestBuddy));
router.get('/get-my-buddies', wrap(getMyBuddies))

module.exports = router;
