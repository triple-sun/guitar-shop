import { Module } from '@nestjs/common';
import { CliCommand } from './generate/generate.command';

@Module({
  imports: [],
  controllers: [],
  providers: [CliCommand],
})
export class AppModule {}
