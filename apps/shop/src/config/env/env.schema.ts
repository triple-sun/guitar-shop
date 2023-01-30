import Joi from 'joi';
import { apiEnvSchema, jwtEnvSchema } from '@guitar-shop/core';

export default Joi.object({
  ...apiEnvSchema,
  ...jwtEnvSchema,
})
