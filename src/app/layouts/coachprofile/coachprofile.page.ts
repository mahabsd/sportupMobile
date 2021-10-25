import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { PostService } from 'src/app/Shared/Service/post.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-coachprofile',
  templateUrl: './coachprofile.page.html',
  styleUrls: ['./coachprofile.page.scss'],
})
export class CoachprofilePage implements OnInit {
  profileLabels = ['', '', ''];
  sliderOpts = {
    zoom: false,
    slidesPreview: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };

  user$: any = [];
  selected
  profileName;
  idprofilePassed;
  iduser1;
  follower = false;
  pub = false;
  type;
  posts$: any = [];
  testConnected = false;
  followId;
  // eslint-disable-next-line max-len
  coachInfo = { backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg' };
  apiImg = environment.apiImg + 'User/';
  isScrollTop: boolean;
  userId: string;
  publications;
  constructor(private userService: UserService,
    private modalController: ModalController,
    private followerService: FollowerService,
    private activatedRoute: ActivatedRoute,
    private savepostsService: FavorisService,
    private router: Router,
    private postService: PostService,
    private translate: TranslateService,
    public storage: Storage) {
      translate.setDefaultLang('en');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
     translate.use('en');
   storage.get('lan').then((val) => {
     if(val)
      translate.use(val);
   });
  }

  ngOnInit() {
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;
    this.type = this.activatedRoute.snapshot.params.type;
    this.getMe();
    this.getUserByid();
    this.getfollow();
    this.publiations();

  }


  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  getMe() {
    this.userService.getMe().subscribe(async res => {
      this.user$ = res.data.data;
    });

  }


  getUserByid() {

    this.userService.getMe().subscribe(async res => {
      console.log(res.data.data);

      this.userService.getUser(this.idprofilePassed).subscribe(
        (response) => {
          this.user$ = response.data.data;
          if (res.data.data._id === response.data.data._id) {
            this.testConnected = true
          }
        },
        (error) => {
          console.error(error);
        }
      );


    });



  }
  publicationsClick() {
    this.pub = true;
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selected = ev.detail.value;

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
              this.followId = res._id;
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
  publiations() {
    this.userId = this.router.url.slice(32, 56);
    this.postService.postsOwner(this.userId);
  }

}

