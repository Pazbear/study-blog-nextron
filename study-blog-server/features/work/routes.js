const { wrap } = require('async-middleware');
const router = require('express').Router();

const {validateUploadPayload} = require('./commands/verify-request-body');
const getWorksByUser = require('./commands/get-works-by-user')
const getWorkById = require('./commands/get-work-by-id')
const uploadImage = require('./commands/upload-image');
const uploadWork = require('./commands/upload-work');

/*const LoginHistory = require('./commands/save-login-history');*/
router.get('/get-works', wrap(getWorksByUser));
router.get('/get/:workId', wrap(getWorkById));
router.post('/upload-image', wrap(uploadImage));
router.post('/upload', wrap(validateUploadPayload), wrap(uploadWork));
/*
router.post('/delete', wrap(validateLoginPayload), wrap(login));
*/
module.exports = router;
