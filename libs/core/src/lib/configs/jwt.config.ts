import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { JwtModuleOptions, JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtOptions = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
}));

export const getJWTConfig = (): JwtModuleAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<JwtModuleOptions> => ({
    secret: configService.get<string>('jwt.secret'),
    signOptions: { expiresIn: '6000s', algorithm: 'HS256' }
  })
})
