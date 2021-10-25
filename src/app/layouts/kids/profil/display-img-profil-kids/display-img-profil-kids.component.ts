import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Shared/Service/post.service';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';

@Component({
  selector: 'app-display-img-profil-kids',
  templateUrl: './display-img-profil-kids.component.html',
  styleUrls: ['./display-img-profil-kids.component.scss'],
})
export class DisplayImgProfilKidsComponent implements OnInit {
post;
apiImg = `${environment.apiImg}Post/`;
isimage=false;
isvideo=false;

  constructor(private postService: PostService, private modalController: ModalController,    private favorisService: FavorisService,
    ) { }

    get_url_extension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}

  ngOnInit() {
    console.log(this.post)

    if( this.post.split(/[#?]/)[0].split('.').pop().trim().includes('png')|| this.post.split(/[#?]/)[0].split('.').pop().trim().includes('jpeg')){
      this.isimage=true;
    }
    else if( this.post.split(/[#?]/)[0].split('.').pop().trim().includes('mp4')|| this.post.split(/[#?]/)[0].split('.').pop().trim().includes('avi')){
      this.isvideo=true;
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
