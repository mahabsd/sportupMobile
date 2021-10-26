import { User } from './User';
export class Access {
  _id: string;
  user: User;
  device: string;
  ip: string;
}
