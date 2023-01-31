import { Module } from '@nestjs/common';
import { GuitarService } from './guitar.service';
import { GuitarController } from './guitar.controller';
import { GuitarRepository } from './guitar.repository';
import { AuthModule } from '../auth/auth.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { getFormDataConfig } from '@guitar-shop/core';

@Module({
  imports: [
    AuthModule,
    NestjsFormDataModule.configAsync(getFormDataConfig()),
  ],
  controllers: [
    GuitarController
  ],
  providers: [
    GuitarService,
    GuitarRepository
  ],
  exports: [
    GuitarService,
    GuitarRepository
  ]
})
export class GuitarModule {}
