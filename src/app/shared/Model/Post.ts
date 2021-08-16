import { User } from 'src/app/shared/Model/User';
import { Comment } from 'src/app/shared/Model/Comment';
export class Post {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updateAt: string;
  comments: [];
  user: User;
  likes: number;
  dislikes: number;
  dislikedBy: [];
  likedBy: [];
  iconLike: string;
}
