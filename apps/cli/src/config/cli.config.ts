import { appConfig, cliOptions, EnvFilePath } from "@guitar-shop/core";
import envSchema from "./env/env.schema";
import envValidation from "./env/env.validation";

export const cliConfig = {
  ...appConfig,
  envFilePath: EnvFilePath.Shop,
  load: [cliOptions],
  validate: envValidation,
  validationSchema: envSchema,
}
