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
import { PopOverSuivrePageComponent } from '../../profil/pop-over-suivre-page/pop-over-suivre-page.component';
import { EventService } from 'src/app/shared/Service/event.service';

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
  checkSelf=false;
  idprofilePassed;
  profileClickedName;
  userPosts=[
    {
    id:1,
    content:"hello this is my first post,hello this is my first post,hello this is my first post,hello this is my first post",
    createdAt:"27/08/2020",
    title:"winterfel",
    user:{
      name:"jon snow"
    }
  },
  {
    id:2,
    content:"hello this is my second post,hello this is my second post,hello this is my second post,hello this is my second post",
    createdAt:"07/01/2020",
    title:"the wall",
    user:{
      name:"jon snow"
    }
  },
  {
    id:3,
    content:"hello this is my third post,hello this is my third post,hello this is my third post,hello this is my third post",
    createdAt:"26/12/2020",
    title:"beyond the wall",
    user:{
      name:"jon snow"
    }
  },
  {
    id:4,
    content:"hello this is my fourth post,hello this is my fourth post,hello this is my fourth post,hello this is my fourth post",
    createdAt:"26/12/2020",
    title:"back to the wall again",
    user:{
      name:"jon snow"
    }
  }
];
  isScrollTop: boolean;
  constructor(private userservice: UserService,
     private postKidsService: PostKidsService,
    public popoverController: PopoverController,
     public userService: UserService,
      private activatedRoute: ActivatedRoute,
      private eventService: EventService,
      ) { }

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
        console.log('user clicked' + response.data.data);
        this.user = response.data.data;
       // this.profileClickedName = response.data.data.name;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  async getMe() {
    this.userservice.getMe().subscribe((res) => {
    //  this.user = res.data.data;
      if(this.idprofilePassed===res.data.data._id){
        this.checkSelf=true;
      }
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


  async presentPopoverNewMsg(ev: any,idprofilePassed) {
    const popover = await this.popoverController.create({
      component: PopOverSuivrePageComponent,
     // cssClass: 'popoverProfil-custom-class',
      event: ev,
      componentProps: {idpassed: idprofilePassed},

      translucent: true
    });
   // console.log(idprofilePassed)
    popover.style.cssText = '--max-width: 150px;--max-height: 100px;--border-radius:70px; ';
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  userUpdate() {


    this.userService.updateMe(this.user).subscribe(res => {


      console.log(res);
    });
    this.update = false;
  }

  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
}
