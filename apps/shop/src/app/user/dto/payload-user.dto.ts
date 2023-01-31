import { Property } from "@guitar-shop/core";
import { IntersectionType, PickType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";
import { UserIdDTO } from "./user-id.dto";

const { Email, Name } = Property

export class VerifyUserRDO extends IntersectionType(
  PickType(CreateUserDto, [Name, Email] as const),
  UserIdDTO
) {}
