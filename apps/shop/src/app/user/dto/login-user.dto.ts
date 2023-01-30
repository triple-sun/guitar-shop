import { PickType } from "@nestjs/swagger";
import { UserDTO } from "./user.dto";

export class LoginUserDTO extends PickType(
  UserDTO, ['email', 'password'] as const
) {}
