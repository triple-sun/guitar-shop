import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { getJWTConfig, JwtStrategy } from '@guitar-shop/core';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(getJWTConfig()),
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserRepository,
    UserService,
    JwtStrategy
  ],
  exports: [
    UserRepository,
    JwtModule,
    PassportModule
  ]
})
export class UserModule {}
