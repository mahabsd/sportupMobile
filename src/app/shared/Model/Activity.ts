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
  type: string;
  startHour: string;
  endHour: string;
  confidentiality: string;
  description: string;
  langitude: string;
  lattitude: string;
}
