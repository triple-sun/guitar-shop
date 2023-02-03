import * as Joi from 'joi';
import { PortDefault } from '../enums/utils.enum';

export const apiEnvSchema = {
  API_PORT: Joi
    .number()
    .port()
    .required(),
}

export const mailerEnvSchema = {
  MAILER_PORT: Joi
    .number()
    .port()
    .default(PortDefault.Mailer)
    .required(),
  MAILER_HOST: Joi
    .string()
    .hostname()
    .required(),
  MAILER_USER: Joi
    .string()
    .required(),
  MAILER_PASS: Joi
    .string()
    .required(),
  MAILER_FROM: Joi
    .string()
    .required()
}

export const prismaEnvSchema = {
  PRISMA_DB: Joi
    .string()
    .required(),
  PRISMA_HOST: Joi
    .string()
    .hostname()
    .required(),
  PRISMA_USER: Joi
    .string()
    .required(),
  PRISMA_PASS: Joi
    .string()
    .required(),
  DATABASE_URL: Joi
    .string()
    .required()
}

export const jwtEnvSchema = {
    JWT_SECRET: Joi
    .string()
    .required()
}

export const rmqEnvSchema = {
  RMQ_USER: Joi
    .string()
    .required(),
  RMQ_PASS: Joi
    .string()
    .required(),
  RMQ_HOST: Joi
    .string()
    .hostname()
    .required(),
  RMQ_QUEUE: Joi
    .string()
    .required(),
  RMQ_EXCHANGE: Joi
    .string()
    .required()
}

export const cliEnvSchema = {
  ADMIN_NAME: Joi
    .string()
    .required(),
  ADMIN_PASS: Joi
    .string()
    .required(),
  ADMIN_EMAIL: Joi
    .string()
    .email()
    .required()
}
