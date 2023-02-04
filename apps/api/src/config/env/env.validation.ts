import {
  APIEnvConfig,
  JWTEnvConfig,
  MailerEnvConfig,
  PrismaEnvConfig,
  validateEnv,
} from '@guitar-shop/core';
import { IntersectionType } from '@nestjs/swagger';

class EnvConfig extends IntersectionType(
  IntersectionType(APIEnvConfig, MailerEnvConfig),
  IntersectionType(JWTEnvConfig, PrismaEnvConfig)
) {}

export default validateEnv(EnvConfig);
