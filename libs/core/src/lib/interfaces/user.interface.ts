import { Property } from "../enums/property.enum";

const { Id, Email, Name, IsAdmin, Password, PasswordHash } = Property

export interface IUser {
  [Id]?: number;
  [Name]: string;
  [Email]: string
  [IsAdmin]?: boolean
  [Password]?: string;
  [PasswordHash]?: string;
}
