import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  recherche;
  users;
  isItemAvailable: boolean;
  usersfiltered: any;
  userRole: any;
  userConnectedId: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMe();
  }
  close() {
    this.modalController.dismiss();
  }
  getItems($event) {
console.log(this.users);

    const val = $event.target.value;
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      if (this.userRole === 'user' || this.userRole === 'pro'  ) {
        this.userService.getRoleUsers().subscribe(res =>  {
          this.users = res;
          this.usersfiltered = this.users.filter((item) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
          });
         }
          );
      } else {
        this.userService.getUsersKids().subscribe(res => {
          this.users = res;
          this.usersfiltered = this.users.filter((item) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
          });
        }
          );
      }


    } else {
      this.isItemAvailable = false;
    }
  }
  getMe() {
    this.userService.getMe().subscribe((res) => {
      this.userConnectedId = res.data.data._id
      this.userRole = res.data.data.role;
    });
  }
  gotoProfile(userId) {
    if (userId === this.userConnectedId) {
     if(this.userRole === 'user' || this.userRole === 'pro' ){
      this.router.navigate(['menu/tabs/layouts/coachprofile/',userId,'me','coachphoto']);
     } else  {
// kids redirect
     }
      this.close();
    } else {
      if(this.userRole === 'user' || this.userRole === 'pro' ){
        this.router.navigate(['menu/tabs/layouts/coachprofile',userId,'followed','coachphoto']);
      }else{
// kids redirect
      }
      this.close();
    }
  }

}
