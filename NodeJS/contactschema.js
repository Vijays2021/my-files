const joi = require('joi');

const contactSchema = joi.object({
    contactName : joi.string().required,
    designation : joi.string().required,
    organization : joi.string().required,
    city : joi.string().required,
    email : joi.string().required,
    mobile : joi.string().required
})

module.exports = {
    contactSchema:contactSchema
}