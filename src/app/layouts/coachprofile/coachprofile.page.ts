import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { ShowImagePage } from 'src/app/component/modal/show-image/show-image.page';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';

import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ParametresComponent } from 'src/app/component/parametres/parametres.component';
import { ImageProfileComponent } from './image-profile/image-profile.component';



@Component({
  selector: 'app-coachprofile',
  templateUrl: './coachprofile.page.html',
  styleUrls: ['./coachprofile.page.scss'],
})
export class CoachprofilePage implements OnInit {
  sliderOpts = {
    zoom: false,
    slidesPreview: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };

  user$: any = [];
  posts$: any = [];
  images: any = [];
  mediafiles: any = [];
  newMediaFiles: any= [];
  secondNewMediaFiles: any= [];
  thirdNewMediaFiles: any= [];
  selected
  profileName;
  idprofilePassed;
  iduser1;
  follower = false;
  loading: any;

  // eslint-disable-next-line max-len
  coachInfo = { backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg' };
  apiImg = environment.apiImg + 'User/';
  isScrollTop: boolean;
  pub=false;
  type;
  constructor(        private popoverCtrl: PopoverController,    private loadingController: LoadingController,

   private videoPlayer: VideoPlayer,
   private userService: UserService, private activatedRoute: ActivatedRoute,private savepostsService: FavorisService,  private followerService: FollowerService,private modalController: ModalController) { }

  ngOnInit() {
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;
    this.type = this.activatedRoute.snapshot.params.type;

   // this.getMe();
    this.getUserByid();
    this.getAllsaveposts()
    this.getfollow()
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  getMe() {
    this.userService.getMe().subscribe(async res => {
      console.log(res.data.data);
      this.user$ = res.data.data;
    });


  }
  getUserByid() {
    this.userService.getUser(this.idprofilePassed).subscribe(
      (response) => {
        console.log('user clicked' + response.data.data.name);
        this.profileName = response.data.data.name;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  publicationsClick(){
    this.pub=true;
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selected = ev.detail.value;

  }

  
  getAllsaveposts() {
    this.savepostsService.getSavedPosts(this.idprofilePassed,'type').subscribe(res => {
      console.log(res['data']['data']);
     this.posts$ = res['data']['data']
    });

  }


  
  getfollow() {
    this.userService.getMe().subscribe(
      (response) => {
        this.iduser1 = response.data.data.id;
        this.followerService
          .getFollow(this.idprofilePassed, this.iduser1)
          .subscribe((res) => {
            if (res == null) {
              console.log('nope');
              this.follower = false;
            } else {
              this.follower = true;

              console.log(res);
          

            }
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }


  
  getExt(fileName) {
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    //console.log(ext);
    return ext;
  }

  async displayImage(file: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    //console.log(url);

    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        image: file,
      },
    });
    return await modal.present();
  }

  async displayVideo(file: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // console.log(url);

    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        video: file,
      },
    });
    return await modal.present();
  }
  playvid(url) {
    this.videoPlayer.play(url).then(() => {
      //console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  
  
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ParametresComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
       // post: this.post,
      },
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    location.reload();
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000,
      spinner: 'bubbles',
    });
    await this.loading.present();
  }
}

