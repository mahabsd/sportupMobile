import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../Shared/Service/comment.service';
import { Comment } from '../../../Shared/Model/Comment';
import { Post } from 'src/app/Shared/Model/Post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ModalController } from '@ionic/angular';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  @Input() post: Post;
  @Input() comments: any = [];
  apiImgUser = `${environment.apiImg}User/`;
  comment: Comment = new Comment();
  commentForm: FormGroup;
  apiImg: any;
  notif: any = { reciever: '', userOwner: '', text: '', postId: '' };
  iduser;
  idprofilePassed;
  user$: any;
  constructor(
    private commentService: CommentService,
    private modalController: ModalController,
    private notificationsService: NotificationsService,
    private userService: UserService,
    private socket: Socket,
    ) {
    this.apiImg = `${environment.apiImg}users/`;
  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      contentControl: new FormControl('', Validators.required)
    });
  }
  sendComment(post) {
    this.comments = [];
    // eslint-disable-next-line no-underscore-dangle

     this.commentService.addComment(this.comment, post._id).subscribe(res => {
      this.comment = new Comment();
      this.getCommentByPost();
    });
    this.userService.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      this.notif.reciever = post.user._id;
      this.notif.userOwner = this.user$._id;
      this.notif.text = "à commenté votre status";
      this.notif.postId = post._id
      this.socket.connect();
      this.socket.emit('notifications', { msg: 'hey' });
      this.socket.fromEvent('notificationso').subscribe( (res) => {
      this.createNotif(this.notif);
      });
    });
  }
  async dismissModal() {
    await this.modalController.dismiss();
  }
  getCommentByPost() {
    // eslint-disable-next-line no-underscore-dangle
    this.commentService.getCommentByService(this.post._id).subscribe(arg => {
      this.comments = arg;
    });

  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  createNotif(notif: any) {
    this.notificationsService.postNotification(notif).subscribe();
  }
}
