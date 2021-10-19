/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatKidsPage } from '../chat-kids/chat-kids.page';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/Shared/Service/user.service';
import { EventService } from 'src/app/shared/Service/event.service';
@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.page.html',
  styleUrls: ['./boite-reception.page.scss'],
})
export class BoiteReceptionPage implements OnInit {
  message = '';
  kids = [];
  currentUser;
  isScrollTop: boolean;
  constructor( private modalController: ModalController,
    private socket: Socket,
    private userservice: UserService,
    private eventService: EventService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  this.getkids()
  }
  async click() {
    const modal = await this.modalController.create({
      component: ChatKidsPage,
      cssClass: 'my-custom-class',
      componentProps: {

      }
    });

    await modal.present();

    await modal.onWillDismiss().then((result) => {
     console.log("closed");


    });


  }

   getkids() {
    this.userservice.getUsersKids().subscribe((res) => {
      this.kids=res
     console.log(res);
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
}
