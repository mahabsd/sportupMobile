import { User } from 'src/app/shared/Model/User';
import { Comment } from 'src/app/shared/Model/Comment';
export class Post {
  title: string;
  content: string;
  createdAt: string;
  updateAt: string;
  comments: Comment;
  user: User;
  likes: number;
  dislikes: number;
  dislidBy: [];
  likedBy: [];
}
