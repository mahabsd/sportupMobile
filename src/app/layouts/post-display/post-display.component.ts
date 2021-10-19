import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Shared/Service/post.service';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {
  post;
  comments;
  images;
  mediafiles;
  apiPost = `${environment.apiImg}Post/`;
 
  constructor(private postService: PostService, private modalController: ModalController) { }

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

}