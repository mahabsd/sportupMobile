import { User } from 'src/app/shared/Model/User';
import { Comment } from 'src/app/shared/Model/Comment';
import { ImageModel } from 'src/app/shared/Model/ImageModel';
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
  photo: File;
  images: ImageModel[];
}
