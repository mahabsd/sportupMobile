import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Follow } from 'src/app/shared/Model/Follow';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { PostService } from 'src/app/Shared/Service/post.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';
import { CoachMenuPopOverComponent } from '../coachprofile/coach-menu-pop-over/coach-menu-pop-over.component';
import { PopOverSuivrePageComponent } from './pop-over-suivre-page/pop-over-suivre-page.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  // activatedroute importer luser selon leur id
  // en utilisant lapi
  apiImg = environment.apiImg + 'User/';

  EtatSuivre = false;
  notif: any = { reciever: '', userOwner: '', text: '' };
  idfollow;
  user$;
  profileClickedName;
  visitedUser;
  myInformation: any = { userLastName: '', userFirstName: '' };
  iduser;
  iduser1;
  idprofilePassed;
  typepage;
  idFollowtoDelete;
  user: any = [];
  posts: any[] = [];
  follower = false;
  userClicked;
  isUser = false;
  isKid = false;
  etatSuivre: any = false;
  public folder: string;
  followingsNumber
  followersNumber
  imagesBasic = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      description: 'Image 1',
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      description: 'Image 2',
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      description: 'Image 3',
    },
  ];
  userRole: any;
  postsNum
  confirmer: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private followerService: FollowerService,
    private modalController: ModalController,
    public router: Router,
    public popoverController: PopoverController,
    private notificationsService: NotificationsService,
    private postService: PostService,
    private savepostsService: FavorisService
  ) {
    this.getUser();
  }

  ngOnInit() {
   // this.confirmer = false;
    this.getUser();
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;
    this.typepage = this.activatedRoute.snapshot.params.typepage;
    this.getUserByid();
    this.getfollowers()
    this.getfollow();

    this.getPosts()
  }

  getfollowers() {
    this.followerService.getFollowers(this.idprofilePassed).subscribe(async res => {
      this.followingsNumber =  res.results;
      this.followersNumber = res.resultsFollowers;
    });
  }

  getPosts() {
    console.log(this.idprofilePassed);
    this.postService.getAllPostsById(1,this.idprofilePassed).subscribe(res => {
      this.postsNum = res.results

      console.log(this.postsNum);
    })
    this.getfollow();
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;
    this.typepage = this.activatedRoute.snapshot.params.typepage;
    this.getUserByid();
    this.checkNotif();
  }

  getfollow() {
    this.userService.getMe().subscribe(
      (response) => {
        this.iduser1 = response.data.data.id;
        this.followerService
          .getFollow(this.idprofilePassed, this.iduser1).subscribe((res) => {
            if (res == null) {
              this.follower = false;
            } else {
              this.follower = true;
              this.idFollowtoDelete = res._id;
              this.EtatSuivre = true;
              // this.router.navigate(["menu/tabs/layouts/coachprofile",this.idprofilePassed,"followed"]);
              if (this.userClicked.role === 'user' || this.userClicked.role === 'pro') {
                this.router.navigate(['menu/tabs/layouts/coachprofile', this.idprofilePassed, 'followed']);
              }
              else if (this.userClicked.role === 'kids') {
                this.router.navigate(['tabs/profilkids/', this.idprofilePassed]);
              }
            }
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getMe() {
    this.userService.getMe().subscribe((res) => {
      this.user$ = res.data.data;
    });
  }

  getUser() {
    this.userService.getMe().subscribe(
      (response) => {
        this.myInformation.userLastName = response.data.data.name;
        this.iduser = response.data.data.id;
        this.userRole = response.data.data.role;
        if (this.userRole === 'user') {
          this.isUser = true;
        } else if (this.userRole === 'Kids') {
          this.isKid = true;
        }
        this.checkNotif();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUserByid() {
    this.userService.getUser(this.idprofilePassed).subscribe(
      (response) => {
        this.visitedUser=response.data.data
        this.profileClickedName = response.data.data.name;
        this.userClicked = response.data.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  async presentPopover(ev: any, idprofilePassed) {
    const popover = await this.popoverController.create({
      component: PopOverSuivrePageComponent,
      // cssClass: 'popoverProfil-custom-class',
      event: ev,
      componentProps: { idpassed: idprofilePassed },

      translucent: true
    });
    popover.style.cssText = '--max-width: 150px;--max-height: 100px;--border-radius:70px; '


    await popover.present();

    const { role } = await popover.onDidDismiss();
  }
  itemSelected(data) {
    console.log(data);
  }
  /* buttonSuivre() {

   this.follow.userFollowed = this.idprofilePassed;
   this.follow.userFollowing = this.iduser;
   this.followerService.createFollow(this.follow).subscribe((res) => {
     if(res['status']==='successs'){
       if( this.userClicked.role==='user'||this.userClicked.role==='pro'){
         this.router.navigate(["menu/tabs/layouts/coachprofile",this.idprofilePassed,"followed"]);
         }
         else if (this.userClicked.role==='kids'){
           this.router.navigate(["tabs/profilkids/",this.idprofilePassed]);
         };
     }
   });
   //this.getfollow();
 }
 */
  buttonBlock() {
    this.followerService
      .deleteFollow(this.idFollowtoDelete)
      .subscribe();
    this.EtatSuivre = false;
    //this.getfollow()
  }
  createNotif() {
    this.notif.reciever = this.idprofilePassed;
    this.notif.userOwner = this.iduser;
    this.notif.text = 'vous a envoyé une invitation';
    this.notificationsService.postNotification(this.notif).subscribe();
    this.etatSuivre = true;
    this.checkNotif();
  }
  checkNotif() {
    this.notificationsService.checkNotification(this.idprofilePassed, this.iduser).subscribe(res => {

      console.log(res.data);

      if (res.data ) {
        this.etatSuivre = true;
      }
    });
  }

}
