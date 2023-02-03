import { MailerAsyncOptions } from "@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface";
import { ConfigService, registerAs } from "@nestjs/config";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

import { join } from "path";

export const mailerOptions = registerAs('mailer', () => ({
  port: process.env.MAILER_PORT,
  host: process.env.MAILER_HOST,
  user: process.env.MAILER_USER,
  pass: process.env.MAILER_PASS,
  from: process.env.MAILER_FROM,
  login: process.env.LOGIN_LINK
}))

export const getMailerConfig = (): MailerAsyncOptions => ({
  useFactory: async (configService: ConfigService) => {
    return {
      transport: {
        host: configService.get<string>('mailer.host'),
        port: configService.get<number>('mailer.port'),
        secure: false,
        auth: {
          user: configService.get<string>('mailer.user'),
          pass: configService.get<string>('mailer.pass')
        }
      },
      defaults: {
        from: `${configService.get<number>('mailer.from')}`,
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
