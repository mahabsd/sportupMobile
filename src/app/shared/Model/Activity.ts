import { User } from './User';
export class Activity {
  _id: string;
  activity: string;
  notes: string;
  lieu: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  createdby: User;
}
