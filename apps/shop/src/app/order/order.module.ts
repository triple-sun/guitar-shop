import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { GuitarModule } from '../guitar/guitar.module';
import { OrderRepository } from './order.repository';
import { UserModule } from '../user/user.module';
import { NotifyModule } from '../notify/notify.module';

@Module({
  imports: [
    GuitarModule,
    UserModule,
    NotifyModule
  ],
  controllers: [
    OrderController
  ],
  providers: [
    OrderService,
    OrderRepository
  ],
})
export class OrderModule {}
