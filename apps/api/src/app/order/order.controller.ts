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
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderItemsExistGuard } from './guards/order-items-exist.guard';
import { Entity, getRemovedSchema, IsAdminGuard, JwtAuthGuard, Prefix, User } from '@guitar-shop/core';
import { UserAuthDto } from '../user/dto/user-auth.dto';
import { OrderExistsGuard } from './guards/order-exists.guard';
import { OrderQueryDto } from './dto/order.query.dto';
import { OrderFullRDO } from './rdo/order-full.rdo';
import { OrderShortRdo } from './rdo/order-short.rdo';
import { OrderIdDto } from './dto/order-id.dto';

@ApiTags(Prefix.Orders)
@Controller(Prefix.Orders)
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: CreateOrderDto })
  @ApiCreatedResponse({ type: OrderFullRDO })
  @UseGuards(OrderItemsExistGuard, JwtAuthGuard)
  async create(@Body() dto: CreateOrderDto, @User() { userId }: UserAuthDto) {
    return await this.orderService.create(dto, userId);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: [OrderShortRdo] })
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  findAll(@Query() query: OrderQueryDto) {
    return this.orderService.findAll(query);
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: OrderFullRDO })
  @UseGuards(OrderExistsGuard, JwtAuthGuard, IsAdminGuard)
  async findOne(@Param('id') { orderId }: OrderIdDto) {
    return await this.orderService.findOne(orderId);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse(getRemovedSchema(Entity.Order))
  @UseGuards(OrderExistsGuard, JwtAuthGuard, IsAdminGuard)
  remove(@Param('id') { orderId }: OrderIdDto) {
    return this.orderService.remove(orderId);
  }
}
