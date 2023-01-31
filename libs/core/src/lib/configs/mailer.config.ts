import { MailerAsyncOptions } from "@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface";
import { ConfigService, registerAs } from "@nestjs/config";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

import { join } from "path";
import { Service } from "../enums/utils.enum";

export const mailerOptions = registerAs(Service.Mailer, () => ({
  port: process.env.MAILER_PORT,
  host: process.env.MAILER_HOST,
  user: process.env.MAILER_USER,
  pass: process.env.MAILER_PASS,
  from: process.env.MAILER_FROM
}))

export const getMailerConfig = (): MailerAsyncOptions => ({
  useFactory: async (configService: ConfigService) => {
    return {
      transport: {
        host: configService.get<string>(`${Service.Mailer}.host`),
        port: configService.get<number>(`${Service.Mailer}.port`),
        secure: false,
        auth: {
          user: configService.get<string>(`${Service.Mailer}.user`),
          pass: configService.get<string>(`${Service.Mailer}.pass`)
        }
      },
      defaults: {
        from: `${configService.get<number>(`${Service.Mailer}.from`)}`,
      },
      template: {
        dir: join(__dirname, './assets/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    }},
    inject: [ConfigService]
  })
