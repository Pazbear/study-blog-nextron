const Joi = require('joi');

const constants = require('../constants');

const { TITLE_MAX, TITLE_MIN, CONTENT_MAX, CONTENT_MIN } = constants;

const uploadSchema = Joi.object().keys({
  title : Joi.string().min(TITLE_MIN).max(TITLE_MAX),
  content:Joi.string().min(CONTENT_MIN).max(CONTENT_MAX),
})

const getWorksSchema = Joi.object().keys({
  userId : Joi.number()
})

async function validateUploadPayload(req, res, next) {
  let payloadValidation = {};
  try {
    payloadValidation = await uploadSchema.validate(req.body, { abortEarly: false });
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

async function validateGetWorksPayload(req, res, next) {
  let payloadValidation = {};
  try {
    payloadValidation = await getWorksSchema.validate(req.body, { abortEarly: false });
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
  validateUploadPayload,
  validateGetWorksPayload
}