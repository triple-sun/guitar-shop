import Joi from 'joi';
import {
  apiEnvSchema,
  cliEnvSchema,
  jwtEnvSchema,
  mailerEnvSchema,
  prismaEnvSchema,
} from '@guitar-shop/core';

export default Joi.object({
  ...apiEnvSchema,
  ...jwtEnvSchema,
  ...prismaEnvSchema,
  ...mailerEnvSchema,
  ...cliEnvSchema,
});
