import { getMailerConfig } from '@guitar-shop/core';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { NotifyService } from './notify.service';

@Module({
  imports: [MailerModule.forRootAsync(getMailerConfig())],
  providers: [NotifyService],
  exports: [NotifyService],
})
export class NotifyModule {}
