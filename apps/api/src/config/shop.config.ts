import {
  appConfig,
  cliOptions,
  formDataOptions,
  jwtOptions,
  mailerOptions,
  prismaOptions,
} from '@guitar-shop/core';
import envSchema from './env/env.schema';
import envValidation from './env/env.validation';

export const shopConfig = {
  ...appConfig,
  load: [jwtOptions, prismaOptions, formDataOptions, mailerOptions, cliOptions],
  validate: envValidation,
  validationSchema: envSchema,
};
