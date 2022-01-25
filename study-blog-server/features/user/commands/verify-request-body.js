const Joi = require('joi');

const constants = require('../constants');

const { ID_MAX, ID_MIN, PASSWORD_MAX, PASSWORD_MIN } = constants;

const registerSchema = Joi.object().keys({
  userId : Joi.string().min(ID_MIN).max(ID_MAX),
  password:Joi.string().min(PASSWORD_MIN).max(PASSWORD_MAX),
  nickname : Joi.string().min(1).max(30),
  avatar : Joi.string().max(200)
})

const loginSchema = Joi.object().keys({
  userId: Joi.string().min(ID_MIN).max(ID_MAX),
  password: Joi.string()
    .min(PASSWORD_MIN)
    .max(PASSWORD_MAX)
});

async function validateLoginPayload(req, res, next) {
  let payloadValidation = {};
  try {
    payloadValidation = await loginSchema.validate(req.body, { abortEarly: false });
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

async function validateRegisterPayload(req, res, next) {
  let payloadValidation = {};
  try {
    payloadValidation = await registerSchema.validate(req.body, { abortEarly: false });
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
  validateRegisterPayload,
  validateLoginPayload
}