import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Prefix } from '@guitar-shop/shared-types';
import { LoginUserDTO } from '../user/dto/login-user.dto';

@ApiTags(Prefix.Auth)
@Controller(Prefix.Auth)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post()
  async login(dto: LoginUserDTO) {
    const user = await this.authService.verifyUser(dto)

    if (user) {
      return await this.authService.loginUser(user.toObject())
    }
  }
}
