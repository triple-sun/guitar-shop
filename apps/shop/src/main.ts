/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { getAppRunningString, ShopAPI } from '@guitar-shop/core';
import { Prefix } from '@guitar-shop/shared-types';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(Prefix.Global);
  app.useGlobalPipes( new ValidationPipe({
    transform: true, validateCustomDecorators: true, skipMissingProperties: true,
    transformOptions: { enableImplicitConversion: true, exposeDefaultValues: true }
  }))

  SwaggerModule.setup(Prefix.Spec, app, SwaggerModule.createDocument(app, ShopAPI.Config))

  await app.listen(ShopAPI.Port);

  Logger.log(getAppRunningString(ShopAPI.Name, ShopAPI.Port))
}

bootstrap();
