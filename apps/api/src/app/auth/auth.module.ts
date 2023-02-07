import { getFormDataConfig, getJWTConfig, JwtStrategy } from '@guitar-shop/core';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { NotifyModule } from '../notify/notify.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(getJWTConfig()),
    NestjsFormDataModule.configAsync(getFormDataConfig()),
    UserModule,
    NotifyModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
