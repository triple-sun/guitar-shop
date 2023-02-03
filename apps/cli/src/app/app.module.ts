import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { cliConfig } from '../config/cli.config';
import { CliCommand } from './generate/cli.command';

@Module({
  imports: [ConfigModule.forRoot(cliConfig)],
  controllers: [],
  providers: [
    CliCommand
  ],
})
export class AppModule {}
