import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDTO } from '../user/dto/login-user.dto';
import {
  ApiAuth,
  Entity,
  JwtAuthGuard,
  Path,
  Prefix,
  User,
} from '@guitar-shop/core';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { EmailAlreadyExistsGuard } from './guards/email-already-exists.guard';
import { AuthService } from './auth.service';
import { UserRDO } from './rdo/user.rdo.dto';
import { UserAuthDto } from '../user/dto/user-auth.dto';
import { UserExistsGuard } from './guards/user-exists.guard';
import { UserLoginGuard } from './guards/login.guard';

@ApiTags(Prefix.Auth)
@Controller(Prefix.Auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  @UseGuards(EmailAlreadyExistsGuard)
  @ApiCreatedResponse({ type: UserRDO })
  registerUser(@Body() dto: CreateUserDto) {
   return this.authService.registerUser(dto)
  }

  @Get(Path.Verify)
  @ApiAuth(Entity.User)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  verifyUser(
    @User() {userId}: UserAuthDto
  ) {
    return this.authService.findUser(userId);
  }

  @Post(Path.Login)
  @UseGuards(UserExistsGuard, UserLoginGuard)
  @ApiBody({ type: LoginUserDTO })
  loginUser(
    @Body() dto: LoginUserDTO
  ) {
    return this.authService.loginUser(dto);
  }
}
