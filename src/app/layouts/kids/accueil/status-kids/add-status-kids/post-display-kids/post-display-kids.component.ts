import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Shared/Service/post.service';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
@Component({
  selector: 'app-post-display-kids',
  templateUrl: './post-display-kids.component.html',
  styleUrls: ['./post-display-kids.component.scss'],
})
export class PostDisplayKidsComponent implements OnInit {
  post;
  comments;
  images;
  mediafiles;
  apiPost = `${environment.apiImg}Post/`;
  shared= false;
  bookmarked=false;
  constructor(private postService: PostService, private modalController: ModalController,    private favorisService: FavorisService,
    ) { }

    get_url_extension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  ngOnInit() {
forkJoin({
      images: this.postService.getPost(this.post._id),
      mediafiles: this.postService.getPost(this.post._id),
      // newMediaFiles: this.mediafiles.splice(0,1),
    }).subscribe(({ images, mediafiles }) => {
      this.images = images.images;
      this.mediafiles = mediafiles.mediafiles;
      let tempMedia = mediafiles.mediafiles;
    });
}
share(post) {
  this.shared = true;
  this.favorisService.addShared(this.post._id).subscribe((res) => {
    this.shared = true;
  });
}

bookmark(post) {
  this.favorisService.addFavoris(this.post._id).subscribe((res) => {
    this.bookmarked = true;
  });
}
unBookmark(post) {
  this.favorisService.addFavoris(this.post._id).subscribe((res) => {
    this.bookmarked = false;
  });
}
}
