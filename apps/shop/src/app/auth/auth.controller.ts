import { Body, ConflictException, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUserDTO } from '../user/dto/login-user.dto';
import { ApiAuth, Entity, Prefix, User } from '@guitar-shop/core';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { VerifyUserRDO } from '../user/dto/payload-user.dto';
import { EmailAlreadyExistsGuard } from './guards/email-already-exists.guard';
import { UserLoginGuard } from './guards/user-verify.guard';

@ApiTags(Prefix.Auth)
@Controller(Prefix.Auth)
export class AuthController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  @ApiBody({type: CreateUserDto})
  @UseGuards(EmailAlreadyExistsGuard)
  async registerUser(
    @Body() dto: CreateUserDto
  ) {
    try {
      return await this.userService.create(dto);
    } catch(err) {
      throw new ConflictException(err)
    }
  }

  @Get()
  @ApiAuth(Entity.User)
  async verifyUser(
    @User() user: VerifyUserRDO
  ) {
    return user
  }

  @Post('login')
  @UseGuards(UserLoginGuard)
  @ApiBody({type: LoginUserDTO})
  async loginUser(
    @Body() dto: LoginUserDTO
  ) {
    const user = await this.userService.verifyUser(dto)

    return await this.userService.loginUser(user.toObject())
  }
}
