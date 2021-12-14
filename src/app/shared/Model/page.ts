import { User } from './User';
export class Page {
  _id: string;
  createdAt: Date;
  updateAt: Date;
  createdBy: User;
  name: string;
  langitude: string;
  lattitude: string;
  category: string;
  description: string;
}
