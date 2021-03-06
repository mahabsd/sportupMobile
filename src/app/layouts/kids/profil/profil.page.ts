/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, ModalController } from '@ionic/angular';
import { PostKidsService } from 'src/app/Shared/kids/Service/postKids.service';
import { UserService } from '../../../Shared/Service/user.service';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { Popovercomponent2Page } from './popovercomponent2/popovercomponent2.page';

import { User } from 'src/app/Shared/Model/User';
import { ActivatedRoute } from '@angular/router';
import { PopOverSuivrePageComponent } from '../../profil/pop-over-suivre-page/pop-over-suivre-page.component';
import { EventService } from 'src/app/shared/Service/event.service';
import { PostService } from 'src/app/Shared/Service/post.service';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { forkJoin } from 'rxjs';
import { ImageService } from 'src/app/shared/Service/image.service';
import { environment } from 'src/environments/environment';
import { ImageProfileComponent } from '../../coachprofile/image-profile/image-profile.component';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { PostDisplayComponent } from '../../post-display/post-display.component';
import { DisplayImgProfilKidsComponent } from './display-img-profil-kids/display-img-profil-kids.component';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  images: any = [];
  apiImg = `${environment.apiImg}Post/`;
  apiImgUser = `${environment.apiImg}User/`;
  mediafiles: any = [];
  newMediaFiles: any= [];
  secondNewMediaFiles: any= [];
  thirdNewMediaFiles: any= [];
  tempMedia: any= [];
  posts: any = [];
  update = false;
  gendre;
  selected;
  user: User = new User();
  user_id;
  date;
  title: any;
  checkSelf=false;
  idProfilePassed;
  profileClickedName;
  isScrollTop: boolean;
  page = 1;
  selectedDate;
  postsOwnerId: any;
  posts$: any;
  postsimg$: any;
  postsimg: any = [];
  postsStatut: any = [];
  postsStatut$: any ;
  ResWithOneimg: any= [];
  ResWithTwoimg: any= [];
  ResWithThreeimg: any= [];
  constructor(private userservice: UserService,
     private postKidsService: PostKidsService,
    public popoverController: PopoverController,
     public userService: UserService,
      private activatedRoute: ActivatedRoute,
      private savepostsService: FavorisService,
      private eventService: EventService,
      private postService: PostService,
      private imageService:ImageService,
      private videoPlayer: VideoPlayer,
      private modalController: ModalController,

      ) { }

  ngOnInit() {
    this.selected = 'photo';
    this.getMe();
    this.title = "Profile";
    this.idProfilePassed = this.activatedRoute.snapshot.params.id;
    this.getUserById();
    this.getPosts();
  }

  getUserById() {
    this.userService.getUser(this.idProfilePassed).subscribe(
      async(response) => {
        this.user = await response.data.data;
        this.date=await this.user.datedenaissance.slice(0,10);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  async getMe() {
    this.userservice.getMe().subscribe(async(res) => {
      if(this.idProfilePassed===res.data.data._id){
        this.checkSelf=await true;
      }
    });
  }

  getMyPostsKids() {
    this.userservice.getMe().subscribe(async(res) => {
      this.user_id = await res.data.data._id;
      this.postKidsService.getMyPostsKids(this.user_id).subscribe((res1) => {
        this.posts = res1['data'];
      });
    });

  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopovercomponentPage,
      cssClass: 'popoverProfil-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentPopover2(ev: any) {
    const popover = await this.popoverController.create({
      component: Popovercomponent2Page,
      cssClass: 'popoverProfil-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  segmentChanged(ev: any) {
    this.selected = ev.detail.value;
    if (this.selected === 'propos') {
      this.title = "Modifier profile";
    }
    else {
      this.title = "Profile";

    }
  }

  updateComment() {
    this.update = !this.update;



  }
  optionsFn() {
    console.log(this.gendre);

  }


  async presentPopoverNewMsg(ev: any,idProfilePassed) {
    const popover = await this.popoverController.create({
      component: PopOverSuivrePageComponent,
     // cssClass: 'popoverProfil-custom-class',
      event: ev,
      componentProps: {idpassed: idProfilePassed},

      translucent: true
    });
   // console.log(idProfilePassed)
    popover.style.cssText = '--max-width: 150px;--max-height: 100px;--border-radius:70px; ';
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  userUpdate() {


    this.userService.updateMe(this.user).subscribe(res => {

    });
    this.update = false;
  }

  divIndex(index) {
    if (index%4===0) {
      return "3"
    } else if (index % 3===0) {
      return "2"
    } else if (index % 2===0) {
      return "1"
    }else return "0"
  }


   getimageBypostId(idpost) {
      this.imageService.getImageBypost(idpost).subscribe(async(res) => {
        this.postsimg$ = await res
        this.postsimg$.map(post=> {
          this.postsimg.push(post);
          this.postsimg.sort(function (a, b) {
            return a.createdAt - b.createdAt
          });
        });

      this.ResWithOneimg= this.postsimg.slice(0,1);
      this.ResWithTwoimg= this.postsimg.slice(1,5);
      this.ResWithThreeimg= this.postsimg.slice(5, this.postsimg.length);
      });
  }


  getPostStatusOnly(idpost) {
      this.imageService.getPostStatusOnly(idpost).subscribe((res) => {

        this.postsStatut=  this.postsStatut.concat(res);

      });
  }


  getPosts(event?) {
    this.postsOwnerId = this.postService.postsOwnerId;
    this.postService.getAllPostsById(this.page, this.idProfilePassed).subscribe((response) => {

     this.posts = this.posts.concat(response['data'].data);
     this.posts.forEach(post => {
      this.getimageBypostId(post.id);
      this.getPostStatusOnly(post.id);

      this.posts.push(post);
       });
       this.savepostsService.getAllSharedPosts(this.page,  this.idProfilePassed ).subscribe((res: any) => {

        this.posts$ = res.data.data;
        //console.log(res.data.data);

        this.posts$.map(post=> {
          this.getimageBypostId(post.post.id);
          this.getPostStatusOnly(post.post.id);
          this.posts.push(post.post);
          console.log(this.posts);
       });


      });
       if (event) {
        event.target.complete();
      }
    }, error => {
      console.error(error);
    });
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }

  loadMore(event) {
    this.page++;
    this.getPosts(event);
  }

  getAllsharedPosts() {
    this.savepostsService.getAllSharedPosts(this.page,  this.idProfilePassed ).subscribe((res: any) => {
      this.posts$ = res.data.data;
      console.log(res.data.data);

      this.posts$.map(post=> {
        this.posts.push(post.post);
     });
    });
   }

   getExt(fileName) {
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    //console.log(ext);
    return ext;
  }



  async displayImage(a: any) {

    // eslint-disable-next-line @typescript-eslint/naming-convention
    //console.log(url);
    console.log(this.mediafiles);
    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        image: a,
      },
    });
    return await modal.present();
  }


  async displayContentPhotoTab(files){

    const modal = await this.modalController.create({
      component: DisplayImgProfilKidsComponent,
      cssClass: 'imageModal',
      componentProps: {
        post: files,
      },
    });
    return await modal.present();
  }

  async displayContent(files){

    const modal = await this.modalController.create({
      component: PostDisplayComponent,
      cssClass: 'imageModal',
      componentProps: {
        post: files,
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

}
