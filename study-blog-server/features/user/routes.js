const { wrap } = require('async-middleware');
const router = require('express').Router();

const {validateRegisterPayload, validateLoginPayload} = require('./commands/verify-request-body');
const register = require('./commands/register')
const login = require('./commands/login');
const logout = require('./commands/logout')
/*const LoginHistory = require('./commands/save-login-history');*/

router.post('/register', wrap(validateRegisterPayload), wrap(register));
router.post('/login', wrap(validateLoginPayload), wrap(login)/*, wrap(LoginHistory)*/);
router.post('/logout', wrap(logout))

module.exports = router;
