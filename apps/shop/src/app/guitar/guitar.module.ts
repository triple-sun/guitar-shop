import { Module } from '@nestjs/common';
import { GuitarService } from './guitar.service';
import { GuitarController } from './guitar.controller';

@Module({
  controllers: [GuitarController],
  providers: [GuitarService],
})
export class GuitarModule {}
