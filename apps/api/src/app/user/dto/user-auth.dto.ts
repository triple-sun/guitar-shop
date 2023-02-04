import { PartialType } from '@nestjs/swagger';
import { UserIdDto } from './user-id.dto';

export class UserAuthDto extends PartialType(UserIdDto) {}
