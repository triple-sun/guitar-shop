export interface IUser {
  id?: number;
  name: string;
  email: string
  isAdmin: boolean
  password?: string;
  passwordHash?: string;
}
