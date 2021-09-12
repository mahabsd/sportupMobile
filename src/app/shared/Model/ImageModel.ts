import { Post } from './Post';
import { User } from './User';
export class ImageModel {
  _id: string;
  imageName: string;
  createdAt: Date;
  url: string;
  user: User;
  post: Post;
}
