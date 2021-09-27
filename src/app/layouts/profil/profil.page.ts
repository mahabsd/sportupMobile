import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Follow } from 'src/app/shared/Model/Follow';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  // activatedroute importer luser selon leur id
  // en utilisant lapi
  EtatSuivre = false;
  follow: Follow = new Follow();
  idfollow;
  profileClickedName;
  myInformation: any = { userLastName: '', userFirstName: '' };
  iduser;
  iduser1;
  idprofilePassed;
  idFollowtoDelete;
  user: any = [];
  posts: any[] = [];
  follower = false;
  ahla;
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private followerService: FollowerService,
    private modalController: ModalController,
    public router: Router
  ) {
    this.getUser();
    this.getfollow();
  }

  ngOnInit() {
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;


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
            }
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getUser() {
    this.userService.getMe().subscribe(
      (response) => {
        console.log(response);
        this.myInformation.userLastName = response.data.data.name;
        this.iduser = response.data.data.id;
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
      },
      (error) => {
        console.error(error);
      }
    );
  }

  itemSelected(data) {
    console.log(data);
  }
  buttonSuivre() {
    this.follow.userFollowed = this.idprofilePassed;
    this.follow.userFollowing = this.iduser;
    this.followerService.createFollow(this.follow).subscribe((res) => {
      console.log(res);
    });

    this.getfollow();
  }

  buttonBlock() {
    this.followerService
      .deleteFollow(this.idFollowtoDelete)
      .subscribe((res) => {
        console.log(res);
      });
    this.EtatSuivre = false;
    //this.getfollow()
  }
}
