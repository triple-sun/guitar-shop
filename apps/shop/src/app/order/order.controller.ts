import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { OrderItemsExistGuard } from './guards/order-guitars-exist.guard';
import { JwtAuthGuard, Prefix, User } from '@guitar-shop/core';
import { UserAuthDto } from '../user/dto/user-auth.dto';

@Controller(Prefix.Order)
@ApiTags(Prefix.Order)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiBody({type: CreateOrderDto})
  @ApiBearerAuth()
  @UseGuards(OrderItemsExistGuard)
  @UseGuards(JwtAuthGuard)
  create(
    @Body() dto: CreateOrderDto,
    @User() {userId}: UserAuthDto
  ) {
    return this.orderService.create(dto, userId);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') orderId: number) {
    return this.orderService.findOne(orderId);
  }

  @Delete(':id')
  remove(@Param('id') orderId: number) {
    return this.orderService.remove(orderId);
  }
}
