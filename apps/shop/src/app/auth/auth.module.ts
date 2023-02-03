import { getJWTConfig, JwtStrategy, Path, Prefix } from '@guitar-shop/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { NotifyModule } from '../notify/notify.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { VerifyUserMiddleware } from './middleware/verify-user.middleware';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(getJWTConfig()),
    UserModule,
    NotifyModule
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyUserMiddleware)
      .forRoutes(`${Prefix.Auth}/${Path.Login}`)
  }
}
