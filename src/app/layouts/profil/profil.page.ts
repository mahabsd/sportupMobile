import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Follow } from 'src/app/shared/Model/Follow';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { UserService } from 'src/app/Shared/Service/user.service';
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
  EtatSuivre = false;
  notif: any = { receiver: '', userOwner: '', text: '' };
  idfollow;
  user$
  profileClickedName;
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

  public folder: string;
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private followerService: FollowerService,
    private modalController: ModalController,
    public router: Router,
    public popoverController: PopoverController,
    private notificationsService: NotificationsService
  ) {
    this.getUser();
    this.getfollow();
  }

  ngOnInit() {
    this.getfollow();

    this.idprofilePassed = this.activatedRoute.snapshot.params.id;
    this.typepage = this.activatedRoute.snapshot.params.typepage;
    this.getUserByid();
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

              this.idFollowtoDelete = res._id;
              console.log(res);
              this.EtatSuivre = true;

              // this.router.navigate(["menu/tabs/layouts/coachprofile",this.idprofilePassed,"followed"]);

              if (this.userClicked.role === 'user' || this.userClicked.role === 'pro') {
                this.router.navigate(["menu/tabs/layouts/coachprofile", this.idprofilePassed, "followed"]);
              }
              else if (this.userClicked.role === 'kids') {
                this.router.navigate(["tabs/profilkids/", this.idprofilePassed]);

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
      console.log(this.user$);
    });
  }

  getUser() {
    this.userService.getMe().subscribe(
      (response) => {
        console.log(response);
        this.myInformation.userLastName = response.data.data.name;
        this.iduser = response.data.data.id;
        this.userRole = response.data.data.role;
        if (this.userRole === 'user') {
          this.isUser = true;
        } else if (this.userRole === 'Kids') {
          this.isKid = true;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUserByid() {
    this.userService.getUser(this.idprofilePassed).subscribe(
      (response) => {
        console.log('user clicked' + response.data.data.name);
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
    // console.log(idprofilePassed)
    popover.style.cssText = '--max-width: 150px;--max-height: 100px;--border-radius:70px; '


    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  itemSelected(data) {
    console.log(data);
  }
  buttonSuivre() {
    this.notif.reciever = this.idprofilePassed;
    this.notif.userOwner = this.iduser;
    this.notif.text = "vous à envoyer une invitation";
    this.createNotif(this.notif);
  }
  /* buttonSuivre() {

   this.follow.userFollowed = this.idprofilePassed;
   this.follow.userFollowing = this.iduser;
   this.followerService.createFollow(this.follow).subscribe((res) => {
     if(res['status']==='successs'){
       console.log(this.userClicked.role)
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
      .subscribe((res) => {
        console.log(res);
      });
    this.EtatSuivre = false;
    //this.getfollow()
  }
  createNotif(notif: any) {
    this.notificationsService.postNotification(notif).subscribe(res => console.log(res));
  }
}
