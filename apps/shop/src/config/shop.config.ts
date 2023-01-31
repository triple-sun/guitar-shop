import { appConfig, EnvFilePath, jwtOptions, prismaOptions } from "@guitar-shop/core";
import envSchema from "./env/env.schema";
import envValidation from "./env/env.validation";

export const shopConfig = {
  ...appConfig,
  envFilePath: EnvFilePath.Shop,
  load: [jwtOptions, prismaOptions],
  validate: envValidation,
  validationSchema: envSchema,
}
