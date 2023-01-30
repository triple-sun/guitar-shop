import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GuitarModule } from './guitar/guitar.module';
import { ReviewModule } from './review/review.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { shopConfig } from '../config/shop.config';

@Module({
  imports: [
    ConfigModule.forRoot(shopConfig),
    UserModule,
    AuthModule,
    ReviewModule,
    GuitarModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
