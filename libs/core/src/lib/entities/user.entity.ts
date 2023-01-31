import { genSalt, hash, compare } from 'bcrypt';
import { Property } from '../enums/property.enum';
import { IEntity } from '../interfaces/entity.interface';
import { IUser } from '../interfaces/user.interface';

const {Id, Email, Name, IsAdmin, Password, PasswordHash} = Property

export class UserEntity implements IEntity<IUser> {
  public [Id]: number;
  public [Email]: string;
  public [Name]: string;
  public [IsAdmin]: boolean;
  public [Password]?: string;
  public [PasswordHash]: string;

  constructor(user: IUser) {
    this.fillEntity(user);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(10);
    this[PasswordHash] = await hash(password, salt);

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    console.log({password}, this[PasswordHash])
    return compare(password, this[PasswordHash]);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(user: IUser) {
    this[Id] = user[Id];
    this[Name] = user[Name];
    this[Email] = user[Email];
    this[IsAdmin] = user[IsAdmin];
    this[PasswordHash] = user[PasswordHash]
  }
}
