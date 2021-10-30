/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommentService } from '../../../Shared/Service/comment.service';
import { Comment } from '../../../Shared/Model/Comment';
import { Post } from 'src/app/Shared/Model/Post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-comments-kids',
  templateUrl: './comments-kids.page.html',
  styleUrls: ['./comments-kids.page.scss'],
})
export class CommentsKidsPage implements OnInit {
  @Input() post: Post;
  @Input() comments: any = [];
  @Input() userid: any;
  apiImgUser = `${environment.apiImg}User/`;

title="Comments"

  updateCom = false;
  selectedCom: Comment;
  comment: Comment = new Comment();
  commentForm: FormGroup;
  upcom;
  user$;
  apiImg: any;
  constructor(
    private commentService: CommentService,
    private modalController: ModalController,private userService:UserService) {
    this.apiImg = `${environment.apiImg}users/`;
    console.log(this.apiImg);

  }

  ngOnInit() {
    console.log("userrrr" + this.userid);
  
    
    this.commentForm = new FormGroup({
      contentControl: new FormControl('', Validators.required)

    });
    console.log(this.post);
    console.log(this.comments);
    this.getCommentByPost();

  }

  updateComment(comment) {
    this.updateCom = true;
    this.selectedCom = comment;



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

  sendCommentUpdate() {
    this.updateCom = false;
    this.upcom = (<HTMLInputElement>document.getElementById("contentCom")).value;
    this.selectedCom.content = this.upcom;

    this.commentService.updateComments(this.selectedCom).subscribe(res => {


      console.log(res);
    });

  }
  async dismissModal() {
    await this.modalController.dismiss();
  }
  getCommentByPost() {
    // eslint-disable-next-line no-underscore-dangle
    this.commentService.getCommentByService(this.post._id).subscribe(arg => {
      this.comments = arg;
      console.log(this.comments);

    });

  }

  deleteComment(idcom) {
    this.commentService.deleteComment(idcom).subscribe(arg => {
    });
    this.getCommentByPost();
  }
}
