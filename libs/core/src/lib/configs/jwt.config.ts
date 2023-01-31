import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { JwtModuleOptions, JwtModuleAsyncOptions } from '@nestjs/jwt';
import { Service } from '../enums/utils.enum';

export const jwtOptions = registerAs(Service.JWT, () => ({
  secret: process.env.JWT_SECRET,
}));

export const getJWTConfig = (): JwtModuleAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<JwtModuleOptions> => ({
    secret: configService.get<string>(`${Service.JWT}.secret`),
    signOptions: { expiresIn: '6000s', algorithm: 'HS256' }
  })
}
)