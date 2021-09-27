/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { PostKidsService } from 'src/app/Shared/kids/Service/postKids.service';
import { UserService } from '../../../Shared/Service/user.service';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { User } from 'src/app/Shared/Model/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  posts: any = [];
  update = false;
  gendre;
  selected;
  user: User = new User();
  user_id;
  title: any;
  idprofilePassed
  profileClickedName
  constructor(private userservice: UserService, private postKidsService: PostKidsService,
    public popoverController: PopoverController, public userService: UserService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selected = 'photo';
    this.getMe();
    this.getMyPostsKids();
    this.title = "Profile";
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;


    this.getUserByid();


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
  async getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user = res.data.data;
      console.log(this.user);
    });
  }

  getMyPostsKids() {
    this.userservice.getMe().subscribe((res) => {
      this.user_id = res.data.data._id;
      console.log(this.user_id);
      this.postKidsService.getMyPostsKids(this.user_id).subscribe((res1) => {
        this.posts = res1['data'];
        console.log(this.posts);

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

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
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

  userUpdate() {


    this.userService.updateMe(this.user).subscribe(res => {


      console.log(res);
    });
    this.update = false;
  }
}
