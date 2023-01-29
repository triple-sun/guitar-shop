import { IUser } from "@guitar-shop/shared-types";

export class CreateUserDto implements IUser {
  public name: string;
  public email: string;
  public isAdmin: boolean;
  public password?: string;
}
