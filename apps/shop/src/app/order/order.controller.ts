import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { OrderItemsExistGuard } from './guards/order-items-exist.guard';
import { IsAdminGuard, JwtAuthGuard, Prefix, User } from '@guitar-shop/core';
import { UserAuthDto } from '../user/dto/user-auth.dto';
import { OrderExistsGuard } from './guards/order-exists.guard';
import { OrderQueryDto } from './dto/order.query.dto';

@Controller(Prefix.Order)
@ApiTags(Prefix.Order)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiBearerAuth()
  @ApiBody({type: CreateOrderDto})
  @UseGuards(OrderItemsExistGuard, JwtAuthGuard)
  async create(
    @Body() dto: CreateOrderDto,
    @User() {userId}: UserAuthDto
  ) {
    return await this.orderService.create(dto, userId);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  findAll(
    @Query() query: OrderQueryDto
  ) {
    return this.orderService.findAll(query)
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(OrderExistsGuard, JwtAuthGuard, IsAdminGuard)
  async findOne(
    @Param('id') orderId: number
  ) {
    return await this.orderService.findOne(orderId)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(OrderExistsGuard, JwtAuthGuard, IsAdminGuard)
  async remove(
    @Param('id') orderId: number
  ) {
    await this.orderService.remove(orderId);

    return `Order with id ${orderId} was successfully removed`
  }
}
