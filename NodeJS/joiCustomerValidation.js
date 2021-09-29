const Joi = require('joi');

const customerSchema = Joi.object({
    customerName : Joi.string().required,
    city : Joi.string().required,
    email : Joi.string().required,
    mobile : Joi.string().required
})

module.exports={customerSchema:customerSchema};
