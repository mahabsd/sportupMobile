import { User } from '../../../../../sportUpWeb/src/app/component/menu/menu.component';
import { Post } from '../../../../../sportUpWeb/src/app/Shared/Model/post';
export class Comment {
  id: number;
  content: string;
  commentator: string;
  user: User;
  post: Post;
}
