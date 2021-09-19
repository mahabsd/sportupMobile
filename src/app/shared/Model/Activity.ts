import { User } from './User';
export class Activity {
  _id: string;
  title: string;
  desc: string;
  startTime: null;
  endTime: null;
  allDay: true;
  createdby: User;
}
