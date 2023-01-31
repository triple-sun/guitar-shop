import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Service } from '../enums/utils.enum';
import { IUser } from '../interfaces/user.interface';
import { Property } from '../enums/property.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(`${Service.JWT}.secret`),
    });
  }

  async validate({email, id, name}:  Pick<IUser, Property.Id | Property.Email | Property.Name>) {
    return { email, id, name};
  }
}
