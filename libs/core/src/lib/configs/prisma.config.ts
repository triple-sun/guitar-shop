import { registerAs } from "@nestjs/config";
import { IntersectionType } from "@nestjs/swagger";
import { validateEnv } from "../utils/common.util";
import { prismaEnvSchema } from "./env-schema.config";
import { APIEnvConfig, PrismaEnvConfig } from "./env.config";

export const prismaOptions = registerAs('prisma', () => ({
  port: process.env.PRISMA_PORT,
  host: process.env.PRISMA_HOST,
  user: process.env.PRISMA_USER,
  pass: process.env.PRISMA_PASS,
  DB: process.env.PRISMA_DB
}))

export const prismaConfig = {
  load: [prismaOptions],
  validate: validateEnv(IntersectionType(APIEnvConfig, PrismaEnvConfig)),
  validationSchema: prismaEnvSchema,
  expandVariables: true
}
