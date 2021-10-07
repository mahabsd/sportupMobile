import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShowImagePage } from 'src/app/component/modal/show-image/show-image.page';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';




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

  selected
  profileName;
  idprofilePassed;
  iduser1;
  follower = false;

  // eslint-disable-next-line max-len
  coachInfo = { backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg' };
  apiImg = environment.apiImg + 'User/';
  isScrollTop: boolean;
  pub=false;
  type;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,private savepostsService: FavorisService,  private followerService: FollowerService) { }

  ngOnInit() {
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;
    this.type = this.activatedRoute.snapshot.params.type;

   // this.getMe();
    this.getUserByid();
    this.getAllsaveposts()
    this.getfollow()
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
    this.savepostsService.getSavedPosts().subscribe(res => {
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
}

