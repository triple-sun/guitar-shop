import { Property } from "./enums/property.enum";

export interface IUser {
  [Property.Id]?: number;
  [Property.Name]: string;
  [Property.Email]: string
  [Property.IsAdmin]: boolean
  [Property.Password]?: string;
  [Property.PasswordHash]?: string;
}
