const Joi = require("@hapi/joi"); //see Joi documentation here: https://hapi.dev/family/joi/

//user model here (see database designs)
const userSchema = Joi.object({
  id: Joi.string()
    .alphanum()
    .required()
//....
});

module.exports = userSchema;
