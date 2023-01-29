import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GuitarModule } from './guitar/guitar.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [UserModule, AuthModule, ReviewModule, GuitarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
