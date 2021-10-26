import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { UserService } from 'src/app/Shared/Service/user.service';

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
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getMe();


  }
  close() {
    this.modalController.dismiss();
  }
  getItems($event) {

    const val = $event.target.value;
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.usersfiltered = this.users.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      });

    } else {
      this.isItemAvailable = false;
    }
  }
  getMe() {
    this.userService.getMe().subscribe((res) => {
      this.userRole= res.data.data.role;
      if(this.userRole === 'user')  {
        this.userService.getRoleUsers().subscribe(res => this.users = res);
      }else {
        this.userService.getUsersKids().subscribe(res => this.users = res);
      }
    });
}
}
