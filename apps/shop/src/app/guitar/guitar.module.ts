import { Module } from '@nestjs/common';
import { GuitarService } from './guitar.service';
import { GuitarController } from './guitar.controller';
import { GuitarRepository } from './guitar.repository';

@Module({
  controllers: [GuitarController],
  providers: [GuitarService, GuitarRepository],
})
export class GuitarModule {}
