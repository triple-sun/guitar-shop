import { APIEnvConfig, JWTEnvConfig, validateEnv } from '@guitar-shop/core';
import { IntersectionType } from '@nestjs/swagger';

class EnvConfig extends IntersectionType(
  APIEnvConfig, JWTEnvConfig
) {}

export default validateEnv(EnvConfig)
