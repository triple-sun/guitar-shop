import { IUser, MailConfig } from '@guitar-shop/core';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrderFullRDO } from '../order/rdo/order-full.rdo';

@Injectable()
export class NotifyService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService
  ) {}

  public async notifyNewOrder({ totalPrice, itemCount, orderItems}: OrderFullRDO) {
    const items = orderItems.map((item) => `${item.item.model}: ${item.count} шт. Цена: ${item.totalPrice}`)

    await this.mailerService.sendMail({
      to: this.configService.get<string>('admin.email'),
      subject: MailConfig.NewOrderSubject,
      template: MailConfig.NewOrderTemplate,
      context: {
        totalPrice, itemCount, items
      }
    })
  }

  public async notifyNewUser({email, name, password}: IUser) {
    await this.mailerService.sendMail({
      to: email,
      subject: MailConfig.NewUserSubject,
      template: MailConfig.NewUserTemplate,
      context: {
        name,
        email,
        password,
        link: this.configService.get<string>('mailer.login')
      }
    })
  }
}
