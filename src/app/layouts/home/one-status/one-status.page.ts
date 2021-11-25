import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CommentService } from '../../../Shared/Service/comment.service';
import { environment } from '../../../../environments/environment';
import { PostService } from '../../../Shared/Service/post.service';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Shared/Service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-status',
  templateUrl: './one-status.page.html',
  styleUrls: ['./one-status.page.scss'],
})
export class OneStatusPage implements OnInit {
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
  commentForm: FormGroup;
  comment: Comment = new Comment();
  posts: any = [];
  post: any = [];
  isUserConnected;
  user$: any;
  comments: any = [];
  user: any = [];
  mediafiles: any = [];
  showComment = false;

  id= this.activatedRoute.snapshot.params.id;
  constructor(
    private postService: PostService,
    private userservice: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMe();
    this.getPost();

  }
  showComments() {
    this.showComment = true;
  }
  hideComments() {
    this.showComment = false;
  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.isUserConnected = res.data.data._id;
      this.user$ = res.data.data;
    });
  }
  getPost() {
    this.postService.getPost(this.id).subscribe(async res => {
      this.post = await res;
      // this.comments = res.comments
      this.mediafiles = res.mediafiles;
      this.user = res.user;
    });
  }
}
