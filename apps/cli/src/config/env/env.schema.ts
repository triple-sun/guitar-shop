import Joi from 'joi';
import { apiEnvSchema, cliEnvSchema } from '@guitar-shop/core';

export default Joi.object({
  ...apiEnvSchema,
  ...cliEnvSchema
})
