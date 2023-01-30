import { PickType } from "@nestjs/swagger";
import { UserDTO } from "./user.dto";

export class CreateUserDto extends PickType(
  UserDTO, ['email', 'name', 'password', 'isAdmin'] as const
) {}
