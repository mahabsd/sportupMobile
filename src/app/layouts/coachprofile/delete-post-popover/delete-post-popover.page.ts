import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { PostService } from 'src/app/Shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';

@Component({
  selector: 'app-delete-post-popover',
  templateUrl: './delete-post-popover.page.html',
  styleUrls: ['./delete-post-popover.page.scss'],
})
export class DeletePostPopoverPage implements OnInit {

  @Input() event: string;
  post: any;
  constructor(private postService: PostService, private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.post = this.navParams.data.paramID;
  }
  delete(post) {
    this.postService.deletePost(post).subscribe();
  }
  update() {

  }
}
