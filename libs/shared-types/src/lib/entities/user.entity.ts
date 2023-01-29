import { genSalt, hash, compare } from 'bcrypt';
import { IUser } from "../user.interface";

export class UserEntity implements IUser {
  public id: number;
  public email: string;
  public name: string;
  public isAdmin: boolean;
  public passwordHash: string;

  constructor(user: IUser) {
    this.fillEntity(user);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(10);
    this.passwordHash = await hash(password, salt);

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.isAdmin = user.isAdmin;
    this.passwordHash = user.passwordHash
  }
}
