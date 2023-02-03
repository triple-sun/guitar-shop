import { ConfigService, registerAs } from "@nestjs/config";
import { IUser } from "../interfaces/user.interface";

export const cliOptions = registerAs('admin', () => ({
  name: process.env.ADMIN_NAME,
  pass: process.env.ADMIN_PASS,
  email: process.env.ADMIN_EMAIL
}));

export const getAdminConfig = (configService: ConfigService): IUser => ({
  name: configService.get<string>('admin.name'),
  password: configService.get<string>('admin.pass'),
  email: configService.get<string>('admin.email'),
  isAdmin: true
})
