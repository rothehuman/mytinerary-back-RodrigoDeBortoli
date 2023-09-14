import Joi from "joi";

export const createUserSchema = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .message({
            'any.required': 'email required'
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(10)
        .alphanum(),
    name: Joi.string()
        .min(2)
        .max(20),
        // .regex(Solo caracteres alfanumericos)
    photo: Joi.string()
        .required()
        .uri()
})