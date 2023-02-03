import { APIEnvConfig, CliEnvConfig, validateEnv } from '@guitar-shop/core';
import { IntersectionType } from '@nestjs/swagger';

class EnvConfig extends IntersectionType(
  APIEnvConfig,
  CliEnvConfig
) {}

export default validateEnv(EnvConfig)
