import { Post } from "./Post";
import { User } from "./User";

export class Favoris {
  id: number;
  post: Post;
  user: User;
  booked: boolean;
}
