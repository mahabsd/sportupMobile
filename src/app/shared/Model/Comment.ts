import { Post } from './Post';
import { User } from "./User";

export class Comment {
  id: number;
  content: string;
  commentator: string;
  user: User  ;
  post: Post;
}
