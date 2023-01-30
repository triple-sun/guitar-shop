import { PickType } from '@nestjs/swagger';
import { UserDTO } from './user.dto';

export class UpdateUserDto extends PickType(
  UserDTO, ['password'] as const
) {}
