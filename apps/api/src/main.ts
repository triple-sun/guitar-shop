/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { getAppRunningMessage, Prefix, ShopAPI } from '@guitar-shop/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix(Prefix.Global);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validateCustomDecorators: true,
      skipMissingProperties: true,
      transformOptions: {
        enableImplicitConversion: true,
        exposeDefaultValues: true,
      },
    })
  );

  SwaggerModule.setup(
    Prefix.Spec,
    app,
    SwaggerModule.createDocument(app, ShopAPI.Config)
  );

  await app.listen(ShopAPI.Port);

  Logger.log(getAppRunningMessage(ShopAPI.Port));
}

bootstrap();
