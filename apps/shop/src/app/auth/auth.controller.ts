import { Body, ConflictException, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { LoginUserDTO } from '../user/dto/login-user.dto';
import { ApiAuth, Entity, JwtAuthGuard, Path, Prefix, User } from '@guitar-shop/core';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { EmailAlreadyExistsGuard } from './guards/email-already-exists.guard';
import { VerifyUserDto } from '../user/dto/verify-user.dto';
import { UserExistsGuard } from './guards/user-exists.guard';
import { UserIdDto } from '../user/dto/user-id.dto';
import { AuthService } from './auth.service';

@ApiTags(Prefix.Auth)
@Controller(Prefix.Auth)
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post()
  @ApiBody({type: CreateUserDto})
  @UseGuards(EmailAlreadyExistsGuard)
  async registerUser(
    @Body() dto: CreateUserDto
  ) {
    try {
      return await this.authService.register(dto);
    } catch(err) {
      throw new ConflictException(err)
    }
  }

  @Get(':id')
  @UseGuards(UserExistsGuard)
  @ApiParam({name: 'id', type: UserIdDto})
  async findUser(
    @Param('id') userId: number
  ) {
    return await this.authService.findOne(userId);
  }

  @Get(Path.Verify)
  @ApiAuth(Entity.User)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async verifyUser(
    @User() user: VerifyUserDto
  ) {
    return user
  }

  @Post(Path.Login)
  @ApiBody({type: LoginUserDTO})
  async loginUser(
    @Body() dto: LoginUserDTO,
    @Body() { name, userId }: VerifyUserDto
  ) {
    return await this.authService.loginUser(userId, dto.email, name)
  }
}
