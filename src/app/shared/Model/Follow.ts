import { User } from 'src/app/Shared/Model/User';
import { Comment } from 'src/app/Shared/Model/Comment';
import { ImageModel } from 'src/app/Shared/Model/ImageModel';
export class Follow {
  _id: string;
  userFollowed: string;
  userFollowing: string;
}

