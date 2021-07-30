import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../shared/Service/comment.service';
import { Comment } from '../../../shared/Model/Comment';
import { Post } from 'src/app/Shared/Model/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  @Input() post: Post;
  @Input() comments: any = [];
  comment: Comment = new Comment();
  commentForm: FormGroup;
  apiImg: any;
  constructor(
    private commentService: CommentService,
    private modalController: ModalController) {
    this.apiImg = `${environment.apiImg}users/`;
    console.log(this.apiImg);

  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      contentControl: new FormControl('', Validators.required)
    });
  }
  sendComment(post) {
    console.log(this.comment);
    this.comments = [];
    // eslint-disable-next-line no-underscore-dangle
    return this.commentService.addComment(this.comment, post._id).subscribe(res => {
      this.comment = new Comment();
      this.getCommentByPost();
      console.log(res);
    });
  }
  async dismissModal() {
    await this.modalController.dismiss();
  }
  getCommentByPost() {
    // eslint-disable-next-line no-underscore-dangle
    this.commentService.getCommentByService(this.post._id).subscribe(arg => {
      console.log(arg);
      this.comments = arg;
    });

  }
}
