import {
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { Prefix, Property } from '@guitar-shop/core';
import { UserExistsGuard } from '../auth/guards/user-exists.guard';

@ApiTags(Prefix.User)
@Controller(Prefix.User)
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get(`/:${Property.Id}`)
  @UseGuards(UserExistsGuard)
  async findUser(
    @Param(Property.Id) id: number
  ) {
    return await this.userService.findOne(id);
  }
}
