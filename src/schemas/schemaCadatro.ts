import Joi from 'joi';

export const  cadastroSchema = Joi.object({
    email: Joi.string().email().required(),
    senha:Joi.string().required(),
    nome:Joi.string().required()
  });
  