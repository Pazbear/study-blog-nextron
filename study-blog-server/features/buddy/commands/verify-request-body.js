const Joi = require('joi');

const constants = require('../constants');

const getRequestBuddySchema = Joi.object().keys({
  from : Joi.number().required(),
  to: Joi.number().required()
})

async function validateRequestBuddyPayload(req, res, next) {
  let payloadValidation = {};
  try {
    payloadValidation = await getRequestBuddySchema.validate(req.body, { abortEarly: false });
  } catch (validateRegisterError) {
    payloadValidation = validateRegisterError;
  }
  if (payloadValidation.error) {
    const { details } = payloadValidation.error;
    let errors;
    if (details) {
      errors = {};
      details.forEach((errorDetail) => {
        const {
          path: [key],
          type,
        } = errorDetail;
        const errorType = type.split('.')[1];
        errors[key] = constants[`${key.toUpperCase()}_${errorType.toUpperCase()}_ERROR`];
      });
    }

    return res.status(400).send({ success: false, messages: errors });
  } else {
    return next();
  }
};

module.exports={
  validateRequestBuddyPayload
}